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
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action, true);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Form submitted successfully!");
        form.reset();
      } else if (xhr.readyState === 4) {
        alert("Error submitting form.");
      }
    };

    xhr.send(formData);
  });
});
