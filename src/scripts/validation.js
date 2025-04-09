const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  objectConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectConfig.inputErrorClass);
  errorElement.classList.add(objectConfig.errorClass);
  errorElement.textContent = errorMessage;
};

const disableButton = (buttonElement, objectConfig) => {
  buttonElement.classList.add(objectConfig.inactiveButtonClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, objectConfig) => {
  buttonElement.classList.remove(objectConfig.inactiveButtonClass);
  buttonElement.disabled = false;
};

const hideInputError = (formElement, inputElement, objectConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectConfig.inputErrorClass);
  errorElement.classList.remove(objectConfig.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, objectConfig) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      objectConfig
    );
  } else {
    hideInputError(formElement, inputElement, objectConfig);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, objectConfig) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, objectConfig);
  } else {
    enableButton(buttonElement, objectConfig);
  }
};

const setEventListeners = (formElement, objectConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objectConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    objectConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, objectConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, objectConfig);
      toggleButtonState(inputList, buttonElement, objectConfig);
    });
  });
};

export const enableValidation = (objectConfig) => {
  const formList = Array.from(
    document.querySelectorAll(objectConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, objectConfig);
  });
};

export const clearValidation = (formElement, objectConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objectConfig.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    objectConfig.submitButtonSelector
  );
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, objectConfig);
  });
  disableButton(buttonElement, objectConfig);
};
