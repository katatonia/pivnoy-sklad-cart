export const onDropdownClick = function () {
	document.addEventListener("DOMContentLoaded", function () {
		const dropdownButtons = document.querySelectorAll(".dropdown__btn");

		dropdownButtons.forEach(button => {
			button.addEventListener("click", function () {
				const dropdownContent = this.nextElementSibling;
				const isActive = dropdownContent.classList.contains("dropdown__content_active");

				// Закрыть все открытые dropdown__content
				document.querySelectorAll(".dropdown__content_active").forEach(content => {
					content.style.maxHeight = null;
					content.classList.remove("dropdown__content_active");
				});

				// Открыть текущее меню, если оно не было открыто
				if (!isActive) {
					dropdownContent.classList.add("dropdown__content_active");
					dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
				}
			});
		});

		// Закрывать меню при изменении ширины экрана более 797px
		window.addEventListener("resize", function () {
			if (window.innerWidth > 797) {
				document.querySelectorAll(".dropdown__content_active").forEach(content => {
					content.style.maxHeight = null;
					content.classList.remove("dropdown__content_active");
				});
			}
		});
	});
};
