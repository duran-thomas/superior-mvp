import CallToActionForm from "@/components/sections/call-to-action/CallToActionForm";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Skills2 from "@/components/sections/skills/Skills2";
import TeamPrimary from "@/components/sections/team/TeamPrimary";
import React from "react";

const TeamMain = () => {
  return (
    <main>
      <HeroPrimary title={"Our Experts"} text={"Team"} />
      <TeamPrimary />
      <CallToActionForm type={2} />
      <Skills2 />
    </main>
  );
};

export default TeamMain;
