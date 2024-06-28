import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { useLogoutMutation } from "../../store/services/endpoints/auth.edpoints";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NavComponents = () => {
  const nav = useNavigate();
  const [logoutFun, data] = useLogoutMutation();
  const handleLogout = () => {
    logoutFun();
    localStorage.removeItem("auth");
    nav(0);
    toast.success("Logout Successful");
  };
  return (
    <div className="w-full h-20 xl:px-52 px-10 flex mx-auto items-center border-b bg-white">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">Yan</h1>
        <div className="flex justify-center items-center gap-5 ">
          <button
            className="hover:bg-slate-100 px-2 py-1 font-semibold rounded-lg bg-white hover:text-gray-800"
            onClick={handleLogout}
          >
            Logout
          </button>
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
