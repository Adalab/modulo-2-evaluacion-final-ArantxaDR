"use strict";
const favSeries = function (ev) {
  const clicked = ev.currentTarget;
  console.log(clicked);
};
//Función para seleccionar favoritas
function listenSeries() {
  const seriesItems = document.querySelectorAll(".js-serie-container");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", favSeries);
  }
}
