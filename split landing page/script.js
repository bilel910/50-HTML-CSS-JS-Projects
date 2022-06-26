const main = document.querySelector(".main");
const playleft = document.querySelector(".play");
const xboxright = document.querySelector(".xbox");

playleft.addEventListener("mouseenter", () => main.classList.add("hover-left"));

playleft.addEventListener("mouseleave", () =>
  main.classList.remove("hover-left")
);

xboxright.addEventListener("mouseenter", () =>
  main.classList.add("hover-right")
);

xboxright.addEventListener("mouseleave", () =>
  main.classList.remove("hover-right")
);
