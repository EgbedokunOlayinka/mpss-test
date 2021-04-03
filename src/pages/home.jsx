import { Box, useDisclosure } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";
import HomeMenuOptions from "../components/home/HomeMenuOptions";
import AddNewContact from "../components/modals/AddNewContact";
import AddNewOrganization from "../components/modals/AddNewOrganization";
import { useRef } from "react";

import useEnsureUser from "../hooks/useEnsureUser";

const Home = ({ sidebarOpen, setSidebarOpen }) => {
  // const user = useEnsureUser();
  const initialRef = useRef();

  const {
    isOpen: isOpenContacts,
    onOpen: onOpenContacts,
    onClose: onCloseContacts,
  } = useDisclosure();

  const {
    isOpen: isOpenOrganizations,
    onOpen: onOpenOrganizations,
    onClose: onCloseOrganizations,
  } = useDisclosure();

  return (
    <Box position="relative" h="100%">
      <AddNewContact
        isOpen={isOpenContacts}
        onOpen={onOpenContacts}
        onClose={onCloseContacts}
      />

      <AddNewOrganization
        isOpen={isOpenOrganizations}
        onOpen={onOpenOrganizations}
        onClose={onCloseOrganizations}
        initialRef={initialRef}
      />

      <Header
        title="Home"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Box position="absolute" right="0px" bottom="0px" ref={initialRef}>
        <HomeMenuOptions
          onOpenContacts={onOpenContacts}
          onOpenOrganizations={onOpenOrganizations}
        />
      </Box>

      {/* <Box
        w="100px"
        h="50px"
        bg="red.500"
        position="absolute"
        right="0px"
        bottom="0px"
      ></Box> */}
    </Box>
  );
};

Home.Layout = InnerPageLayout;

export default Home;
