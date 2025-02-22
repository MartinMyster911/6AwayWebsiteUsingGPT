document
  .getElementById("realEstateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      mode: "no-cors",
    })
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });
