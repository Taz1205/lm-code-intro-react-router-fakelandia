import React from "react";

type ConfessButtonProps = {
  isValid: boolean;
};

const ConfessButton: React.FC<ConfessButtonProps> = ({ isValid }) => {
  return (
    <button
      type="submit"
      disabled={!isValid}
      className="bg-orange-500 text-black px-4 py-5 rounded hover:bg-orange-600 disabled:opacity-50 mt-1 h-10 w-50"
    >
      Confess
    </button>
  );
};

export default ConfessButton;
