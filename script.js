document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("job-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const position = document.getElementById("position").value;

    const application = {
      name,
      email,
      position,
    };

    localStorage.setItem("jobApplication", JSON.stringify(application));
    alert("Application submitted successfully!");
    form.reset();
  });
});

function showStoredApplication() {
  const storedApp = localStorage.getItem("jobApplication");
  const output = document.getElementById("storedApp");

  if (storedApp) {
    output.textContent = JSON.stringify(JSON.parse(storedApp), null, 2);
  } else {
    output.textContent = "No application data found.";
  }
}

function clearApplication() {
  localStorage.removeItem("jobApplication");
  alert("Application cleared.");
  document.getElementById("storedApp").textContent = "";
}

document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function generateQuote() {
  const quotes = [
    "Believe in yourself and all that you are.",
    "Every expert was once a beginner.",
    "Success is no accident. It is hard work and learning.",
    "Start where you are. Use what you have. Do what you can.",
    "Keep going. Everything you need will come to you."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// Dark mode toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Motivational Quotes
const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a chance to be better.",
  "Stay positive, work hard, make it happen!",
  "Your future is created by what you do today.",
  "Push yourself, because no one else is going to do it for you."
];

function generateQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}

// Feedback Form Submission
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  document.getElementById("feedbackThanks").style.display = "block";
  this.reset(); // Clear form
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }
});

// Motivational Quote Generator
const quotes = [
  "Believe in yourself and all that you are.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = document.getElementById("quote-text");
  quoteText.textContent = quotes[randomIndex];
}

// Load a quote on page load
window.addEventListener("DOMContentLoaded", generateQuote);


