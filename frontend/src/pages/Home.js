import React from "react"
import { Link } from "react-router-dom"
import { Car, Truck, Bike, AlertTriangle, PenToolIcon as Tool } from "lucide-react"
import "../styles/Home.css"

function Home() {
  return React.createElement(
    "div",
    { className: "space-y-12" },
    React.createElement(
      "section",
      { className: "hero-section" },
      React.createElement(
        "div",
        { className: "hero-image" },
        React.createElement("img", {
          src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000",
          alt: "Luxury car background",
        }),
      ),
      React.createElement(
        "div",
        { className: "hero-content" },
        React.createElement("h1", null, "Vehicle Breakdown Guide"),
        React.createElement("p", null, "Expert solutions for vehicle emergencies, right at your fingertips"),
        React.createElement(Link, { to: "/register", className: "btn btn-primary" }, "Get Started"),
      ),
    ),

    React.createElement(
      "section",
      { className: "vehicle-types" },
      React.createElement(
        "div",
        { className: "grid" },
        React.createElement(VehicleCard, {
          image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=800",
          title: "Cars",
          description: "Expert solutions for passenger vehicles, from engine troubles to electrical problems.",
          Icon: Car,
        }),
        React.createElement(VehicleCard, {
          image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
          title: "Trucks",
          description: "Specialized guidance for commercial vehicles and heavy-duty trucks.",
          Icon: Truck,
        }),
        React.createElement(VehicleCard, {
          image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800",
          title: "Motorcycles",
          description: "Two-wheeler specific problems and maintenance tips.",
          Icon: Bike,
        }),
      ),
    ),

    React.createElement(
      "section",
      { className: "issues-solutions" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", null, "Common Issues & Solutions"),
        React.createElement(
          "div",
          { className: "grid" },
          React.createElement(IssueCard, {
            title: "Common Issues",
            Icon: AlertTriangle,
            items: [
              "Battery problems and jump-starting",
              "Flat tires and tire changes",
              "Engine overheating",
              "Brake system failures",
            ],
          }),
          React.createElement(IssueCard, {
            title: "Emergency Tools",
            Icon: Tool,
            items: ["Essential toolkit items", "Safety equipment", "Emergency contact numbers", "First aid supplies"],
          }),
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "cta-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement("h2", null, "Ready to Get Started?"),
        React.createElement(
          "p",
          null,
          "Join our community of drivers and get instant access to expert vehicle solutions",
        ),
        React.createElement(Link, { to: "/register", className: "btn btn-primary" }, "Register Now for Full Access"),
      ),
    ),
  )
}

function VehicleCard({ image, title, description, Icon }) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(
      "div",
      { className: "card-image" },
      React.createElement("img", { src: image, alt: title }),
      React.createElement("div", { className: "image-overlay" }),
      React.createElement(Icon, { className: "card-icon" }),
    ),
    React.createElement("h2", null, title),
    React.createElement("p", null, description),
  )
}

function IssueCard({ title, Icon, items }) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(
      "div",
      { className: "card-header" },
      React.createElement("div", { className: "icon-wrapper" }, React.createElement(Icon, { className: "icon" })),
      React.createElement("h3", null, title),
    ),
    React.createElement(
      "ul",
      null,
      items.map((item, index) =>
        React.createElement(
          "li",
          { key: index },
          React.createElement("span", { className: "bullet" }),
          React.createElement("span", null, item),
        ),
      ),
    ),
  )
}

export default Home

