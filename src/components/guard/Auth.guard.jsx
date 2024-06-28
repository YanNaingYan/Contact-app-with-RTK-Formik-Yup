import React, { useEffect } from "react";
import { useUserProfileQuery } from "../../store/services/endpoints/auth.edpoints";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ check, children, token, path = "/" }) => {
  const nav = useNavigate();
  const { data, isError } = useUserProfileQuery();

  useEffect(() => {
    if (check) {
      localStorage.setItem("auth", JSON.stringify(token));
    } else if (isError) {
      nav(path);
    } else if (data) {
      nav("/home");
    }
  }, [check, data, isError]);

  return <>{children}</>;
};

export default AuthGuard;
