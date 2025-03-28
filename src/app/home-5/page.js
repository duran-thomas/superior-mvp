import Home5Main from "@/components/layout/main/Home5Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home5 = () => {
  return (
    <PageWrapper
      headerStyle={2}
      headerSize={"lg"}
      footerBg={"dark"}
      isNotHeaderTop={true}
    >
      <Home5Main />
    </PageWrapper>
  );
};

export default Home5;
