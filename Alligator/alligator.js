document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable-image');
    const returnButton = document.querySelector('.return-button');

    images.forEach((image) => {
        image.addEventListener('click', (e) => {
            const sound = new Audio(e.target.dataset.sound);
            sound.play();

            // Play text-to-speech message only when the clicked image plays the "bite.mp3" sound
         if (e.target.dataset.sound === './Sounds/bite.mp3') {
                // Add an event listener for the "ended" event of the Audio object
                sound.addEventListener('ended', () => {
                    const tts = new SpeechSynthesisUtterance("Congratulations! You have chosen correct food!");
                    window.speechSynthesis.speak(tts);
                });
            }
        });
    });

    returnButton.addEventListener('click', () => {
        window.location.href = '../Crossroads/crossroads.html';
    });
});

// Text-to-speech API (to read welcoming text)
const hiddenText = document.createElement("p");
hiddenText.id = "hiddenText";
hiddenText.textContent = "This hungry alligator needs food. Please pick the correct one to hear him snap";
document.body.appendChild(hiddenText);

// Delay the text-to-speech by 2 seconds (2000)
setTimeout(() => {
    const tts = new SpeechSynthesisUtterance(hiddenText.textContent);
    window.speechSynthesis.speak(tts);
}, 2000);