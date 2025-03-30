import Home6Main from "@/components/layout/main/Home6Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home6 = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerStyle={2}
      footerBg={"dark"}
    >
      <Home6Main />
    </PageWrapper>
  );
};

export default Home6;
