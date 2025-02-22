const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit-form", async (req, res) => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf9-yf7I4bk4M1uqFaMqnKjsGKj_nGeH7SYfQAhbH8r7n__Kg/formResponse";
  const formData = new URLSearchParams(req.body);

  try {
    const response = await fetch(formUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      res.status(200).send("Form submitted successfully");
    } else {
      res.status(response.status).send("Failed to submit form");
    }
  } catch (error) {
    res.status(500).send("Error submitting form");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
