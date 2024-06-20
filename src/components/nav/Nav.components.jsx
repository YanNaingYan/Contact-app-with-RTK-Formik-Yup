import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
const NavComponents = () => {
  return (
    <div className="w-full h-20 px-52 flex mx-auto items-center border-b bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">Yan</h1>
        <div className="flex justify-center items-center gap-5">
          <button>Logout</button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default NavComponents;
