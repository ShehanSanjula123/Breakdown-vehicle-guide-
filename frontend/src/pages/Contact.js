"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import "../styles/Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const createContactCard = (Icon, title, content) => {
    return React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "flex items-center space-x-4" },
        React.createElement(Icon, { className: "w-6 h-6 text-blue-600" }),
        React.createElement(
          "div",
          null,
          React.createElement("h2", { className: "text-lg font-semibold" }, title),
          React.createElement("p", { className: "text-gray-600" }, content),
        ),
      ),
    )
  }

  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto space-y-8" },
    React.createElement(
      "section",
      { className: "text-center" },
      React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Contact Us"),
      React.createElement("p", { className: "text-xl text-gray-600" }, "Get in touch with our support team"),
    ),
    React.createElement(
      "div",
      { className: "grid md:grid-cols-2 gap-8" },
      React.createElement(
        "section",
        { className: "space-y-6" },
        createContactCard(Phone, "Phone", "1-800-VEHICLE"),
        createContactCard(Mail, "Email", "support@vehicleguide.com"),
        createContactCard(
          MapPin,
          "Address",
          React.createElement(
            React.Fragment,
            null,
            "123 Vehicle Street",
            React.createElement("br"),
            "Automotive City, AC 12345",
          ),
        ),
      ),
      React.createElement(
        "section",
        { className: "card" },
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Send us a message"),
        React.createElement(
          "form",
          { onSubmit: handleSubmit, className: "space-y-4" },
          ["name", "email"].map((field) =>
            React.createElement(
              "div",
              { key: field },
              React.createElement(
                "label",
                { htmlFor: field, className: "block text-sm font-medium text-gray-700 mb-1" },
                field.charAt(0).toUpperCase() + field.slice(1),
              ),
              React.createElement("input", {
                type: field === "email" ? "email" : "text",
                id: field,
                className: "input",
                value: formData[field],
                onChange: (e) => setFormData({ ...formData, [field]: e.target.value }),
                required: true,
              }),
            ),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1" },
              "Message",
            ),
            React.createElement("textarea", {
              id: "message",
              rows: 4,
              className: "input",
              value: formData.message,
              onChange: (e) => setFormData({ ...formData, message: e.target.value }),
              required: true,
            }),
          ),
          React.createElement("button", { type: "submit", className: "btn btn-primary w-full" }, "Send Message"),
        ),
      ),
    ),
  )
}

export default Contact

