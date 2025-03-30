import Home12Main from "@/components/layout/main/Home12Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home12 = () => {
  return (
    <PageWrapper
      headerStyle={4}
      headerSize={"lg"}
      footerStyle={2}
      footerBg={"dark"}
    >
      <Home12Main />
    </PageWrapper>
  );
};

export default Home12;
