import "../pages/index.css";
import { createCard } from "./card.js";
import { openModal, closeModal, closeByOverlayClick } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getUserData,
  getInitialCards,
  updateUserData,
  updateUserAvatar,
  sendCard,
} from "./api.js";
const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditAvatar = document.querySelector(".profile__image-overlay");
const profileAddButton = document.querySelector(".profile__add-button");
const allPopups = document.querySelectorAll(".popup");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");
const formEditProfile = document.querySelector("form[name='edit-profile']");
const formEditProfileAvatar = document.querySelector(
  "form[name='edit-profile-avatar']"
);
const avatarInput = formEditProfileAvatar.querySelector(
  ".popup__input_type_url"
);
const nameInput = formEditProfile.querySelector(".popup__input_type_name");
const jobInput = formEditProfile.querySelector(
  ".popup__input_type_description"
);
const formNewPlace = document.querySelector("form[name='new-place']");
const cardName = formNewPlace.querySelector(".popup__input_type_card-name");
const cardURL = formNewPlace.querySelector(".popup__input_type_url");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupEditAvatar = document.querySelector(".popup_type_edit-avatar");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupImageElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

Promise.all([getUserData(), getInitialCards()])
  .then(([userData, cards]) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    const userId = userData._id;

    cards.forEach((card) => {
      const cardName = card.name;
      const cardLink = card.link;
      const cardLikeCount = card.likes.length;
      const cardAlt = `Изображение места: ${cardName}`;
      const authorId = card.owner._id;
      const cardID = card._id;
      const isLiked = card.likes.some((user) => user._id === userId);
      placesList.append(
        createCard(
          cardName,
          cardLink,
          cardAlt,
          cardLikeCount,
          () => openImagePopup(cardLink, cardAlt),
          authorId,
          userId,
          cardID,
          isLiked
        )
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

profileEditAvatar.addEventListener("click", () => {
  openModal(popupEditAvatar);
  clearValidation(formEditProfileAvatar, formConfig);
});

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupEditProfile);
  clearValidation(formEditProfile, formConfig);
});

profileAddButton.addEventListener("click", () => {
  openModal(popupNewCard);
  clearValidation(formNewPlace, formConfig);
});

allPopups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => closeModal(popup));
  popup.addEventListener("click", (evt) => closeByOverlayClick(evt, popup));
});

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  renderLoading(formEditProfile, true);
  updateUserData(nameValue, jobValue)
    .then((userData) => {
      profileName.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(popupEditProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(formEditProfile, false);
    });
}

formEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

function handleFormSubmitUpdateAvatar(evt) {
  evt.preventDefault();
  const urlProfileAvatar = avatarInput.value;
  renderLoading(formEditProfileAvatar, true);
  updateUserAvatar(urlProfileAvatar)
    .then((userData) => {
      profileAvatar.style.backgroundImage = `url('${userData.avatar}')`;
      closeModal(popupEditAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(formEditProfileAvatar, false);
    });
}

formEditProfileAvatar.addEventListener("submit", handleFormSubmitUpdateAvatar);

function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  const cardValue = cardName.value;
  const cardLink = cardURL.value;
  const cardAlt = `Изображение места: ${cardValue}`;
  const cardLikeCount = 0;
  const isLiked = false;
  renderLoading(formNewPlace, true);
  sendCard(cardValue, cardLink)
    .then((cardData) => {
      placesList.prepend(
        createCard(
          cardData.name,
          cardData.link,
          cardAlt,
          cardLikeCount,
          () => openImagePopup(cardLink, cardAlt),
          cardData.owner._id,
          cardData.owner._id,
          cardData._id,
          isLiked
        )
      );
      closeModal(popupNewCard);
      formNewPlace.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(formNewPlace, false);
    });
}

formNewPlace.addEventListener("submit", handleFormSubmitNewPlace);

function openImagePopup(imageSrc, imageAlt) {
  popupImageElement.src = imageSrc;
  popupImageElement.alt = imageAlt;
  popupCaption.textContent = imageAlt;
  openModal(popupImage);
}

enableValidation(formConfig);

function renderLoading(elementPopup, isLoading) {
  const buttonSubmitElement = elementPopup.querySelector(".popup__button");
  if (isLoading) {
    buttonSubmitElement.textContent = "Сохранение...";
  } else {
    buttonSubmitElement.textContent = "Сохранить";
  }
}
