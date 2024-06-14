const navHamburgers = document.querySelectorAll(".navbar__burger");
const overlay = document.querySelector(".overlay");

class NavbarUtils {
	static toggleNav(e) {
		const navbarList = document.querySelector(".navbar__list");
		const overlay = document.querySelector(".overlay");

		navbarList.classList.toggle("navbar__list--active");
		overlay.classList.toggle("overlay--active");
	}
}

// -----------------LISTENERS-----------------
window.addEventListener(
	"scroll",
	(e) => {
		const navbar = document.querySelector(".navbar");

		if (window.scrollY > 50) {
			navbar.classList.add("navbar--highlight");
		} else {
			navbar.classList.remove("navbar--highlight");
		}
	},
	{ passive: true }
);

overlay.addEventListener("click", (e) => {
	const navbarList = document.querySelector(".navbar__list");

	if (navbarList.classList.contains("navbar__list--active")) {
		NavbarUtils.toggleNav(e);
	}
});

navHamburgers.forEach((hamburger) => {
	hamburger.addEventListener("click", (e) => {
		NavbarUtils.toggleNav(e);
	});
});
