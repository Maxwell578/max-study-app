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
