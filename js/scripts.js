document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  const successDiv = document.getElementById("success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    successDiv.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Zip:</strong> ${zip}</p>
      `;

    form.reset();
  });
});