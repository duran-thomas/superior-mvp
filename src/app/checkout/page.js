import CheckoutMain from "@/components/layout/main/CheckoutMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, { Suspense } from "react";

const Checkout = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <Suspense fallback={<div>Loading...</div>}>
      <CheckoutMain />
      </Suspense>
    </PageWrapper>
  );
};

export default Checkout;
