window.addEventListener("load", function () {
const nameInput = document.querySelector("#nameInput");
const name = localStorage.getItem("name");
if (name) {
nameInput.textContent = `Hi ${name}, please choose where you want to go!`;
  }
 }, false)

// Delay the text-to-speech by 2 seconds
setTimeout(() => {
    const tts = new SpeechSynthesisUtterance(hiddenText.textContent);
    window.speechSynthesis.speak(tts);
}, 2000);

