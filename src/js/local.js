"use strict";

// Serie localStorage
function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
}
function getLocalStorage() {
  const getLocal = JSON.parse(localStorage.getItem("series"));
  if (getLocal !== null) {
    favList = getLocal;
    //addFavourite();
  } else {
    favList = [];
  }
  console.log(favList);
}

getLocalStorage();
