import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";

const Billing = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%">
      <Header
        title="Billing"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Box>
  );
};

Billing.Layout = InnerPageLayout;

export default Billing;
