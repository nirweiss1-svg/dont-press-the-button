// This variable remembers how many times the button has been clicked.
let pressCount = 0;

// These variables connect JavaScript to elements in index.html.
const button = document.getElementById("dangerButton");
const countDisplay = document.getElementById("count");
const messageDisplay = document.getElementById("message");

// These variables connect JavaScript to the new stress relief controls.
const stressButton = document.getElementById("stressButton");
const stressLevelDisplay = document.getElementById("stressLevel");
const stressMessageDisplay = document.getElementById("stressMessage");
const calmEmoji = document.getElementById("calmEmoji");

// The messages get sillier and more dramatic as the counter rises.
const messages = [
  "Oh. You pressed it. Bold choice.",
  "Second press? The button noticed.",
  "A tiny alarm somewhere just cleared its throat.",
  "The button has filed a complaint with management.",
  "The room lights flicker. Probably unrelated. Probably.",
  "A dramatic violin starts playing in the distance.",
  "The button is now wearing a tiny helmet.",
  "Several imaginary scientists are taking notes.",
  "This is how legends begin and safety posters get printed.",
  "The button has entered its final form. It looks exactly the same.",
  "Warning: the drama levels are now lightly sparkling.",
  "The emergency confetti cannons are charging.",
  "A council of buttons has been summoned.",
  "The button whispers, 'Again?' with theatrical disappointment.",
  "Reality has put on sunglasses and walked slowly away."
];
// Stress starts at 100%. Each calm click lowers this number.
let stressLevel = 100;

// These messages are separate from the dramatic red-button messages.
const stressMessages = [
  "A tiny cloud just left your shoulders.",
  "Excellent. Your eyebrows unclenched.",
  "Your stress packed a small suitcase.",
  "One imaginary spa towel has been delivered.",
  "The chaos is now speaking in a whisper.",
  "A deep breath has entered the chat.",
  "Your nervous system gives this click a polite nod.",
  "Somewhere, a kettle decided not to whistle."
];


// This function chooses the right message for the current click number.
function getMessage(count) {
  // Arrays start at 0, so click 1 uses messages[0].
  const messageIndex = count - 1;

  if (messageIndex < messages.length) {
    return messages[messageIndex];
  }

  // After the written messages run out, every click still gets a new message.
  return `Click ${count}: the button saga continues. Somewhere, a very serious siren is practicing scales.`;
}

// This function runs every time the button is clicked.
function handleButtonClick() {
  pressCount = pressCount + 1;

  countDisplay.textContent = pressCount;
  messageDisplay.textContent = getMessage(pressCount);

  // This briefly adds a CSS class so the button has a satisfying press effect.
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 120);
}

// This tells the browser: "When the button is clicked, run handleButtonClick."
button.addEventListener("click", handleButtonClick);

// This function gives us a random whole number from 5 to 15.
function getRandomStressDrop() {
  return Math.floor(Math.random() * 11) + 5;
}

// This function chooses a relaxing message for each stress-release click.
function getStressMessage() {
  const randomIndex = Math.floor(Math.random() * stressMessages.length);

  return stressMessages[randomIndex];
}

// This function makes the emoji do a quick float animation.
function playCalmAnimation() {
  calmEmoji.classList.remove("float");

  // requestAnimationFrame lets the browser notice the class was removed first.
  requestAnimationFrame(function () {
    calmEmoji.classList.add("float");
  });
}

// This function runs every time the stress-release button is clicked.
function handleStressClick() {
  const stressDrop = getRandomStressDrop();

  // Math.max keeps the stress level from going below 0.
  stressLevel = Math.max(0, stressLevel - stressDrop);
  stressLevelDisplay.textContent = stressLevel + "%";

  if (stressLevel === 0) {
    stressMessageDisplay.textContent = "You are officially calm. For now.";
  } else {
    stressMessageDisplay.textContent = getStressMessage();
  }

  playCalmAnimation();
}

// This tells the browser to run the calming function when the small button is clicked.
stressButton.addEventListener("click", handleStressClick);
