document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successDiv = document.getElementById("success");

  if (!form || !successDiv) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullNameInput = document.getElementById("fullName");
    const fullName = (fullNameInput && fullNameInput.value.trim()) || "";

    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phoneNumber");
    const email = (emailInput && emailInput.value.trim()) || "";
    const phone = (phoneInput && phoneInput.value.trim()) || "";

    // Use escaped values when inserting into HTML
    const safeName = fullName ? escapeHtml(fullName) : "";
    const safeEmail = email ? escapeHtml(email) : "";
    const safePhone = phone ? escapeHtml(phone) : "";

    successDiv.innerHTML = `<p class="thank-you">Thank you${
      safeName ? `, ${safeName}` : ""
    } for sending the contact. ` +
      `<br><small>We will send a message to the phone number ${
        safePhone || "(not provided)"
      } or to the Gmail ${safeEmail || "(not provided)"}, you will be provided within a few days.</small></p>`;

    // Reset the form and focus name field
    form.reset();
    fullNameInput?.focus();
  });

  function escapeHtml(str) {
    return String(str).replace(/[&<>",'/`]/g, function (s) {
      return (
        {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;", "`": "&#96;"}[s]
      );
    });
  }
});
