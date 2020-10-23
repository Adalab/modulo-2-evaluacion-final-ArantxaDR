"use strict";

let tvSeries = [];
const tvContainer = document.querySelector(".js-tvSeries");
const btn = document.querySelector(".js-btn");

function getSeries(event) {
  event.preventDefault();
  console.log("llamada");
  const inputValue = document.querySelector(".js-input").value;
  console.log(inputValue);
  fetch(`//api.tvmaze.com/search/shows?q="${inputValue}"`)
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

  tvContainer.innerHTML = showSeries;
}

btn.addEventListener("click", getSeries);
