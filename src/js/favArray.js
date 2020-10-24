"use strict";
let favList = [];
const favSeries = function (ev) {
  const clickedId = parseInt(ev.currentTarget.id);
  const clicked = tvSeries[clickedId];

  const indexFav = favList.indexOf(clicked);
  const isFavorite = indexFav !== -1;

  if (isFavorite === false) {
    favList.push(clicked);
  } else {
    favList.splice(indexFav, 1);
  }
  setLocalStorage();
  paintSeries();
  listenSeries();
};
//Función para seleccionar favoritas
function listenSeries() {
  const seriesItems = document.querySelectorAll(".js-serie-container");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", favSeries);
  }
}
