import BlogsMain from "@/components/layout/main/BlogsMain";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import React, { Suspense} from "react";

const BlogsLeftSidebar = () => {
  return (
    <PageWrapper headerStyle={2} footerBg={"dark"} isNotHeaderTop={true}>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogsMain title={"Blog Left Sidebar"} isLeftSidebar={true} />
      </Suspense>
    </PageWrapper>
  );
};

export default BlogsLeftSidebar;
