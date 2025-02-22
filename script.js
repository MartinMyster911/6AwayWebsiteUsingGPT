document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("realEstateForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const formData = new FormData(form);

    // Debugging: Log form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(form.action, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Add this line
    })
      .then(() => {
        window.location.href = "success.html"; // Redirect to success page
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });
});
