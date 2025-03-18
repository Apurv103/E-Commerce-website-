import React from "react";

interface BadgeProps {
  children: React.ReactNode;  // Allow the component to accept children
  color?: string;
  variant?: "outline" | "destructive"; // Define the variant types
}

export const Badge: React.FC<BadgeProps> = ({ children, color = "bg-blue-500", variant = "outline" }) => {
  // Define styles for the different variants
  const variantStyles = {
    outline: "border-2 border-blue-500 text-white",
    destructive: "bg-red-500 text-white",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${variantStyles[variant]} ${color}`}
    >
      {children}  {/* Display the children content inside the badge */}
    </span>
  );
};
