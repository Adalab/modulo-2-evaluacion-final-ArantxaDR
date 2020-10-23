"use strict";
let drama = [];
fetch("http://api.tvmaze.com/search/shows?q=tronos")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].show.name);
      console.log(data[i].show.image.medium);
    }
  });
