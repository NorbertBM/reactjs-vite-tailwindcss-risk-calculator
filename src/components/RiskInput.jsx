import React from "react";
import Button from "./Button";
export default function RiskInput({
  isEditing,
  description,
  setDescription,
  level,
  setLevel,
  riskValues,
  riskColors,
  handleAddRisk,
}) {
  return (
    <div className="flex gap-2 w-full mb-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter risk description"
        className="text-black border rounded-md p-2 w-96"
      />
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="text-black border rounded-md p-2 w-full select-style"
      >
        {Object.keys(riskValues).map((risk, index) => (
          <option
            key={index}
            value={risk}
            style={{ backgroundColor: riskColors[risk], color: "#000" }}
          >
            {risk.replace("_", " ")}
          </option>
        ))}
      </select>
      <Button
        addClass={`${
          isEditing
            ? "bg-orange-400"
            : "bg-blue-600 hover:bg-blue-400 transition-colors"
        } rounded-full`}
        onClick={handleAddRisk}
      >
        {isEditing ? "Edit" : "Add"}
      </Button>
    </div>
  );
}
