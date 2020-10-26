"use strict";
let favList = [];

//Favourite series array//
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

  paintFav();
};
//Listener to select series//
function listenSeries() {
  const seriesItems = document.querySelectorAll(".js-serie-container");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", favSeries);
  }
}
