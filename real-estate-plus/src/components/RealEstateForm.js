import React, { useState } from "react";

const RealEstateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    propertyType: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = "/success";
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleChange}
        required
      >
        <option value="">Select Property Type</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Commercial">Commercial</option>
        <option value="Land">Land</option>
      </select>
      <textarea
        name="requirements"
        placeholder="Describe your requirements"
        value={formData.requirements}
        onChange={handleChange}
        rows="4"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RealEstateForm;
