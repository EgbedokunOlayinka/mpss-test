import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";

const Circles = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%">
      <Header
        title="Circles"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Box>
  );
};

Circles.Layout = InnerPageLayout;

export default Circles;
