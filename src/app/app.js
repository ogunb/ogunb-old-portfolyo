// debounce function to prevent crashing events.
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
// We will change some styling on the page, depending on the section.
function handleScroll() {
	// Declare an empty obj for future use of styles.
	let bodyStyles = {};
	// Get sections and their offset from top and put those into an object,
	// so I can add more items in the future and it won't break.
	const sectionNode = document.querySelectorAll('section');
	let sections = {};
	sectionNode.forEach(sec => {
		sections[sec.classList[0]] = sec.offsetTop - sec.offsetHeight / 2;
	});
	// Depending on the section you are on, the below code are going to set,
	// bodyStyles object and we'll run a function to set styles real-time.
	if (window.scrollY >= 250) {
		const cardItem = document.querySelectorAll('.cardimg__item');
		cardItem.forEach(item => {
			item.classList.add('cardimg--reveal');
		});
		bodyStyles = {
			body: 'var(--light)',
			logoInner: 'var(--cta)',
			logoOuter: 'var(--dark)',
			link: 'var(--dark)'
		};
		handleScrollStyles(bodyStyles);
	}
	if (window.scrollY >= sections.bookopus) {
		bodyStyles = {
			body: 'var(--bookopus)',
			logoInner: 'var(--light)',
			logoOuter: 'var(--dark)',
			link: 'var(--dark)'
		};
		handleScrollStyles(bodyStyles);
	}
	if (window.scrollY >= sections.rennie) {
		bodyStyles = {
			body: 'var(--rennie)',
			logoInner: 'var(--light)',
			logoOuter: 'var(--dark)',
			link: 'var(--light)'
		};
		handleScrollStyles(bodyStyles);
	}
	if (window.scrollY >= sections.contact) {
		bodyStyles = {
			body: 'var(--cta)',
			logoInner: 'var(--darker)',
			logoOuter: 'var(--light)',
			link: 'var(--light)'
		};
		handleScrollStyles(bodyStyles);
	}
}

const body = document.querySelector('body');
const logoInner = body.querySelector('.logo svg .c');
function handleScrollStyles(styles) {
	// const body
	// const logoInner
	const logoOuter = body.querySelector('.logo svg .d');
	const links = body.querySelectorAll('.nav ul li a');

	body.style.backgroundColor = styles.body;
	if (document.documentElement.offsetWidth > 900) {
		logoInner.style.fill = styles.logoInner;
		logoOuter.style.stroke = styles.logoOuter;
		links.forEach(link => {
			link.style.color = styles.link;
		});
	}
}

window.addEventListener('scroll', debounce(whichScroll));
function whichScroll() {
	console.count('this');
	!document.querySelector('.case__html .main-wrapper')
		? handleScroll()
		: handleBookopusScroll();
}

// Get both desktop and mobile nav about triggers and bind them a click event.
const aboutSec = document.querySelectorAll('.about--desktop, .about--mobile');
aboutSec.forEach(sec => sec.addEventListener('click', openAbout));
let trigger;

function openAbout() {
	trigger = this;
	const about = document.querySelector('.about');
	// Declare close element and bind the closing function to it.
	const close = document.querySelector('.about__close');
	close.addEventListener('click', closeAbout);
	// when the click fires, add about section an active class, which then will animate itself in.
	about.classList.add('about--active');
	// and add some style to other elements on the page.
	if (about.classList.contains('about--active')) {
		this.classList.add('highlight'); // add highlighter to the link.
		logoInner.style.fill = 'var(--light)';
		body.style.overflow = 'hidden';
	} else {
		closeAbout();
	}
	// Remove all styling and close about section.
	function closeAbout() {
		about.classList.remove('about--active');
		logoInner.style.fill = 'var(--cta)';
		trigger.classList.remove('highlight');
		body.style.overflow = 'visible';
	}
}

// declare mobile menu element and bind a click event to it.
const menu = document.querySelector('.mobile-nav--menu');
menu.addEventListener('click', handleMenu);

function handleMenu() {
	const logo = document.querySelector('.mobile-nav .logo .c'); // the logo inside of the mobile navigation.
	const mainLinks = document.querySelector('.mobile-nav__links');
	const links = Array.from(
		document.querySelectorAll('.mobile-nav__links > li')
	);

	menu.classList.toggle('active');
	// if the nav is activated...
	if (menu.classList.contains('active')) {
		// ...change styles...
		logo.style.fill = 'var(--light)';
		body.style.overflowY = 'hidden';
		// ...check the transition end...
		menu.addEventListener('transitionend', addStyles);

		function addStyles(e) {
			// ...if the ended transition is transform, change styles...
			if (e.propertyName === 'transform') {
				mainLinks.style.transform = 'scale(1)';
				// ...and reveal links one by one, in order.
				links.forEach((link, i) => {
					setTimeout(() => {
						link.style.opacity = '1';
					}, 100 * (i + 1));
				});
				// also remove the listener for menu.
				menu.removeEventListener('transitionend', addStyles, false);
			}
		}
	} else {
		closeMenu();
	}

	function closeMenu() {
		const reverseLinks = links.reverse();
		reverseLinks.forEach((link, i) => {
			links.forEach((link, i) => {
				setTimeout(() => {
					link.style.opacity = '0';
				}, 100 * (i + 1));
			});
			link.addEventListener('click', () => {
				if (menu.classList.contains('active')) {
					menu.classList.remove('active');
					closeMenu();
				}
			});
			link.addEventListener('transitionend', removeStyles);
		});

		function removeStyles(e) {
			if (e.propertyName === 'opacity') {
				logo.style.fill = 'var(--cta)';
				body.style.overflowY = 'visible';
				mainLinks.style.transform = 'scale(1, 0)';
				reverseLinks.forEach(link =>
					link.removeEventListener('transitionend', removeStyles)
				);
			}
		}
	}
}
// declare sections here to fetch.
// ! this requires a data-fetch on the html element, otherwise a "coming soon" statement will be shown.
// ! more on this below comments.
const bookopus = document.querySelector('.bookopus');
const rennie = document.querySelector('.rennie');
bookopus.addEventListener('click', function() {
	getPage(this.dataset.fetch, this);
});
rennie.addEventListener('click', function() {
	getPage(this.dataset.fetch, this);
});
// check if the page has an existing content...
function getPage(page, el) {
	if (page === undefined) {
		handleComing();
		return;
	}
	fetch(page)
		.then(res => res.text())
		.then(data => displayFetch(el, data)); // give clicked element and the data from the server to display.
}
// if it does give the data to the function below for display.
function displayFetch(el, data) {
	const cardImg = el.querySelector('.cardimg--bookopus');
	const worksArticle = el.querySelector('.works__article');
	const index = document.querySelector('#index');

	const caseLand = document.querySelector('#case-content');
	const caseHtml = caseLand.querySelector('.case__html');

	caseHtml.innerHTML = data;
	el.classList.add('case--active');
	caseLand.classList.add('case--active');
	menu.style.display = 'none';
	index.style.visibility = 'hidden';
	logoInner.style.fill = 'var(--cta)';
	window.scrollTo(0, 0);

	const closeBtn = document.querySelector('.case__close');
	closeBtn.addEventListener('click', caseClose);

	function caseClose() {
		caseHtml.innerHTML = '';
		el.classList.remove('case--active');
		caseLand.classList.remove('case--active');
		menu.style.display = 'block';
		index.style.visibility = 'visible';
		handleScroll();
		window.scrollTo(0, bookopus.offsetTop);
	}
}
// otherwise...
function handleComing() {
	// a "coming soon" caption will animate in and when the animation is done,
	// it will remove both animation class and the event listener from the coming soon element.
	const coming = rennie.querySelector('.coming-soon');
	coming.classList.add('animate');
	coming.addEventListener('animationend', clearAnimation);
	function clearAnimation() {
		coming.classList.remove('animate');
		coming.removeEventListener('animationend', clearAnimation);
	}
}
function handleBookopusScroll() {
	const mockup = document.querySelector('.case__mockup');
	const mockupImg = document.querySelector('.case__mockup img');
	const bottomMock = document.querySelector('.case__bottom');
	const bottomMockImg = Array.from(
		document.querySelectorAll('.case__bottom img')
	);

	const mockupOffset = mockup.getBoundingClientRect().top;
	const bottomOffset = bottomMock.getBoundingClientRect().top;

	if (mockupOffset < 450) {
		mockupImg.classList.add('animate');
	}

	if (bottomOffset < 400) {
		for (const img in bottomMockImg) {
			bottomMockImg[img].classList.add('animate');
		}
	}
}
window.addEventListener('scroll', () => {});
