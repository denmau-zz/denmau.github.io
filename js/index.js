// alert("Hello, I am Dennis Kamau, I am still developing this site. Feel free
// to explore. Thank you.");

// Collect all the inputs
const inputs = document.querySelectorAll("input, select, textarea");

// Adds an invalid class to an invalid input
// This input is then styled by CSS to show invalid input
inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    () => {
      input.classList.add("invalid");
    },
    false
  );
});
