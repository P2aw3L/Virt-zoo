  // welcoming text
  const msg = new SpeechSynthesisUtterance();
  msg.text = "In this part of zoo, we will check if you can recognize animals by the sounds they make. Play each Sound and type your answer in the appropriate box. When all answers are in, Press Submit. Good luck!";
  window.speechSynthesis.speak(msg);
  
  // Delay the text-to-speech by 2 seconds (2000)
  setTimeout(() => {
    const tts = new SpeechSynthesisUtterance();
    window.speechSynthesis.speak(tts);
  }, 2000);


var sound1 = new Audio('./Sounds/bear.mp3');
var sound2 = new Audio('./Sounds/duck.mp3');
var sound3 = new Audio('./Sounds/owl.mp3');
var sound4 = new Audio('./Sounds/wolf.mp3');

document.getElementById('sound1').addEventListener('click', function() {
    sound1.play();
});

document.getElementById('sound2').addEventListener('click', function() {
    sound2.play();
});

document.getElementById('sound3').addEventListener('click', function() {
    sound3.play();
});

document.getElementById('sound4').addEventListener('click', function() {
    sound4.play();
});

document.getElementById('answer-form').addEventListener('submit', function(event) {
    event.preventDefault();

// Correct answers list
const answersList = ['bear', 'duck', 'owl', 'wolf'];

// Get user's answers from form inputs
const answer1 = document.getElementById('answer1').value.toLowerCase();
const answer2 = document.getElementById('answer2').value.toLowerCase();
const answer3 = document.getElementById('answer3').value.toLowerCase();
const answer4 = document.getElementById('answer4').value.toLowerCase();

// Check if user's answers match the correct answers list
if (answer1 === answersList[0] && answer2 === answersList[1] && answer3 === answersList[2] && answer4 === answersList[3]) {
  // When all answers are correct, display success message
  document.getElementById('result').textContent = 'Congratulations! You got all the answers correct.';
} else {
  // When at least one answer is incorrect, display error message
  document.getElementById('result').textContent = 'Sorry, one or more of your answers are incorrect. Please try again.';
}
});
  
