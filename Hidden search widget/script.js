const btnSearch = document.querySelector(".btn");
const input = document.querySelector(".search__bar");
const content = document.querySelector(".content");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  content.classList.toggle("active");
  input.focus();
});
