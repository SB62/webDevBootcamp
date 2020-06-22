let button = document.querySelector("button");
// let body = document.querySelector("body");
// alternatively use document.body.

// button.addEventListener("click", function () {
//   if (body.style.backgroundColor !== "purple") {
//     body.style.backgroundColor = "purple";
//   } else body.style.backgroundColor = "white";
// });

// using CSS Classes can use the classList.toggle method
button.addEventListener("Click", function () {
  document.body.classList.toggle("purple");
});
