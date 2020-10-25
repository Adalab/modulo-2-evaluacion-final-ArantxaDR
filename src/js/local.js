"use strict";

// Serie localStorage
function setLocalStorage() {
  localStorage.setItem("favList", JSON.stringify(favList));
}
function getLocalStorage() {
  const getLocal = JSON.parse(localStorage.getItem("favList"));
  if (getLocal !== null) {
    favList = getLocal;
  } else {
    favList = [];
  }
}

getLocalStorage();
