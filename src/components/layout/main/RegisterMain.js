import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import RegisterPrimary from "@/components/sections/register/RegisterPrimary";
import React from "react";

const RegisterMain = () => {
  return (
    <main>
      <HeroPrimary title={"Sign Up"} text="Register" />
      <RegisterPrimary />
    </main>
  );
};

export default RegisterMain;
