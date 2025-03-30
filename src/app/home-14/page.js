import Home14Main from "@/components/layout/main/Home14Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home14 = () => {
  return (
    <PageWrapper
      headerStyle={4}
      headerSize={"lg"}
      footerStyle={3}
      footerBg={"dark"}
    >
      <Home14Main />
    </PageWrapper>
  );
};

export default Home14;
