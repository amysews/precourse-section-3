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

$("#randPoseGen").click (function () {
  $('#targetNameEng') = "Downward Dog";
  
  // Generate random number between 1 and X (depending on how many poses I want to include)
  //let randInt = ;

  // Switch between 1 and X
  //switch randInt:
  //case 1:
  //src="pose1.jpg";
  //name="Pose 1";
  //break;
  //etc.

  // Update or create for first time image according to src

  // Update or create pose name next to image - english and sanscript 

})