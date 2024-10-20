import React from "react";

export default function ResultScale({
  percentage,
  calculateTotalRiskPercentage,
}) {
  const getGradientColor = (percentage) => {
    if (percentage <= 20) return "linear-gradient(to right, #00FF00, #00FF00)";
    if (percentage <= 40) return "linear-gradient(to right, #00FF00, #7FFF00)";
    if (percentage <= 60) return "linear-gradient(to right, #7FFF00, #FFFF00)";
    if (percentage <= 80) return "linear-gradient(to right, #FFFF00, #FF7F00)";
    return "linear-gradient(to right, #FF7F00, #FF0000)";
  };

  return (
    <div className="w-full h-12  rounded-md my-4 bg-gray-300">
      <div
        className={` && h-full  rounded-md flex items-center ${
          calculateTotalRiskPercentage() > 0 && "justify-end"
        }`}
        style={{
          width: `${percentage}%`,
          background: getGradientColor(percentage),
        }}
      >
        {" "}
        <h2 className="text-black bg-slate-300 bg-opacity-50 animate-pulse  text-center  text-xl font-bold p-2.5">
          {calculateTotalRiskPercentage() > 0 &&
            calculateTotalRiskPercentage().toFixed(2)}
          %
        </h2>
      </div>
    </div>
  );
}
