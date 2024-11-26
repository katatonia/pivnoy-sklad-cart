export const showPopup = function () {
	const popup = document.querySelector(".popup");
	const deleteButtons = document.querySelectorAll(".cart__actions-item_delete");
	const confirmButtons = document.querySelectorAll(".cart__actions-item_confirm");

	const showPopupMessage = (message) => {
		popup.textContent = message;
		popup.classList.add("popup_active");

		setTimeout(() => {
			popup.classList.remove("popup_active");
		}, 3000);
	};

	deleteButtons.forEach((button) => {
		button.addEventListener("click", () => {
			showPopupMessage('Позиция удалена!');
		});
	});

	confirmButtons.forEach((button) => {
		button.addEventListener("click", () => {
			showPopupMessage('Позиция добавлена!');
		});
	});
};
