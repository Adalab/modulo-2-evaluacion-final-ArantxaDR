"use strict";

let tvSeries = [];
const tvContainer = document.querySelector(".js-tvSeries");
const btn = document.querySelector(".js-btn");
getLocalStorage();
paintFav();

//API function//
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

//Paint series function//
function paintSeries() {
  let showSeries = "";
  for (let i = 0; i < tvSeries.length; i++) {
    let classFav;

    const favSerie = favList.find((drama) => drama.id === tvSeries[i].id);

    const favIndex = favList.indexOf(favSerie);
    const favotire = favIndex !== -1;

    if (favotire === true) {
      classFav = "serie_container_fav";
    } else {
      classFav = "";
    }

    showSeries += `<div class="serie_container ${classFav} js-serie-container" id="${i}">`;
    showSeries += `<p>${tvSeries[i].name}</p>`;
    showSeries += `<p>${tvSeries[i].status}</p>`;
    if (tvSeries[i].image === null) {
      showSeries += `<img class ="img_main" src= "//via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Show TV image"/>`;
    } else {
      showSeries += `<img  class ="img_main" src="${tvSeries[i].image.medium}" alt="Show TV image"/>`;
    }
    showSeries += "</div>";
  }

  tvContainer.innerHTML = showSeries;
  if (tvSeries.length > 0) {
    listenSeries();
  }
}

btn.addEventListener("click", getSeries);
