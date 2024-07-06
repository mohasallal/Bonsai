const p1 = document.getElementById("p1");
const Div1 = document.getElementById("Div1");
const p2 = document.getElementById("p2");
const Div2 = document.getElementById("Div2");
const p3 = document.getElementById("p3");
const Div3 = document.getElementById("Div3");
const p4 = document.getElementById("p4");
const Div4 = document.getElementById("Div4");

function toggleVisibility(p, div) {
  p.addEventListener("click", () => {
    if (div.classList.contains("show")) {
      div.classList.remove("show");
    } else {
      div.classList.add("show");
    }
    // Rotate the expand button
    p.querySelector(".expand__btn").classList.toggle("rotate");
  });
}

toggleVisibility(p1, Div1);
toggleVisibility(p2, Div2);
toggleVisibility(p3, Div3);
toggleVisibility(p4, Div4);
