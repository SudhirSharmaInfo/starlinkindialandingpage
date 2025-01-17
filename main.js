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


  $(document).ready(function () {
    $("#About-mob-li").click(function() {
        $(".About-mob-hov-box").toggle();
    })

    $("#Product-mob-li").click(function() {
        $(".Product-mob-hov-box").toggle();
    })

    $("#Accessories-mob-li").click(function() {
        $(".Accessories-mob-hov-box").toggle();
    })

    $("#Softwares-mob-li").click(function() {
        $(".Softwares-mob-hov-box").toggle();
    })

    $("#Help-mob-li").click(function() {
        $(".Help-mob-hov-box").toggle();
    })

})