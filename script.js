document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const quoteBtn = document.getElementById('quoteBtn');
  const quoteDisplay = document.getElementById('quoteDisplay');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const successMsg = document.createElement('p');

  // --- Job Form Submission ---
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;

    if (fullName && email && experience) {
      localStorage.setItem('jobApplicant', JSON.stringify({
        fullName,
        email,
        experience
      }));

      successMsg.textContent = "✅ Your application was saved!";
      successMsg.style.color = "green";
      successMsg.style.marginTop = "10px";
      form.appendChild(successMsg);
      form.reset();
    } else {
      successMsg.textContent = "⚠️ Please fill out all fields.";
      successMsg.style.color = "red";
      form.appendChild(successMsg);
    }
  });

  // --- Quote Generator ---
  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Believe in yourself and all that you are."
  ];

  quoteBtn?.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });

  // --- Dark Mode Toggle ---
  darkModeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});
