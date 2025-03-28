import Home16Main from "@/components/layout/main/Home16Main";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React from "react";

const Home16 = () => {
  return (
    <PageWrapper headerStyle={5} navBg={"secondary"} footerStyle={3}>
      <Home16Main />
    </PageWrapper>
  );
};

export default Home16;
