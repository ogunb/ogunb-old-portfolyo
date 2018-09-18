function debounce(func, wait = 15, immediate = true) {
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

const works = document.querySelector('.works').getBoundingClientRect();
const worksTop = works.top;
const logoInner = document.querySelector('.logo svg .c');
const rennie = document.querySelector('.rennie');

rennie.addEventListener('click', () => {
	const coming = document.querySelector('.coming-soon');
	coming.classList.add('animate');
	if (coming.classList.contains('animate')) {
		setTimeout(function() {
			coming.classList.remove('animate');
		}, 2900);
	}
	// coming.style.opacity = "1";
	// coming.style.visibility = "visible";
	// coming.style.transform = "translateY(10vh)";
	// setTimeout(function() {
	// 	coming.style.opacity = "0";
	// 	coming.style.visibility = "hidden";
	// 	coming.style.transform = "translateY(-50vh)";
	// }, 1500);
	// setTimeout(function() {
	// 	coming.style.transform = "translateY(50vh)";
	// }, 2250);
});

if (document.querySelector('.hero')) {
	const landingTop = document.querySelector('.hero').getBoundingClientRect();
	const landingTopWidth = landingTop.width;
	const heroImg = document.querySelector('.cardimg--hero');
	let counter = 0;

	heroImg.addEventListener('mousemove', () => {
		counter += 10;
		heroImg.style.filter = `hue-rotate(${counter}deg)`;
		console.log('IM ALIVE');
	});
	function handleLandingScroll() {
		if (!document.querySelector('.case__html .main-wrapper')) {
			const cardItem = document.querySelectorAll('.cardimg__item');
			const body = document.querySelector('body');
			const logoOuter = document.querySelector('.logo svg .d');
			const links = document.querySelectorAll('.nav ul li a');

			const works = document.querySelector('.works').getBoundingClientRect();
			const worksTop = works.top;

			const rennieTop = rennie.getBoundingClientRect().top;

			const contact = document
				.querySelector('.contact')
				.getBoundingClientRect();
			const contactTop = contact.top;

			if (worksTop < 400) {
				cardItem.forEach(item => {
					item.classList.add('cardimg--reveal');
				});
			} else if (worksTop > 400) {
				/* Default Values */
				body.style.backgroundColor = 'var(--light)';
				if (landingTopWidth > 900) {
					logoInner.style.fill = 'var(--cta)';
					logoOuter.style.stroke = 'var(--dark)';
					links.forEach(link => {
						link.style.color = 'var(--dark)';
					});
				}
			}

			if (worksTop < 300) {
				body.style.backgroundColor = 'var(--bookopus)';
				if (landingTopWidth > 900) {
					logoInner.style.fill = 'var(--light)';
					logoOuter.style.stroke = 'var(--dark)';
					links.forEach(link => {
						link.style.color = 'var(--dark)';
					});
				}
			}
			if (rennieTop < 200) {
				body.style.backgroundColor = 'var(--rennie)';
				if (landingTopWidth > 900) {
					logoInner.style.fill = 'var(--light)';
					logoOuter.style.stroke = 'var(--dark)';
					links.forEach(link => {
						link.style.color = 'var(--light)';
					});
				}
			}
			if (contactTop < 200) {
				body.style.backgroundColor = 'var(--cta)';
				if (landingTopWidth > 900) {
					logoInner.style.fill = 'var(--darker)';
					logoOuter.style.stroke = 'var(--light)';
					links.forEach(link => {
						link.style.color = 'var(--light)';
					});
				}
			}
		}
	}
	window.addEventListener('scroll', debounce(handleLandingScroll));
}

const menu = document.querySelector('.mobile-nav--menu');

menu.addEventListener('click', () => {
	const logo = document.querySelector('.mobile-nav .logo .c');
	const body = document.querySelector('body');
	const links = document.querySelector('.mobile-nav__links');
	const link = Array.from(document.querySelectorAll('.mobile-nav__links li'));

	menu.classList.toggle('active');

	if (menu.classList.contains('active') === true) {
		logo.style.fill = 'var(--light)';
		body.style.overflowY = 'hidden';
		links.style.opacity = '1';
		links.style.transform = 'scale(1)';
		setTimeout(function() {
			link.forEach(item => {
				item.style.opacity = '1';
			});
		}, 290);
	} else {
		closeTab();
	}
	function closeTab() {
		link.forEach(item => {
			item.style.opacity = '0';
		});
		setTimeout(function() {
			logo.style.fill = 'var(--cta)';
			body.style.overflowY = 'visible';
			links.style.opacity = '0';
			links.style.transform = 'scale(1, 0)';
		}, 290);
	}
	links.addEventListener('click', () => {
		if (menu.classList.contains('active')) {
			menu.classList.remove('active');
			closeTab();
		}
	});
});

const aboutTriDesk = document.querySelector('.about--desktop');
const aboutTriMob = document.querySelector('.about--mobile');

aboutTriDesk.addEventListener('click', openAbout);
aboutTriMob.addEventListener('click', () => {
	openAbout();
	// bodyOverflow();
});

function openAbout() {
	const body = document.querySelector('body');
	const logo = document.querySelector('.logo svg .c');
	const about = document.querySelector('.about');
	const close = document.querySelector('.about__close');
	about.classList.add('about--active');

	if (about.classList.contains('about--active') === true) {
		aboutTriDesk.classList.add('highlight');
		logo.style.fill = 'var(--light)';
		body.style.overflow = 'hidden';
	} else {
		logo.style.fill = 'var(--cta)';
		aboutTriDesk.classList.remove('highlight');
		body.style.overflow = 'visible';
	}
	close.addEventListener('click', () => {
		about.classList.remove('about--active');
		logo.style.fill = 'var(--cta)';
		aboutTriDesk.classList.remove('highlight');
		body.style.overflow = 'visible';
	});
}
// function bodyOverflow() {
// 	const body = document.querySelector("body");
// 	const about = document.querySelector(".about");
// 	const close = document.querySelector(".about__close");

// 	if (about.classList.contains("about--active") === true) {
// 		body.style.overflowX = "hidden";
// 	} else {
// 		body.style.overflowX = "visible";
// 	}
// 	close.addEventListener("click", () => {
// 		body.style.overflowX = "visible";
// 	});
// }

const bookopusWorks = document.querySelector('.bookopus');

bookopusWorks.addEventListener('click', fetchBookopusStudy);

function fetchBookopusStudy() {
	const cardImg = document.querySelector('.cardimg--bookopus');
	const worksArticle = document.querySelector('.works__article');

	const caseHtml = document.querySelector('.case__html');
	const caseBg = document.querySelector('.case__bg');

	const index = document.querySelector('#index');

	fetch('bookopus.html')
		.then(res => res.text())
		.then(data => {
			caseHtml.innerHTML = data;
		});

	// cardImg.style.animation = "slideLeft 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
	// worksArticle.style.animation = "slideRight 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";

	cardImg.style.opacity = '0';
	worksArticle.style.opacity = '0';

	caseBg.style.opacity = '1';
	caseBg.style.visibility = 'visible';

	setTimeout(() => {
		menu.style.display = 'none';
		caseHtml.style.opacity = '1';
		caseHtml.style.visibility = 'visible';
		index.style.visibility = 'hidden';

		logoInner.style.fill = 'var(--cta)';

		window.scrollTo(0, 0);

		function handleCaseScroll() {
			if (document.querySelector('.case__html .main-wrapper')) {
				const mockup = document.querySelector('.case__mockup');
				const mockupImg = document.querySelector('.case__mockup img');
				const bottomMock = document.querySelector('.case__bottom');
				const bottomMockImg = Array.from(
					document.querySelectorAll('.case__bottom img')
				);

				const mockupOffset = mockup.getBoundingClientRect().top;
				const bottomOffset = bottomMock.getBoundingClientRect().top;

				const userFlow = Array.from(
					document.querySelectorAll('#userflow .st0')
				);

				if (mockupOffset < 450) {
					mockupImg.classList.add('animate');
				}
				// if (mockupOffset < -430){
				//     for (const st0 in userFlow){
				//         userFlow[st0].classList.add('animate')
				//     }
				// }
				if (bottomOffset < 400) {
					for (const img in bottomMockImg) {
						bottomMockImg[img].classList.add('animate');
					}
				}
			}
		}

		window.addEventListener('scroll', debounce(handleCaseScroll));

		const mobileNav = document.querySelector('.mobile-nav');
		const caseClose = document.querySelector('.case__close');

		caseClose.addEventListener('click', closeCase);
		mobileNav.addEventListener('click', closeCase);

		function closeCase() {
			caseHtml.style.opacity = '0';
			caseHtml.style.visibility = 'hidden';
			index.style.visibility = 'visible';
			menu.style.display = 'block';

			setTimeout(() => {
				window.scrollTo(0, worksTop);
				// cardImg.style.animation = "slideLeftBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
				// worksArticle.style.animation = "slideRightBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";

				cardImg.style.opacity = '1';
				worksArticle.style.opacity = '1';

				caseBg.style.opacity = '0';
				caseBg.style.visibility = 'hidden';
			}, 100);
			caseHtml.innerHTML = ' ';
		}
	}, 1500);
}
