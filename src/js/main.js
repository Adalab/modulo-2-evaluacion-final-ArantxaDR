"use strict";

let tvSeries = [];
const tvContainer = document.querySelector(".js-tvSeries");
const btn = document.querySelector(".js-btn");

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

function paintSeries() {
  let showSeries = "";

  for (const series of tvSeries) {
    showSeries += "<div>";
    showSeries += `<p>${series.name}</p>`;
    if (series.image === null) {
      showSeries += `<img  src= "//via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Show TV image"/>`;
    } else {
      showSeries += `<img  src="${series.image.medium}" alt="Show TV image"/>`;
    }
    showSeries += "</div>";
  }

  tvContainer.innerHTML = showSeries;
}

btn.addEventListener("click", getSeries);
