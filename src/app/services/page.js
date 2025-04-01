import ServicesMain from "@/components/layout/main/ServicesMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, {Suspense} from "react";

const Services = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <Suspense fallback={<div>Loading...</div>}>
      <ServicesMain />
      </Suspense>
    </PageWrapper>
  );
};

export default Services;
