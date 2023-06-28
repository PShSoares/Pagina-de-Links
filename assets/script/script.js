const mode = document.getElementById("mode_icon");
const html = document.querySelector("html");

mode.addEventListener("click", () => {
  if (mode.classList.contains("fa-moon")) {
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");
    html.classList.add("dark-mode");
    return;
  }

  mode.classList.add("fa-moon");
  mode.classList.remove("fa-sun");
  html.classList.remove("dark-mode");
});
