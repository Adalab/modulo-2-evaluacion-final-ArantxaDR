"use strict";

// Quitar favoritas de la lista
function removeFavourite(ev) {
  const favSeriesId = parseInt(ev.currentTarget.id);

  const foundSeires = favList.find(
    (currentSeries) => currentSeries.id === favSeriesId
  );

  const favIndex = favSeries.indexOf(foundSeires);
  favSeries.splice(favIndex, 1);
  localStorage.setItem(`favSeries`, JSON.stringify(favList));

  ev.preventDefault;

  paintFav();
  getSeries();
  //   listenerDelete();
}
//Botones de borrado
// function listenerDelete() {
//   const deleteItems = document.querySelector(".js-delete-btn");
//   for (const deleteItem of deleteItems) {
//     deleteItem.addEventListener("click", removeFavourite);
//   }
// }
//Botón de borrar todo
const deleteAllBtn = document.querySelector(".js-delete-all");

function deleteAll() {
  favList = [];
  localStorage.clear();
  paintFav();
  getSeries();
}
deleteAllBtn.addEventListener("click", deleteAll);
