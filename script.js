const GITHUB_URL = "https://github.com/akshay-admane/Professional-Javascript";

const typingElement = document.getElementById("typing");
const statusElement = document.getElementById("status");
const courseLink = document.getElementById("courseLink");

courseLink.href = GITHUB_URL;

const messages = [
  "initializing javascript...",
  "loading learning path...",
  "preparing developer mindset..."
];

let messageIndex = 0;
let characterIndex = 0;

function typeMessage() {
  if (characterIndex < messages[messageIndex].length) {
    typingElement.textContent += messages[messageIndex][characterIndex];
    characterIndex++;

    setTimeout(typeMessage, 38);
    return;
  }

  setTimeout(() => {
    typingElement.textContent = "";
    characterIndex = 0;
    messageIndex = (messageIndex + 1) % messages.length;

    typeMessage();
  }, 900);
}

typeMessage();

setTimeout(() => {
  statusElement.textContent = "Your learning journey starts here.";
}, 2800);
