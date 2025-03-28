import AccountPrimary from "@/components/sections/account/AccountPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const AccountMain = () => {
  return (
    <main>
      <HeroPrimary title={"My Account"} text="My Account" />
      <AccountPrimary />
    </main>
  );
};

export default AccountMain;
