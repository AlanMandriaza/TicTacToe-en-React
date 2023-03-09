import React from "react";

const ResetButton = ({ handleReset }) => {
  return (
    <button className="reset btn btn-light" onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;
