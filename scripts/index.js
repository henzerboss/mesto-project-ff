function createCard(cardName, cardLink) {
  // создаю функцию, которая будет создавать карточки, слушать кнопку и удалять карточки
  const cardTemplate = document.querySelector("#card-template").content; // получаю элемент с id #card-template
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); // клонирую шаблон из верстки
  cardElement.querySelector(".card__image").src = cardLink; // значению аргумента src присваиваю значение cardLink
  cardElement.querySelector(".card__title").textContent = cardName; // значению аргумента src присваиваю значение cardName
  deleteCard(cardElement); //вызываю функцию удаления карточки
  return cardElement; // возвращаю собранную карточку
}

function deleteCard(cardElement) {
  //создаю функцию удаления карточки
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      // слушаю кнопку удаления
      cardElement.remove(); // адьóс карточка!
    });
}

const placesList = document.querySelector(".places__list"); // получаю элемент с классом .places__list

for (i = 0; i < initialCards.length; i++) {
  // перебираю массив с карточками
  const cardName = initialCards[i].name; // выдергиваю из объекта название карточки
  const cardLink = initialCards[i].link; // выдергиваю из объекта ссылку карточки
  placesList.append(createCard(cardName, cardLink)); //добавляю все это на страницу
}

// The End

console.log(`
    /\\     /\\  
   {  '---'  } 
   {  O   O  } 
   ~~>  V  <~~  
    \\  ~~~  /   
     '-----'  
     /     \\  
    {       }  
     ~~~~~~~   
   `);
