// biplov was a great help in doing this.

const target1 = document.getElementsByClassName("card1")[0];
const destination1 = document.getElementsByClassName("hover__effect1")[0];

const target2 = document.getElementsByClassName("card2")[0];
const destination2 = document.getElementsByClassName("hover__effect2")[0];

const target3 = document.getElementsByClassName("card3")[0];
const destination3 = document.getElementsByClassName("hover__effect3")[0];

const target4 = document.getElementsByClassName("card4")[0];
const destination4 = document.getElementsByClassName("hover__effect4")[0];

target1.addEventListener("mouseover", () => {
  destination1.classList.add("hover__effect1-active");
});

target1.addEventListener("mouseout", () => {
  destination1.classList.remove("hover__effect1-active");
});

target2.addEventListener("mouseover", () => {
  destination2.classList.add("hover__effect2-active");
});

target2.addEventListener("mouseout", () => {
  destination2.classList.remove("hover__effect2-active");
});

target3.addEventListener("mouseover", () => {
  destination3.classList.add("hover__effect3-active");
});

target3.addEventListener("mouseout", () => {
  destination3.classList.remove("hover__effect3-active");
});

target4.addEventListener("mouseover", () => {
  TailClass4.classList.add("hover__effect4-active");
});

target4.addEventListener("mouseout", () => {
  TailClass4.classList.remove("hover__effect4-active");
});
