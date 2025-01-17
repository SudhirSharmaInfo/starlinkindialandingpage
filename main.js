function search() {
    var element = document.getElementById("searchbar");
    element.classList.toggle("searchbartoggle");
  }

function mobnav() {
  document.getElementById("navigation-option-mobile").style.transform = "translateX(0%)";
  document.getElementById("navigation-option-mobile").style.transition = " transform 0.4s";
}
function navclose() {
    document.getElementById("navigation-option-mobile").style.transform = "TranslateX(100%)";
  }


  
