import Home2Main from "@/components/layout/main/Home2Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home2 = () => {
  return (
    <PageWrapper headerStyle={2} footerStyle={2} footerBg={"dark"}>
      <Home2Main />
    </PageWrapper>
  );
};

export default Home2;
