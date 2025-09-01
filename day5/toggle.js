let togglebtn = document.getElementById("togglebtn");
let body = document.body;
togglebtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    togglebtn.textContent = "Light Mode";
  } else {
    togglebtn.textContent = "Dark Mode";
  }
});
