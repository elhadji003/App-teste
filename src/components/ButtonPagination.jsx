import React from "react";

export default function ButtonPagination({
  onClick,
  disabled,
  direction,
  label,
  Icon,
}) {
  const baseStyle =
    "flex items-center gap-1 px-3 py-1 rounded-md text-sm transition";
  const activeStyle = "bg-blue-500 text-white hover:bg-blue-600";
  const disabledStyle = "bg-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${disabled ? disabledStyle : activeStyle}`}
    >
      {direction === "left" && Icon && <Icon size={16} />}
      {label}
      {direction === "right" && Icon && <Icon size={16} />}
    </button>
  );
}
