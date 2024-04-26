const nameInput = document.getElementById("nameInput");
const goButton = document.getElementById("goButton");


goButton.addEventListener("click", function () {
    // saves output of nameInput
    localStorage.setItem ('name', nameInput.value) 
    // Move to the second page
    window.location.href = "Crossroads/crossroads.html";
});

// Text-to-speech API (to read welcoming text)
var msg = new SpeechSynthesisUtterance();
msg.text = "Welcome to the Mini zoo, please type your name in the box and hit GO";
window.speechSynthesis.speak(msg);

// Delay the text-to-speech by 2 seconds (2000)
setTimeout(() => {
    const tts = new SpeechSynthesisUtterance();
    window.speechSynthesis.speak(tts);
}, 2000);

//startBtn.addEventListener("click", function () {
//    localStorage.setItem("name", nameInput.value);
//    window.location.href = "./html/picnic_choice1.html";
//});