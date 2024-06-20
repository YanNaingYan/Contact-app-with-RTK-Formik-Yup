import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, SignIn, SignUp } from "./pages";
import { Toast, ToastProvider } from "@radix-ui/react-toast";

const App = () => {
  return (
    <div className="w-screen h-screen ">
      <ToastProvider>
        <Toast />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default App;
