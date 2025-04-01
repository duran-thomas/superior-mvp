import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, {Suspense} from "react";

const Blogs = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <Suspense fallback={<div>Loading...</div>}>
      <BlogsMain />
      </Suspense>
    </PageWrapper>
  );
};

export default Blogs;
