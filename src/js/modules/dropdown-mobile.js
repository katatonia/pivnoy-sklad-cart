export const onDropdownClick = function () {
	document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".dropdown__btn").forEach(button => {
			button.addEventListener("click", function () {
				const dropdownContent = this.nextElementSibling;

				// Проверить, открыто ли текущее меню
				const isActive = dropdownContent.classList.contains("dropdown__content_active");

				// Закрыть все открытые dropdown__content
				document.querySelectorAll(".dropdown__content_active").forEach(content => {
					content.style.maxHeight = null;
					content.classList.remove("dropdown__content_active");
				});

				// Если текущее меню не было открыто, открываем его
				if (!isActive) {
					dropdownContent.classList.add("dropdown__content_active");
					dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
				}
			});
		});
	});

};
