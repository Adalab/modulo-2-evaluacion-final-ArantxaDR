"use strict";

let tvSeries = [];

const allSeries = document.querySelector(".js-tvSeries");

function getSeries() {
  fetch("//api.tvmaze.com/search/shows?q=tronos")
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        tvSeries[0] = data[i].show.name;
        tvSeries[1] = data[i].show.image.medium;
        console.log(tvSeries);
        paintSeries();
      }
    });
}

function paintSeries() {
  console.log("pintar");
}
getSeries();
