document.addEventListener("DOMContentLoaded", function () {
  // Get the form element using its ID
  const form = document.getElementById("myForm");

  // Get the div where we want to show the success message
  const successDiv = document.getElementById("success");

  // Add an event listener to the form
  // This listens for the 'submit' event (when the user clicks the submit button)
  form.addEventListener("submit", function (event) {
    // Stop the form from refreshing the page (default browser behavior)
    event.preventDefault();

    // Get the values from the input fields using their IDs
    const fullName = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value;

    // Insert the collected data into the successDiv
    // We use innerHTML to write HTML code directly inside the div
    successDiv.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Zip:</strong> ${zip}</p>
      `;

    // Clear the form fields after submission so it's ready for another entry
    form.reset();
  });
});