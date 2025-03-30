import Home13Main from "@/components/layout/main/Home13Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home13 = () => {
  return (
    <PageWrapper headerStyle={4} headerSize={"lg"} footerBg={"dark"}>
      <Home13Main />
    </PageWrapper>
  );
};

export default Home13;
