$(document).ready(function () {
  function onSubmit(token) {
    document.getElementById("contact-form").submit();
  }
  $("#contact-form").submit(function () {
    grecaptcha.ready(() => {
      grecaptcha
        .execute("6LdkN-YbAAAAACqFnhzWnvWH5BIxbrSG1eoza7PJ", {
          action: "submit",
        })
        .then((token) => {
          // do a bunch of verification steps here
          // TODO will implement this later
          // as soon as I hoop my static site to a server
        });
    });

    return true; // return false to cancel form action
  });

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
});
