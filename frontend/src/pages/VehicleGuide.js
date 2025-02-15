"use client"

import React, { useState } from "react"
import { Car, Truck, Bike, PenToolIcon as Tool, MapPin, Video } from "lucide-react"
import "../styles/VehicleGuide.css"

const vehicleTypes = [
  {
    id: "car",
    name: "Car",
    icon: React.createElement(Car, { className: "w-8 h-8" }),
    issues: [
      {
        id: "battery",
        title: "Dead Battery",
        description: "Vehicle won't start, no power to electrical systems",
        solution:
          "Use jumper cables to jump-start the vehicle. Connect positive to positive, negative to engine block.",
        videoUrl: "https://www.youtube.com/watch?v=example1",
      },
      {
        id: "flat-tire",
        title: "Flat Tire",
        description: "Tire is deflated or damaged",
        solution: "Use the spare tire and jack to replace the flat tire. Ensure you're in a safe location.",
        videoUrl: "https://www.youtube.com/watch?v=example2",
      },
    ],
  },
  {
    id: "truck",
    name: "Truck",
    icon: React.createElement(Truck, { className: "w-8 h-8" }),
    issues: [
      {
        id: "brake-failure",
        title: "Brake System Failure",
        description: "Reduced braking power or complete failure",
        solution: "Pull over safely, do not continue driving. Contact emergency services.",
        videoUrl: "https://www.youtube.com/watch?v=example3",
      },
    ],
  },
  {
    id: "motorcycle",
    name: "Motorcycle",
    icon: React.createElement(Bike, { className: "w-8 h-8" }),
    issues: [
      {
        id: "chain-issues",
        title: "Chain Problems",
        description: "Chain is loose or making noise",
        solution: "Check chain tension and adjust if necessary. Lubricate chain if needed.",
        videoUrl: "https://www.youtube.com/watch?v=example4",
      },
    ],
  },
]

function VehicleGuide() {
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [selectedIssue, setSelectedIssue] = useState(null)
  const [showGarageSearch, setShowGarageSearch] = useState(false)

  const handleFindGarage = () => {
    setShowGarageSearch(true)
    // In a real app, this would use geolocation and a map service
  }

  return React.createElement(
    "div",
    { className: "space-y-8" },
    React.createElement(
      "section",
      { className: "text-center" },
      React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Vehicle Troubleshooting Guide"),
      React.createElement(
        "p",
        { className: "text-xl text-gray-600" },
        "Select your vehicle type and issue to find solutions",
      ),
    ),

    !selectedVehicle
      ? React.createElement(
          "section",
          { className: "grid md:grid-cols-3 gap-6" },
          vehicleTypes.map((vehicle) =>
            React.createElement(
              "button",
              {
                key: vehicle.id,
                className: "card hover:shadow-lg transition-shadow cursor-pointer",
                onClick: () => setSelectedVehicle(vehicle),
              },
              React.createElement(
                "div",
                { className: "flex flex-col items-center" },
                React.createElement("div", { className: "text-blue-600 mb-4" }, vehicle.icon),
                React.createElement("h2", { className: "text-xl font-semibold" }, vehicle.name),
              ),
            ),
          ),
        )
      : !selectedIssue
        ? React.createElement(
            "div",
            { className: "space-y-6" },
            React.createElement(
              "button",
              {
                onClick: () => setSelectedVehicle(null),
                className: "btn btn-secondary",
              },
              "← Back to Vehicles",
            ),
            React.createElement(
              "div",
              { className: "grid md:grid-cols-2 gap-6" },
              selectedVehicle.issues.map((issue) =>
                React.createElement(
                  "button",
                  {
                    key: issue.id,
                    className: "card hover:shadow-lg transition-shadow cursor-pointer text-left",
                    onClick: () => setSelectedIssue(issue),
                  },
                  React.createElement("h3", { className: "text-xl font-semibold mb-2" }, issue.title),
                  React.createElement("p", { className: "text-gray-600" }, issue.description),
                ),
              ),
            ),
          )
        : React.createElement(
            "div",
            { className: "space-y-6" },
            React.createElement(
              "button",
              {
                onClick: () => setSelectedIssue(null),
                className: "btn btn-secondary",
              },
              "← Back to Issues",
            ),
            React.createElement(
              "div",
              { className: "card" },
              React.createElement("h2", { className: "text-2xl font-bold mb-4" }, selectedIssue.title),
              React.createElement(
                "div",
                { className: "space-y-4" },
                React.createElement(
                  "div",
                  null,
                  React.createElement("h3", { className: "text-lg font-semibold mb-2" }, "Problem"),
                  React.createElement("p", { className: "text-gray-600" }, selectedIssue.description),
                ),
                React.createElement(
                  "div",
                  null,
                  React.createElement("h3", { className: "text-lg font-semibold mb-2" }, "Solution"),
                  React.createElement("p", { className: "text-gray-600" }, selectedIssue.solution),
                ),
                selectedIssue.videoUrl &&
                  React.createElement(
                    "div",
                    { className: "flex items-center space-x-2" },
                    React.createElement(Video, { className: "w-5 h-5 text-blue-600" }),
                    React.createElement(
                      "a",
                      {
                        href: selectedIssue.videoUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-blue-600 hover:underline",
                      },
                      "Watch repair video",
                    ),
                  ),
              ),
            ),
            React.createElement(
              "div",
              { className: "grid md:grid-cols-2 gap-6" },
              React.createElement(
                "button",
                {
                  onClick: handleFindGarage,
                  className: "card hover:shadow-lg transition-shadow cursor-pointer",
                },
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4" },
                  React.createElement(MapPin, { className: "w-8 h-8 text-blue-600" }),
                  React.createElement(
                    "div",
                    null,
                    React.createElement("h3", { className: "text-xl font-semibold" }, "Find Nearest Garage"),
                    React.createElement("p", { className: "text-gray-600" }, "Locate professional help nearby"),
                  ),
                ),
              ),
              React.createElement(
                "button",
                {
                  onClick: () => (window.location.href = "tel:911"),
                  className: "card hover:shadow-lg transition-shadow cursor-pointer",
                },
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-4" },
                  React.createElement(Tool, { className: "w-8 h-8 text-blue-600" }),
                  React.createElement(
                    "div",
                    null,
                    React.createElement("h3", { className: "text-xl font-semibold" }, "Call Tow Service"),
                    React.createElement("p", { className: "text-gray-600" }, "Get emergency roadside assistance"),
                  ),
                ),
              ),
            ),
            showGarageSearch &&
              React.createElement(
                "div",
                { className: "card" },
                React.createElement("h3", { className: "text-xl font-semibold mb-4" }, "Nearby Garages"),
                React.createElement(
                  "p",
                  { className: "text-gray-600" },
                  "This feature would show a map with nearby garages and their contact information. " +
                    "In a production environment, it would integrate with a mapping service and " +
                    "garage database.",
                ),
              ),
          ),
  )
}

export default VehicleGuide

