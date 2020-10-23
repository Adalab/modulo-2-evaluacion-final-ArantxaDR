"use strict";

//Función para seleccionar favoritas
function listenSeries() {
  const seriesItems = document.querySelectorAll(".js-serie-container");
  for (const seriesItem of seriesItems) {
    seriesItem.addEventListener("click", favSeries);
  }
}
