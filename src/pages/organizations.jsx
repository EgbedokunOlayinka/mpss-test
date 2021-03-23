import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";

const Organizations = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%">
      <Header
        title="Organizations"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Box>
  );
};

Organizations.Layout = InnerPageLayout;

export default Organizations;
