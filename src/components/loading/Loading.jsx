import React from "react";

import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="mr-2 h-20 w-20 animate-spin" />
    </div>
  );
};

export default Loading;
