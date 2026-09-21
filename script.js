const GITHUB_URL =
  "https://github.com/akshay-admane/Professional-Javascript";


const typingElement =
  document.getElementById("typing");

const statusElement =
  document.getElementById("status");

const courseLink =
  document.getElementById("courseLink");


/*
 * GitHub destination
 */
courseLink.href = GITHUB_URL;


/*
 * Terminal messages
 */
const messages = [
  "initializing javascript...",
  "loading learning path...",
  "preparing developer mindset..."
];


let messageIndex = 0;
let characterIndex = 0;


/*
 * Terminal typing animation
 */
function typeMessage() {

  const currentMessage =
    messages[messageIndex];


  if (
    characterIndex <
    currentMessage.length
  ) {

    typingElement.textContent +=
      currentMessage[characterIndex];

    characterIndex++;

    setTimeout(typeMessage, 35);

    return;
  }


  /*
   * Pause after completing message
   */
  setTimeout(() => {

    typingElement.textContent = "";

    characterIndex = 0;

    messageIndex =
      (messageIndex + 1) %
      messages.length;

    typeMessage();

  }, 700);
}


typeMessage();


/*
 * Update status message
 */
setTimeout(() => {

  statusElement.textContent =
    "Your learning journey starts here.";

}, 1500);


/*
 * IMPORTANT:
 *
 * There is intentionally NO:
 *
 * window.location.replace()
 *
 * window.location.href = ...
 *
 * setTimeout(() => redirect...)
 *
 * The user must click the button.
 */
courseLink.addEventListener("click", () => {

  courseLink.textContent =
    "OPENING COURSE...";

});
