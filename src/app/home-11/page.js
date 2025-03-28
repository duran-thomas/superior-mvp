import Home11Main from "@/components/layout/main/Home11Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home11 = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerStyle={2}
      footerBg={"dark"}
    >
      <Home11Main />
    </PageWrapper>
  );
};

export default Home11;
