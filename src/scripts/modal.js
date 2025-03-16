export function openModal(modalElement) {
  modalElement.classList.add("popup_is-opened");
  function closeByEsc(evt) {
    if (evt.key === "Escape") {
      const openPopup = document.querySelector(".popup_is-opened");
      if (openPopup) {
        closeModal(openPopup);
      }
    }
  }
  document.addEventListener("keydown", closeByEsc);
}

export function closeModal(modalElement) {
  modalElement.classList.add("popup_is-animated");
  modalElement.classList.remove("popup_is-opened");
}

export function closeByOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}
