document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("realEstateForm");

  // Pre-fill form fields if needed
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  const email = urlParams.get("email");
  const propertyType = urlParams.get("propertyType");
  const requirements = urlParams.get("requirements");

  if (name) form.elements["entry.1065890494"].value = name;
  if (email) form.elements["entry.2000100246"].value = email;
  if (propertyType) form.elements["entry.236062744"].value = propertyType;
  if (requirements) form.elements["entry.587628892"].value = requirements;

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Debugging: Log form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(() => {
        window.location.href = "success.html"; // Redirect to success page
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      });
  });
});
