// Collect all the inputs
const inputs = document.querySelectorAll("input, select, textarea");

// Adds an invalid class to an invalid input
// This input is then styled by CSS to show invalid input
inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    (event) => {
      input.classList.add("invalid");
    },
    false
  );
});

// function alertCVNotAvailable() {
//   alert("Hello, I am in the process of editing my CV, it should be up in a few days. Thank you.");
// }
