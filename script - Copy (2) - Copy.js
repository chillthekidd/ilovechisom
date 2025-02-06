// Interactive Carnation (Welcome Page)
document.querySelector(".carnation").addEventListener("click", function() {
    alert("Welcome to the garden of love, Babyy! 🌸💖");
});

// Heartfelt Love Message with Typing Effect
const message = `My love for you, Chisom, is beyond words. 
From the very first time we met, you have made my life brighter and better. 
Every moment with you is a treasure, and each day I fall deeper in love with you.
you are perfect in my eyes and you are such and amazing girl, you deserve the world and i will give it to you 
The way you make me smile, the way your laughter fills the room—everything about you is perfect. 
I can't wait to continue this journey together, hand in hand, heart to heart, forever. 
You're my forever love. 💖`;

let i = 0;
const messageElement = document.getElementById("message-text");

function typeMessage() {
    if (i < message.length) {
        messageElement.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 50); // Adjust typing speed
    }
}

typeMessage();

// Photo Gallery Section - Display Images
const galleryContainer = document.getElementById("gallery-container");

// Add photo upload functionality
document.getElementById("upload-photo").addEventListener("click", function() {
    document.getElementById("photo-upload").click();
});

document.getElementById("photo-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            galleryContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Interactive Memory Boxes
document.querySelectorAll(".interactive-box").forEach(function(box, index) {
    box.addEventListener("click", function() {
        alert(`Memory Box ${index + 1}: i love you mi rienna. 💖`);
    });
});

// Countdown Timer to Special Day (Valentine's Day)
function startCountdown() {
    const endDate = new Date("2025-02-14T00:00:00");
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const now = new Date();
        const timeRemaining = endDate - now;

        if (timeRemaining <= 0) {
            timerElement.textContent = "Happy Valentine's Day!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const interval = setInterval(updateTimer, 1000);
    updateTimer();
}

startCountdown();
