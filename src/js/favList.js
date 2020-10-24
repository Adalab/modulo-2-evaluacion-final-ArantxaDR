"use strict";

const favSeriesContainer = document.querySelector(".js-list");

function paintFav() {
  let showList = "";

  for (let i = 0; i < favList.length; i++) {
    showList += `<li class="js-fav-item js-fav${i} fav_list_item">`;
    showList += `<p>${favList[i].name}</p>`;
    if (favList[i].image === null) {
      showList += `<img  src= "//via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="Show TV image"/>`;
    } else {
      showList += `<img  src="${favList[i].image.medium}" alt="Show TV image"/>`;
    }
    showList += "</li>";
  }
  favSeriesContainer.innerHTML = showList;
}
