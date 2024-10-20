import React from "react";

export default function Button({ addClass, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${addClass}  text-white shadow-md font-medium px-2 py-1 rounded-md `}
    >
      {!children ? "Button" : children}
    </button>
  );
}
