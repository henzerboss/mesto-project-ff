export function openModal(classModal) {
  const elementModal = document.querySelector(classModal);
  elementModal.classList.add("popup_is-animated");
  setTimeout(() => {
    elementModal.classList.add("popup_is-opened");
    elementModal.classList.remove("popup_is-animated");
  }, 10);

  function listenerEscape(evt) {
    if (evt.key === "Escape") {
      closeModal(classModal);
      document.removeEventListener("keydown", listenerEscape);
    }
  }
  document.addEventListener("keydown", listenerEscape);
}

export function closeModal(classModal) {
  const elementModal = document.querySelector(classModal);
  elementModal.classList.add("popup_is-animated");
  elementModal.classList.remove("popup_is-opened");

  setTimeout(() => {
    elementModal.classList.remove("popup_is-animated");
  }, 600);
}
