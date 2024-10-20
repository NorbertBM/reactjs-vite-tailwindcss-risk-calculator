import React from "react";
import Button from "./Button";

export default function RiskList({
  risks,
  riskColor,
  handleEditRisk,
  handleDeleteRisk,
}) {
  const getBackgroundColor = (level) => {
    switch (level) {
      case "Very_Low":
        return "bg-green-300";
      case "Low":
        return "bg-green-500";
      case "Medium":
        return "bg-yellow-500";
      case "High":
        return "bg-orange-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <ul className="mb-4">
      {risks.map((risk, index) => (
        <li
          key={index}
          className={`${getBackgroundColor(
            risk.level
          )} font-bold p-1 flex justify-between items-center rounded-md mb-2`}
        >
          <div className=" flex gap-1 bg-blue-950 p-2 rounded-md">
            <small className="bg-slate-400 text-black p-1 rounded-full">
              {index + 1}
            </small>{" "}
            <p className="text-white">
              {risk.description} - {risk.level} risk
            </p>
          </div>
          <div className="flex">
            <Button
              addClass="mr-2 bg-orange-500"
              onClick={() => handleEditRisk(index)}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteRisk(index)}
              addClass="bg-pink-500"
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
