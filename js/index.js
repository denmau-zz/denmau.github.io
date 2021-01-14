// Collect all the inputs
const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    (event) => {
      input.classList.add("invalid");
    },
    // Check Validity after leaving each input
    input.addEventListener("blur", function () {
      input.checkValidity();
    }),
    false
  );
});
