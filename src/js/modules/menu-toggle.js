export const menuToggle = function () {
	const btn = document.querySelector(".header__btn");
	const nav = document.querySelector(".header__nav");
	const header = document.querySelector(".header");
	const body = document.body;

	btn.addEventListener("click", () => {
		nav.classList.toggle("header__nav_active");
		btn.classList.toggle("header__btn_active");
		header.classList.toggle("header_active");
		body.classList.toggle("lock");
	});
};
