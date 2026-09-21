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
 * Lightweight typing animation
 */
function typeMessage() {

  const message =
    messages[messageIndex];


  if (
    characterIndex <
    message.length
  ) {

    typingElement.textContent +=
      message[characterIndex];

    characterIndex++;

    setTimeout(
      typeMessage,
      30
    );

    return;
  }


  /*
   * Pause briefly,
   * then move to next message.
   */
  setTimeout(() => {

    typingElement.textContent = "";

    characterIndex = 0;

    messageIndex =
      (messageIndex + 1) %
      messages.length;

    typeMessage();

  }, 600);
}


typeMessage();


/*
 * Update status after
 * the short intro animation.
 */
setTimeout(() => {

  statusElement.textContent =
    "Your learning journey starts here.";

}, 1300);


/*
 * IMPORTANT:
 *
 * There is intentionally NO:
 *
 * window.location.replace()
 *
 * window.location.href = ...
 *
 * redirect timer
 *
 * The user must click
 * "Open Course".
 */
