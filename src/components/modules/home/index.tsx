import React from "react";
import Button from "@commonUI/button";

const HomePage: React.FC = () => {
  const handleBtnClick = () => {
    console.log("btn click enter.");
  };

  return (
    <Button size="lg" type="primary" onClick={handleBtnClick}>
      button
    </Button>
  );
};

export default HomePage;
