"use strict";

let tvSeries = [];
const tvContainer = document.querySelector(".js-tvSeries");
const btn = document.querySelector(".js-btn");
getLocalStorage();
paintFav();

//Función para recoger la info de las series//
function getSeries(event) {
  event.preventDefault();

  const inputValue = document.querySelector(".js-input").value;

  fetch(`//api.tvmaze.com/search/shows?q="${inputValue}"`)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        tvSeries[i] = data[i].show;

        paintSeries();
      }
    });
}

//Función para pintar las series//
function paintSeries() {
  let showSeries = "";
<<<<<<< HEAD

  for (const series of tvSeries) {
    showSeries += "<div>";
    showSeries += `<p>${series.name}</p>`;
    if (series.image == null) {
      showSeries += `<img  src= "//via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Show TV image"/>`;
    } else {
      showSeries += `<img  src="${series.image.medium}" alt="Show TV image"/>`;
=======
  for (let i = 0; i < tvSeries.length; i++) {
    let classFav;

    const favSerie = favList.find((drama) => drama.id === tvSeries[i].id);

    //const favIndex = favList.indexOf(i);
    const favIndex = favList.indexOf(favSerie);
    const favotire = favIndex !== -1;

    if (favotire === true) {
      classFav = "serie_container_fav";
    } else {
      classFav = "";
    }

    showSeries += `<div class="serie_container ${classFav} js-serie-container" id="${i}">`;
    showSeries += `<p>${tvSeries[i].name}</p>`;
    if (tvSeries[i].image === null) {
      showSeries += `<img  src= "//via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Show TV image"/>`;
    } else {
      showSeries += `<img  src="${tvSeries[i].image.medium}" alt="Show TV image"/>`;
>>>>>>> master
    }
    showSeries += "</div>";
  }

  tvContainer.innerHTML = showSeries;
  if (tvSeries.length > 0) {
    listenSeries();
  }
}

btn.addEventListener("click", getSeries);
