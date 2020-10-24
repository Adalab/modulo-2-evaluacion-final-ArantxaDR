"use strict";
let favList = [];
const favSeries = function (ev) {
  const clicked = parseInt(ev.currentTarget.id);
  const indexFav = favList.indexOf(clicked);
  const isFavorite = indexFav !== -1;

  if (isFavorite === false) {
    favList.push(clicked);
  } else {
    favList.splice(indexFav, 1);
  }

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
