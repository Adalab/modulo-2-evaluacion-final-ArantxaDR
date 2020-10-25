"use strict";

// Quitar favoritas de la lista
function removeFavourite(ev) {
  const removeId = parseInt(ev.currentTarget.id);
  const clicked = favList[removeId];

  const indexFav = favList.indexOf(clicked);
  const delFavorite = indexFav !== -1;

  if (delFavorite === removeID) {
    favList.splice(indexFav, 1);
  }
}

//Botones de borrado
function listenerDelete() {
  const deleteItems = document.querySelector(".js-delete-btn");
  for (const deleteItem of deleteItems) {
    deleteItem.addEventListener("click", removeFavourite);
  }
}

//Botón de borrar todo

const deleteAllBtn = document.querySelector(".js-delete-all");

function deleteAll() {
  favList = [];
  localStorage.clear();
  paintFav();
  getSeries();
}
deleteAllBtn.addEventListener("click", deleteAll);
