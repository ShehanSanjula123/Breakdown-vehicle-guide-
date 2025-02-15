import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Car, User, LogOut } from "lucide-react"
import "../styles/Navbar.css"

function Navbar() {
  const { isAuthenticated, logout } = useAuth()
  const location = useLocation()

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to
    return React.createElement(
      Link,
      {
        to: to,
        className: `nav-link ${isActive ? "active-nav-link" : ""}`,
      },
      children,
    )
  }

  return React.createElement(
    "nav",
    { className: "bg-white shadow-md" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex justify-between items-center h-16" },
        React.createElement(
          Link,
          { to: "/", className: "flex items-center space-x-2" },
          React.createElement(Car, { className: "w-6 h-6 text-blue-600" }),
          React.createElement("span", { className: "text-xl font-bold" }, "Vehicle Guide"),
        ),
        React.createElement(
          "div",
          { className: "flex items-center space-x-6" },
          React.createElement(NavLink, { to: "/" }, "Home"),
          React.createElement(NavLink, { to: "/about" }, "About"),
          React.createElement(NavLink, { to: "/contact" }, "Contact"),
          isAuthenticated
            ? React.createElement(
                React.Fragment,
                null,
                React.createElement(NavLink, { to: "/vehicle-guide" }, "Guide"),
                React.createElement(
                  "button",
                  {
                    onClick: logout,
                    className: "flex items-center space-x-1 nav-link",
                  },
                  React.createElement(LogOut, { className: "w-4 h-4" }),
                  React.createElement("span", null, "Logout"),
                ),
              )
            : React.createElement(
                Link,
                {
                  to: "/login",
                  className: "flex items-center space-x-1 nav-link",
                },
                React.createElement(User, { className: "w-4 h-4" }),
                React.createElement("span", null, "Login"),
              ),
        ),
      ),
    ),
  )
}

export default Navbar

