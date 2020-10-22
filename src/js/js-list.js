"use strict";

fetch("http://api.tvmaze.com/search/shows?q=tronos")
  .then((response) => response.json())
  .then((data) => (document.body.innerHTML = data.result));
