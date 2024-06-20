import React, { useEffect } from "react";
import { useUserProfileQuery } from "../../store/services/endpoints/auth.edpoints";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, children, token }) => {
  const nav = useNavigate();
  const { data } = useUserProfileQuery();

  useEffect(() => {
    if (check) {
      localStorage.setItem("auth", JSON.stringify(token));
    } else if (data) {
      nav("/home");
    }
  }, [check, data]);

  return <>{children}</>;
};

export default AuthGuard;
