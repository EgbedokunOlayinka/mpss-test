import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";

const Settings = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%" px={6}>
      <Header
        title="Settings"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Box>
  );
};

Settings.Layout = InnerPageLayout;

export default Settings;
