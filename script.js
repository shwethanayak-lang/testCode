const gradientButton =
  document.getElementById("gradientButton");

const message =
  document.getElementById("message");

gradientButton.addEventListener("click", () => {
  message.textContent =
    "Great! You clicked the button 🎉";
});
