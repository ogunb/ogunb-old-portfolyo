//----------Index Scroll Effects----------//
let works = document.querySelector(".works").getBoundingClientRect();
let worksTop = works.top;
let logoInner = document.querySelector(".logo svg .c");

if (document.querySelector(".hero")) {
	let landingTop = document.querySelector(".hero").getBoundingClientRect();
	let landingTopWidth = landingTop.width;
	let heroImg = document.querySelector(".cardimg--hero");
	let counter = 160;

	heroImg.addEventListener("mousemove", () => {
		counter += 10;
		heroImg.style.filter = `hue-rotate(${counter}deg)`;
		console.log("IM ALIVE");
	});

	window.addEventListener("scroll", () => {
		if (!document.querySelector(".case__html .main-wrapper")) {
			let cardItem = Array.from(document.querySelectorAll(".cardimg__item"));
			let body = document.querySelector("body");
			let logoOuter = document.querySelector(".logo svg .d");
			let links = Array.from(document.querySelectorAll(".nav ul li a"));

			let works = document.querySelector(".works").getBoundingClientRect();
			let worksTop = works.top;

			let contact = document.querySelector(".contact").getBoundingClientRect();
			let contactTop = contact.top;

			if (worksTop < 400) {
				cardItem.forEach(item => {
					item.classList.add("cardimg--reveal");
				});
			}
			if (worksTop < 300) {
				body.style.backgroundColor = "var(--bookopus)";
				if (landingTopWidth > 900) {
					logoInner.style.fill = "var(--light)";
					logoOuter.style.stroke = "var(--dark)";
					links.forEach(link => {
						link.style.color = "var(--dark)";
					});
				}
			} else {
				/* Default Values */
				body.style.backgroundColor = "var(--light)";
				if (landingTopWidth > 900) {
					logoInner.style.fill = "var(--cta)";
					logoOuter.style.stroke = "var(--dark)";
					links.forEach(link => {
						link.style.color = "var(--dark)";
					});
				}
			}
			if (contactTop < 200) {
				body.style.backgroundColor = "var(--cta)";
				if (landingTopWidth > 900) {
					logoInner.style.fill = "var(--darker)";
					logoOuter.style.stroke = "var(--light)";
					links.forEach(link => {
						link.style.color = "var(--light)";
					});
				}
			}
		}
	});
}

let menu = document.querySelector(".mobile-nav--menu");

menu.addEventListener("click", () => {
	let logo = document.querySelector(".mobile-nav .logo .c");
	let body = document.querySelector("body");
	let links = document.querySelector(".mobile-nav__links");

	menu.classList.toggle("active");

	if (menu.classList.contains("active") === true) {
		logo.style.fill = "var(--light)";
		body.style.overflowY = "hidden";
		links.style.opacity = "1";
		links.style.transform = "scale(1)";
	} else {
		closeTab();
	}
	function closeTab() {
		logo.style.fill = "var(--cta)";
		body.style.overflowY = "visible";
		links.style.opacity = "0";
		links.style.transform = "scale(1, 0)";
	}
	links.addEventListener("click", () => {
		if (menu.classList.contains("active")) {
			menu.classList.remove("active");
			closeTab();
		}
	});
});

let aboutTriDesk = document.querySelector(".about--desktop");
let aboutTriMob = document.querySelector(".about--mobile");

aboutTriDesk.addEventListener("click", openAbout);
aboutTriMob.addEventListener("click", () => {
	openAbout();
	bodyOverflow();
});

function openAbout() {
	let logo = document.querySelector(".logo svg .c");
	let about = document.querySelector(".about");
	let close = document.querySelector(".about__close");
	about.classList.add("about--active");

	if (about.classList.contains("about--active") === true) {
		aboutTriDesk.classList.add("highlight");
		logo.style.fill = "var(--light)";
	} else {
		logo.style.fill = "var(--cta)";
		aboutTriDesk.classList.remove("highlight");
	}
	close.addEventListener("click", () => {
		about.classList.remove("about--active");
		logo.style.fill = "var(--cta)";
		aboutTriDesk.classList.remove("highlight");
	});
}
function bodyOverflow() {
	let body = document.querySelector("body");
	let about = document.querySelector(".about");
	let close = document.querySelector(".about__close");

	if (about.classList.contains("about--active") === true) {
		body.style.overflowX = "hidden";
	} else {
		body.style.overflowX = "visible";
	}
	close.addEventListener("click", () => {
		body.style.overflowX = "visible";
	});
}

const bookopusWorks = document.querySelector(".bookopus");

bookopusWorks.addEventListener("click", fetchBookopusStudy);

function fetchBookopusStudy() {
	const cardImg = document.querySelector(".cardimg--bookopus");
	const worksArticle = document.querySelector(".works__article");

	const caseHtml = document.querySelector(".case__html");
	const caseBg = document.querySelector(".case__bg");

	const index = document.querySelector("#index");

	fetch("bookopus.html")
		.then(res => res.text())
		.then(data => {
			caseHtml.innerHTML = data;
		});

	// cardImg.style.animation = "slideLeft 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
	// worksArticle.style.animation = "slideRight 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";

	cardImg.style.opacity = "0";
	worksArticle.style.opacity = "0";

	caseBg.style.opacity = "1";
	caseBg.style.visibility = "visible";

	setTimeout(() => {
		menu.style.display = "none";
		caseHtml.style.opacity = "1";
		caseHtml.style.visibility = "visible";
		index.style.visibility = "hidden";

		logoInner.style.fill = "var(--cta)";

		window.scrollTo(0, 0);

		window.addEventListener("scroll", () => {
			if (document.querySelector(".case__html .main-wrapper")) {
				const mockup = document.querySelector(".case__mockup");
				const mockupImg = document.querySelector(".case__mockup img");
				const bottomMock = document.querySelector(".case__bottom");
				const bottomMockImg = Array.from(
					document.querySelectorAll(".case__bottom img")
				);

				let mockupOffset = mockup.getBoundingClientRect().top;
				let bottomOffset = bottomMock.getBoundingClientRect().top;

				const userFlow = Array.from(
					document.querySelectorAll("#userflow .st0")
				);

				if (mockupOffset < 450) {
					mockupImg.classList.add("animate");
				}
				// if (mockupOffset < -430){
				//     for (let st0 in userFlow){
				//         userFlow[st0].classList.add('animate')
				//     }
				// }
				if (bottomOffset < 400) {
					for (let img in bottomMockImg) {
						bottomMockImg[img].classList.add("animate");
					}
				}
			}
		});

		const mobileNav = document.querySelector(".mobile-nav");
		const caseClose = document.querySelector(".case__close");

		caseClose.addEventListener("click", closeCase);
		mobileNav.addEventListener("click", closeCase);

		function closeCase() {
			caseHtml.style.opacity = "0";
			caseHtml.style.visibility = "hidden";
			index.style.visibility = "visible";
			menu.style.display = "block";

			setTimeout(() => {
				window.scrollTo(0, worksTop);
				// cardImg.style.animation = "slideLeftBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";
				// worksArticle.style.animation = "slideRightBack 1.5s cubic-bezier(0.69, 0.02, 0.29, 1.16) forwards 1";

				cardImg.style.opacity = "1";
				worksArticle.style.opacity = "1";

				caseBg.style.opacity = "0";
				caseBg.style.visibility = "hidden";
			}, 100);
			caseHtml.innerHTML = " ";
		}
	}, 1500);
}
