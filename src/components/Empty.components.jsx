import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../lottie/empty.json";

const EmptyComponents = () => {
  return (
    <div className="w-[300px] h-[300px] ">
      <Lottie
        className="w-full h-full"
        animationData={EmptyJson}
        loop
        size={50}
      />
    </div>
  );
};

export default EmptyComponents;
