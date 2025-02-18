function createCard(cardName, cardLink) { // создал функцию, которая будет создавать карточки, слушать кнопку и удалять карточки
    const cardTemplate = document.querySelector('#card-template').content; // получил элемент с id #card-template
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true); // клонировал шаблон из верстки
    cardElement.querySelector('.card__image').src = cardLink; // значению аргумента src присвоил значение cardLink
    cardElement.querySelector('.card__title').textContent = cardName; // значению аргумента src присвоил значение cardName
    cardElement.querySelector('.card__delete-button').addEventListener('click', function(evt) { // слушаю кнопку удаления
        cardElement.remove(); // адьóс карточка!
    });
    
    return cardElement; // возвращаю собранную карточку
}

const placesList = document.querySelector('.places__list'); // получил элемент с классом .places__list

for (i = 0; i < initialCards.length; i++) { // перебираю массив с карточками
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