'use client';

interface MinimizeButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function MinimizeButton({ onClick, className = "" }: MinimizeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 right-4 z-40 cursor-pointer transition-all duration-200 hover:bg-primary-700 ${className}`}
      style={{
        backgroundColor: "rgb(5, 96, 50)", // primary-600
        borderRadius: "6px",
        padding: "8px",
        border: "2px solid rgb(255, 255, 255)",
      }}
      title="Minimize"
    >
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
        className="text-white"
        style={{
          color: "rgb(255, 255, 255)",
          height: "24px",
          width: "24px",
          verticalAlign: "middle",
        }}
      >
        <path d="M5 9l4 0l0 -4"></path>
        <path d="M3 3l6 6"></path>
        <path d="M5 15l4 0l0 4"></path>
        <path d="M3 21l6 -6"></path>
        <path d="M19 9l-4 0l0 -4"></path>
        <path d="M15 9l6 -6"></path>
        <path d="M19 15l-4 0l0 4"></path>
        <path d="M15 15l6 6"></path>
      </svg>
    </button>
  );
}
