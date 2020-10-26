"use strict";

// REmove favourites from the list//
function removeFavourite(ev) {
  const removeId = parseInt(ev.currentTarget.id);
  const clicked = favList[removeId];

  const indexFav = favList.indexOf(clicked);
  favList.splice(indexFav, 1);

  setLocalStorage();
  paintSeries();
  paintFav();
}

//Delete btns one by one//
function listenerDelete() {
  const deleteItems = document.querySelectorAll(".js-delete-btn");
  for (const deleteItem of deleteItems) {
    deleteItem.addEventListener("click", removeFavourite);
  }
}

//Delete all btn//

const deleteAllBtn = document.querySelector(".js-delete-all");

function deleteAll() {
  favList = [];
  localStorage.clear();
  paintFav();
  getSeries();
}
deleteAllBtn.addEventListener("click", deleteAll);
