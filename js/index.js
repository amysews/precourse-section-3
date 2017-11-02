$("#all").click (function () {
  $('.filterDiv').toggleClass("filterToggle", false);
})

$("#yoga").click (function () {
  $('.chairYoga').toggleClass("filterToggle", true);
  $('.yoga').toggleClass("filterToggle", false);
})

$("#chair").click (function () {
  $('.chairYoga').toggleClass("filterToggle", false);
  $('.yoga').toggleClass("filterToggle", true);
})