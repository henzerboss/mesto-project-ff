const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-35",
  headers: {
    authorization: "9abf0ed7-c756-4a46-9d33-7ba85115d0f4",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then((res) => {
    return checkResponse(res);
  });
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => {
    return checkResponse(res);
  });
};

export const updateUserData = (userName, userAbout) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: userName,
      about: userAbout,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const updateUserAvatar = (avatarLink) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const sendCard = (cardName, cardLink) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const removeCard = (cardID) => {
  return fetch(`${config.baseUrl}/cards/${cardID}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    return checkResponse(res);
  });
};

export const countLikeCard = (cardID, isLiked) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: config.headers,
  }).then((res) => {
    return checkResponse(res);
  });
};
