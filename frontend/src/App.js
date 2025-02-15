import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Register from "./pages/Register"
import VehicleGuide from "./pages/VehicleGuide"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"
import "./App.css"

function App() {
  return React.createElement(
    AuthProvider,
    null,
    React.createElement(
      Router,
      null,
      React.createElement(
        "div",
        { className: "min-h-screen bg-gray-50" },
        React.createElement(Navbar, null),
        React.createElement(
          "main",
          { className: "container mx-auto px-4 py-8" },
          React.createElement(
            Routes,
            null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
            React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) }),
            React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
            React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
            React.createElement(Route, {
              path: "/vehicle-guide",
              element: React.createElement(ProtectedRoute, null, React.createElement(VehicleGuide, null)),
            }),
          ),
        ),
      ),
    ),
  )
}

export default App

