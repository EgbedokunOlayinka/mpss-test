import { Box } from "@chakra-ui/react";
import NavItems from "./NavItems";

const InnerPageLeft = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box
      bg="customDark"
      h="full"
      py="36px"
      position="fixed"
      zIndex={1}
      w="213px"
    >
      <NavItems />
    </Box>
  );
};

export default InnerPageLeft;
