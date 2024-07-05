const OpenBtn = document.querySelector("#OpenBtn");
const CloseBtn = document.querySelector("#CloseBtn");
const Menu = document.getElementById("Menu");
const window = window.innerWidth;

OpenBtn.addEventListener("click", () => {
  Menu.style.display = "flex";
  Menu.style.transform = "translateX(0)";
  Menu.style.transition = "transform 0.25s ease-in-out";
});

CloseBtn.addEventListener("click", () => {
  Menu.style.transform = "translateX(100vw)";
  Menu.style.transition = "transform 0.25s ease-in-out";

  Menu.addEventListener(
    "transitionend",
    () => {
      Menu.style.display = "none";
    },
    { once: true }
  );
});
