document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const submitButton = form.querySelector("button[type='submit']");
      const originalText = submitButton.textContent;

      submitButton.textContent = "Message Sent";
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        form.reset();
      }, 2000);
    });
  }
});

