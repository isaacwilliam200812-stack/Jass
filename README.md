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

  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", function () {
        faqItems.forEach(function (faq) {
          if (faq !== item) {
            faq.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    }
  });
});



































































































































































































































































