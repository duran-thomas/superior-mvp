import AppointmentPrimary from "@/components/sections/appointment/AppointmentPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const AppointmentMain = () => {
  return (
    <main>
      <HeroPrimary title={"Schedule Appointment"} text={"Appointment"} />
      <AppointmentPrimary />
    </main>
  );
};

export default AppointmentMain;
