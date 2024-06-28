import React, { useEffect } from "react";
import { useUserProfileQuery } from "../../store/services/endpoints/auth.edpoints";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";

const AuthGuard = ({ check, children, token, path = "/" }) => {
  const nav = useNavigate();
  const { data, isError, isLoading } = useUserProfileQuery();

  useEffect(() => {
    if (check) {
      localStorage.setItem("auth", JSON.stringify(token));
    } else if (isError) {
      nav(path);
    } else if (data) {
      nav("/home");
    }
  }, [check, data, isError]);

  return <>{isLoading ? <Loading /> : <>{children}</>}</>;
};

export default AuthGuard;
