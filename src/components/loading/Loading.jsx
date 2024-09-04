import React from "react";

import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-auto h-screen">
      <Loader2 className="mr-2 h-20 w-20 my-auto animate-spin" />
    </div>
  );
};

export default Loading;
