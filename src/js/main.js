"use strict";

let tvSeries = [];
const tvContainer = document.querySelector(".js-tvSeries");
const btn = document.querySelector(".js-btn");

function getSeries() {
  console.log("llamada");
  const inputValue = document.querySelector(".js-input").value;
  console.log(inputValue);
  fetch("//api.tvmaze.com/search/shows?q=" + inputValue)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {
        const serie = {
          name: data[i].show.name,
          img: data[i].show.image.medium,
        };
        tvSeries[i] = serie;
        console.log(tvSeries[i]);
        paintSeries();
      }
    });
}

function paintSeries() {
  let showSeries = "";
  for (const series of tvSeries) {
    showSeries += "<div>";
    showSeries += `<p>${series.name}</p>`;
    showSeries += `<img  src="${series.img}" alt="Show TV image"/>`;
    showSeries += "</div>";
  }
  console.log(showSeries);
  tvContainer.innerHTML = showSeries;
  console.log("pintar");
}
getSeries();
btn.addEventListener("click", console.log("patata"));
