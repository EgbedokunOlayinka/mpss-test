import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";

const Contacts = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%">
      <Header
        title="Contacts"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
    </Box>
  );
};

Contacts.Layout = InnerPageLayout;

export default Contacts;
