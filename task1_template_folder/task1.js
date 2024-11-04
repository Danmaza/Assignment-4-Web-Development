/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author:Daniel Mazariegos    
      Date:11/3/24   

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

let timeID;


// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function() {
   overlay.className = "showquiz"; // Set class to show the quiz
   timeID = setInterval(countdown, 1000); // Repeat countdown every 1 second and store the interval ID in timeID
};

function countdown() {
   if (timeLeft === 0) {
      // If timeLeft is 0, stop the timer and check answers
      clearInterval(timeID); // Stop the timer
      overlay.className = "hidequiz"; // Hide the quiz overlay

      // Check the answers and get the total correct count
      let totalCorrect = checkAnswers();

      // If all answers are correct, display a congratulatory message
      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You got 100% correct!");
      } else {
         // If not all answers are correct, display the number of incorrect answers
         let incorrectCount = correctAnswers.length - totalCorrect;
         alert(`You got ${incorrectCount} out of ${correctAnswers.length} incorrect.`);

         // Reset the timer for another attempt
         timeLeft = quizTime;
         quizClock.value = timeLeft; // Update the display of the timer
         overlay.className = "hidequiz"; // Hide the quiz overlay
      }
   } else {
      // If timeLeft is not 0, decrement it and update the timer display
      timeLeft--; // Decrease timeLeft by 1
      quizClock.value = timeLeft; // Set quizClock.value to the new timeLeft
   }
}




















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

