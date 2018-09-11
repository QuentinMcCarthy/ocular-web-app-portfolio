console.log("JS: Ready");

var menuBtn = document.getElementById('menuBtn');

$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(".menu").toggle();
  });
  $(".menu-btn").click(function(){
    $(".menu-btn").toggleClass("btnMenuClicked");
  });
});
