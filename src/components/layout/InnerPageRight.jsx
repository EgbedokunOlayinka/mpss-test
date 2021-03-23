import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";

const InnerPageRight = ({ children, sidebarOpen, setSidebarOpen }) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  return (
    <Box
      py={[8, 10]}
      px={6}
      onClick={() => isSmallerThan768 && sidebarOpen && setSidebarOpen(false)}
      h="full"
      ml={[0, null, "213px"]}
    >
      {React.cloneElement(children, { setSidebarOpen, sidebarOpen })}
    </Box>
  );
};

export default InnerPageRight;
