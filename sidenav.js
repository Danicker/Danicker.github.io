const sidenavCategories = document.querySelectorAll(".category");
const sidenavDropdowns  = document.querySelectorAll(".dropdown");

function onClickSidenavCategory(id) {
  var growDiv = sidenavDropdowns[id];
  if (growDiv.clientHeight != 0) {
    growDiv.style.height = 0;
  } else {
    for (i = 0; i < sidenavDropdowns.length; i++) {
      sidenavDropdowns[i].style.height = 0;
    }
    growDiv.style.height = growDiv.scrollHeight + "px";
  }
}

for (i = 0; i < sidenavCategories.length; i++) {
  sidenavCategories[i].addEventListener("click", (function(id) {
    return function() {
      onClickSidenavCategory(id);
    }
  })(i));
}