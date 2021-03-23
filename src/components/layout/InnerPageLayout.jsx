import React, { useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import InnerPageLeft from "./InnerPageLeft";
import InnerPageRight from "./InnerPageRight";
import MobileNav from "./MobileNav";

const InnerPageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      // display={["block", null, "grid"]}
      // gridTemplateColumns="1.5fr 8.5fr"
      overflowX="hidden"
      w="100vw"
      h="100vh"
      position="relative"
    >
      {isSmallerThan768 ? (
        <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      ) : (
        <InnerPageLeft
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}

      <InnerPageRight sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </InnerPageRight>
    </Box>
  );
};

export default InnerPageLayout;
