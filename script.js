const messages = [
    "Loh",
    "Bak8",
    "Wag k nmn ganiyan",
    "Baby :(((",
    "Pleeeease :(((",
    "BEBEEEEE",
    "MAAWA K SAKIN PLS",
    "iyak na aq cge",
    "loloves q pls",
    "I love youuu hehe say yes na mahal",
    "BEBELOVES Q HUHUHU",
    "AWA N LNG TLG",
];

let messageIndex = 0;
let yesButtonClicks = 0; // Track clicks

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Update No Button text with the next message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    yesButtonClicks++;

    if (yesButtonClicks < 6) {
        // Gradually increase Yes Button size
        let scale = 1 + yesButtonClicks * 0.5;
        yesButton.style.transform = `scale(${scale})`;
    } else {
        // Once enough clicks, make Yes Button fill the screen
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "3em"; // Increase text size
        yesButton.style.borderRadius = "0"; // Remove rounded corners
        yesButton.style.zIndex = "1000"; // Ensure it's on top
        yesButton.textContent = "YESSSSS 💖"; // Change text
    }

    // Prevent No Button from moving off-screen
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.min(Math.random() * maxX, maxX)}px`;
    noButton.style.top = `${Math.min(Math.random() * maxY, maxY)}px`;
}

function handleYesClick() {
    createHeartConfetti();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 2000);
}

function createHeartConfetti() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = Math.random() * 2 + 2 + "s"; 
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function handleNextClick() {
    createHeartConfetti();
    setTimeout(() => {
        window.location.href = "menu-page.html";
    });
}

// Get the modal and button elements
const modal = document.getElementById("imageModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

// Open the modal with fade-in animation
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modal.style.animation = "fadeIn 0.3s ease-in-out"; // Apply fade-in animation
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});