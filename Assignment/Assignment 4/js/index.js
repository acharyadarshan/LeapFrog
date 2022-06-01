// console.log("hey");

// const hamburger = document.getElementById("hamburger");
// const navMenu = document.getElementsByClassName("activate");

// hamburger.addEventListener("click", () => {
//   //alert("hello");
//   // navMenu.classList.toggle("show");
//   navMenu.style.display = "show";
// });

var visible = 1;
const menu = document.getElementById("menu");
const content = document.getElementById("belowSection");

function clicker() {
  if (visible % 2 == 1) {
    menu.style.display = "block";
    content.style.display = "none";
  } else {
    menu.style.display = "none";
    content.style.display = "block";
  }
  visible += 1;
}

// function clicker() {
//   // menu.style.display = "block";
//   menu.classList.toggle("show");
//   // content.style.display = "none";
// }
