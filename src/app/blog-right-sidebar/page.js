import React, {Suspense} from "react";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import BlogsMain from "@/components/layout/main/BlogsMain";

const blogRightSidebar = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsMain title={"Blog Right Sidebar"} isRightSidebar={true} />
      </Suspense>
      <BlogsMain title="Blog Right Sidebar" />
    </PageWrapper>
  );
};

export default blogRightSidebar;
