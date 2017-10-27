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

var timeoutID;

$("#startButton").click (function () {
  $('.start').toggleClass('hide');
  $('.questionNum').toggleClass('hide');
  timeoutID = window.setTimeout(function() {
    $('.questionNum').toggleClass('hide');
    $('.questionOne').toggleClass('hide');
  }, 800);
})

var questionOneAnswer = "upward dog";

var answer1 = document.getElementsByTagName("li")[3];
var answer2 = document.getElementsByTagName("li")[4];
var answer3 = document.getElementsByTagName("li")[5];

var resp = document.getElementsByClassName("response");

$(answer1).click(function() {
  if (this.textContent == questionOneAnswer) {
    console.log("Correct");
    answer1.classList.add('correct');
    answer1.style.color = "green";
    $('.correctAnswer').toggleClass('hide', false);
    $('.wrongAnswer').toggleClass('hide', true);
  } else {
    console.log("wrong");
    answer1.classList.add('wrong');
    answer1.style.color = "red";
    $('.wrongAnswer').toggleClass('hide', false);
  }
})

$(answer2).click(function() {
  if (this.textContent == questionOneAnswer) {
    console.log("Correct");
    answer2.classList.add('correct');
    answer2.style.color = "green";
    $('.correctAnswer').toggleClass('hide', false);
    $('.wrongAnswer').toggleClass('hide', true);
  } else {
    console.log("wrong");
    answer2.classList.add('wrong');
    answer2.style.color = "red";
    $('.wrongAnswer').toggleClass('hide', false);
  }
})

$(answer3).click(function() {
  if (this.textContent == questionOneAnswer) {
    console.log("Correct");
    answer3.classList.add('correct');
    answer3.style.color = "green";
    $('.correctAnswer').toggleClass('hide', false);
    $('.wrongAnswer').toggleClass('hide', true);
  } else {
    console.log("wrong");
    answer3.classList.add('wrong');
    answer3.style.color = "red";
    $('.wrongAnswer').toggleClass('hide', false);
  }
})

$(".nextQ").click (function () {
  $('#qNum').textContent = "Question 2";
  $('.questionOne').toggleClass('hide');
  $('.questionNum').toggleClass('hide');
  // timeoutID = window.setTimeout(function() {
   // $('.questionNum').toggleClass('hide');
   // $('.questionOne').toggleClass('hide');
 // }, 800);
})


/*
var answer1 = document.getElementsByClassName("answerOne");
var answer2 = document.getElementsByTagName("li")[4];
var answer3 = document.getElementsByTagName("li")[5];

answer1.addEventListener("click", checkAnswer(answer1.textContent, questionOneAnswer));
answer2.addEventListener("click", checkAnswer(answer2, questionOneAnswer));
answer3.addEventListener("click", checkAnswer(answer3, questionOneAnswer));

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Correct");
  } else {
    console.log("wrong");
  }
}
*/


var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("someone clicked the button!");
})