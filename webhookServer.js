const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
  const formData = req.body;

  try {
    // Send data to Make.com webhook
    const response = await axios.post(
      "https://hook.integromat.com/YOUR_MAKE_WEBHOOK_URL",
      formData
    );

    if (response.status === 200) {
      res.status(200).send("Form submitted successfully");
    } else {
      res.status(response.status).send("Failed to submit form");
    }
  } catch (error) {
    res.status(500).send("Error submitting form");
  }
});

app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});
