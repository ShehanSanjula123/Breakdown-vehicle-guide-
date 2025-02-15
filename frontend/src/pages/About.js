import React from "react"
import { Shield, Users, Clock } from "lucide-react"
import "../styles/About.css"

function About() {
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
          src: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=2000",
          alt: "Auto repair shop",
        }),
      ),
      React.createElement(
        "div",
        { className: "hero-content" },
        React.createElement("h1", null, "About Us"),
        React.createElement("p", null, "Dedicated to keeping drivers safe and vehicles running smoothly"),
      ),
    ),

    React.createElement(
      "section",
      { className: "features" },
      React.createElement(
        "div",
        { className: "grid" },
        createFeatureCard(
          Shield,
          "Reliable",
          "Our solutions are verified by automotive experts and professional mechanics, ensuring you get trustworthy advice when you need it most.",
        ),
        createFeatureCard(
          Users,
          "Community",
          "Join our growing community of drivers helping each other with real experiences and practical solutions for vehicle problems.",
        ),
        createFeatureCard(
          Clock,
          "24/7 Support",
          "Vehicle problems don't wait for business hours. Our platform provides round-the-clock assistance when you need it most.",
        ),
      ),
    ),

    React.createElement(
      "section",
      { className: "mission" },
      React.createElement(
        "div",
        { className: "mission-content" },
        React.createElement(
          "div",
          { className: "mission-image-container" },
          React.createElement("img", {
            src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=2000",
            alt: "Mechanic working",
          }),
          React.createElement("div", { className: "mission-overlay" }),
          React.createElement(
            "div",
            { className: "mission-text" },
            React.createElement("h2", null, "Our Mission"),
            React.createElement(
              "p",
              null,
              "We're committed to empowering drivers with knowledge and resources to handle vehicle emergencies confidently and safely.",
            ),
          ),
        ),
        React.createElement(
          "div",
          { className: "mission-description" },
          React.createElement(
            "p",
            null,
            "At Vehicle Guide, we understand that vehicle breakdowns can happen at any time and anywhere. Our platform combines expert knowledge, community experience, and modern technology to provide comprehensive support for all drivers.",
          ),
          React.createElement(
            "p",
            null,
            "Whether you're a new driver or an experienced motorist, our platform provides easy-to-follow guides, expert advice, and emergency assistance options to get you back on the road quickly and safely.",
          ),
        ),
      ),
    ),
  )
}

function createFeatureCard(Icon, title, description) {
  return React.createElement(
    "div",
    { className: "feature-card" },
    React.createElement("div", { className: "icon-wrapper" }, React.createElement(Icon, { className: "icon" })),
    React.createElement("h2", null, title),
    React.createElement("p", null, description),
  )
}

export default About

