document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("realEstateForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      mode: "no-cors",
    })
      .then(() => {
        window.location.href = "success.html"; // Redirect to success page
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });
});
