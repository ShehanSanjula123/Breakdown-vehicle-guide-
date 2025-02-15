"use client"

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { LogIn } from "lucide-react"
import "../styles/Login.css"

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(credentials.email, credentials.password)
    navigate("/vehicle-guide")
  }

  return React.createElement(
    "div",
    { className: "max-w-md mx-auto" },
    React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "text-center mb-8" },
        React.createElement(LogIn, { className: "w-12 h-12 text-blue-600 mx-auto mb-2" }),
        React.createElement("h1", { className: "text-2xl font-bold" }, "Welcome Back"),
        React.createElement("p", { className: "text-gray-600" }, "Sign in to access the vehicle guide"),
      ),
      React.createElement(
        "form",
        { onSubmit: handleSubmit, className: "space-y-4" },
        ["email", "password"].map((field) =>
          React.createElement(
            "div",
            { key: field },
            React.createElement(
              "label",
              {
                htmlFor: field,
                className: "block text-sm font-medium text-gray-700 mb-1",
              },
              field.charAt(0).toUpperCase() + field.slice(1),
            ),
            React.createElement("input", {
              type: field,
              id: field,
              className: "input",
              value: credentials[field],
              onChange: (e) => setCredentials({ ...credentials, [field]: e.target.value }),
              required: true,
            }),
          ),
        ),
        React.createElement(
          "button",
          {
            type: "submit",
            className: "btn btn-primary w-full",
          },
          "Sign In",
        ),
      ),
      React.createElement(
        "p",
        { className: "mt-4 text-center text-gray-600" },
        "Don't have an account? ",
        React.createElement(
          Link,
          {
            to: "/register",
            className: "text-blue-600 hover:underline",
          },
          "Register here",
        ),
      ),
    ),
  )
}

export default Login

