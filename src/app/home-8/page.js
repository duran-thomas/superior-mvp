import Home8Main from "@/components/layout/main/Home8Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home8 = () => {
  return (
    <PageWrapper headerStyle={4} footerStyle={2} footerBg={"dark"}>
      <Home8Main />
    </PageWrapper>
  );
};

export default Home8;
