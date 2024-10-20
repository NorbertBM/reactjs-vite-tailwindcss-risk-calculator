import React, { useState } from "react";
import ResultScale from "./ResultScale";
import RiskInput from "./RiskInput";
import RiskList from "./RiskList";

const riskValues = {
  Very_High: 2,
  High: 1.5,
  Medium: 1,
  Low: 0.5,
  Very_Low: 0.1,
};
const riskColors = {
  Very_High: "#FF0000", // Red
  High: "#FF7F00", // Orange
  Medium: "#FFFF00", // Yellow
  Low: "#7FFF00", // Chartreuse
  Very_Low: "#00FF00", // Light Green
};
export default function RiskCalcComp() {
  const [risks, setRisks] = useState([]);
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Medium");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleAddRisk = () => {
    if (isEditing) {
      const updatedRisks = risks.map((risk, index) =>
        index === currentIndex ? { description, level } : risk
      );
      setRisks(updatedRisks);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      if (description.trim()) {
        setRisks([...risks, { description, level }]);
      } else {
        alert("Please enter a description");
      }
    }
    setDescription("");
    setLevel("Medium");
  };

  const handleEditRisk = (index) => {
    setDescription(risks[index].description);
    setLevel(risks[index].level);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDeleteRisk = (index) => {
    if (window.confirm("Are you sure you want to delete this risk?")) {
      const updatedRisks = risks.filter((_, i) => i !== index);
      setRisks(updatedRisks);
    }
  };

  const calculateTotalRiskPercentage = () => {
    const totalRiskScore = risks.reduce(
      (total, risk) => total + riskValues[risk.level],
      0
    );
    const maxPossibleScore = risks.length * riskValues.Very_High; // Assuming Very_High is the highest value
    return risks.length > 0 ? (totalRiskScore / maxPossibleScore) * 100 : 0;
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Risk Calculator</h1>

      <ResultScale
        percentage={calculateTotalRiskPercentage()}
        calculateTotalRiskPercentage={calculateTotalRiskPercentage}
      />
      <RiskInput
        riskValues={riskValues}
        riskColors={riskColors}
        description={description}
        level={level}
        setDescription={setDescription}
        setLevel={setLevel}
        handleAddRisk={handleAddRisk}
        isEditing={isEditing}
      />
      <RiskList
        risks={risks}
        riskColors={riskColors}
        handleEditRisk={handleEditRisk}
        handleDeleteRisk={handleDeleteRisk}
      />
    </div>
  );
}
