import React, { useState } from "react";
// import { string, oneOf, boolean } from "prop-types";

// Feather Icon 'alert-circle'
const AlertCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-circle"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// Feather Icon 'alert-triangle'
const AlertTriangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="alert-triangle"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// Feather Icon 'x'
const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="cross"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/**
 * Get TW Color
 *
 * @param {string} type 'info' | 'success' | 'warning' | 'danger'
 * @returns {string} 'blue' | 'green' | 'yellow' | 'red'
 */
const getColor = (type) => {
  switch (type) {
    case "info":
      return "blue";
    case "success":
      return "green";
    case "warning":
      return "yellow";
    case "danger":
      return "red";
    default:
      return "blue";
  }
};

/**
 * 'Alert' Component Based On TailwindCSS
 */
function Alert({
  classNames,
  type = "info",
  icon,
  title,
  subTitle,
  isClosable = false,
}) {
  const color = getColor(type);
  const [visibility, setVisibility] = useState(true);

  return (
    <div
      className={`alert px-4 py-3 bg-${color}-100 text-${color}-900 border-l-4 border-${color}-500 rounded-md shadow-md transition-opacity
        opacity-${visibility ? "1" : "0"}
        ${classNames ? ` ${classNames}` : ""}`}
      role="alert">
      <div className="flex">
        {icon && (
          <span className="m-auto" aria-hidden="true">
            {icon === "circle" && <AlertCircle />}
            {icon === "triangle" && <AlertTriangle />}
          </span>
        )}
        <div className="flex-grow mx-3">
          <p className="font-bold">{title}</p>
          {subTitle && <p className="text-sm">{subTitle}</p>}
        </div>
        {isClosable && (
          <button
            className="m-auto focus:outline-none"
            aria-label="close"
            onClick={() => setVisibility(false)}>
            <Cross />
          </button>
        )}
      </div>
    </div>
  );
}

/*
Alert.propTypes = {
  classNames: string,
  title: string.isRequired,
  subTitle: string,
  type: oneOf(["info", "success", "warning", "danger"]),
  icon: oneOf(["circle", "triangle"]),
  isClosable: bool,
};
*/

export default Alert;
