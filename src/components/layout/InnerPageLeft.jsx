import { Box } from "@chakra-ui/react";
import NavItems from "./NavItems";

import dynamic from "next/dynamic";

// const NavItems = dynamic(() => import("./NavItems"), { ssr: false });

const InnerPageLeft = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box
      bg="customDark"
      h="100%"
      py="36px"
      position="fixed"
      zIndex={1}
      w="213px"
    >
      <NavItems sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </Box>
  );
};

export default InnerPageLeft;
