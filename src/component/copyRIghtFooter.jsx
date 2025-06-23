import React from "react";

function CopyRightFooter() {
  const CopyRightData = ({
    year = new Date().getFullYear(),
    companyName = "Your Company Name",
    className = "",
  }) => {
    return (
      <footer
        className={`text-center text-gray-500 text-sm py-4 ${className} bg-white`}
      >
        Copyright © {year} {companyName} - All rights reserved
      </footer>
    );
  };

  return <CopyRightData year={2025} companyName="DentalScans" />;
}

export default CopyRightFooter;
