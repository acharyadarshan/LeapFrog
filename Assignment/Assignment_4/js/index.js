var visible = 1;
const menu = document.getElementById("menu");
const content = document.getElementById("belowSection");

function clicker() {
  if (visible % 2 == 1) {
    // menu.style.display = "block";
    menu.classList.add("activate");
    content.style.display = "none";
    menu.style.display = "block";
  } else {
    menu.style.display = "block";
    menu.classList.remove("activate");
    content.style.display = "block";
  }
  visible += 1;
}
