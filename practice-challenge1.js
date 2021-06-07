// First practice challenge

// 1. Display an alert message:
alert("Warning! This message will self-destruct in");

// Display a countdown:
alert("3...");
alert("2...");
alert("1...");

// Execute the "explosion":
const countdownComplete = function () {
  document.querySelector("h1").textContent = `🔥BOOM!🔥`;
};

countdownComplete();

// Log message "destroyed" to the console:
console.log("Destroyed");
