import { Box, useDisclosure } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";
import HomeMenuOptions from "../components/home/HomeMenuOptions";
import AddNewContact from "../components/modals/AddNewContact";
import AddNewOrganization from "../components/modals/AddNewOrganization";
import CreateNewCircle from "../components/modals/CreateNewCircle";

import { useSelector } from "react-redux";

const Home = ({ sidebarOpen, setSidebarOpen }) => {
  // const user = useEnsureUser();

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

  const {
    isOpen: isOpenCircles,
    onOpen: onOpenCircles,
    onClose: onCloseCircles,
  } = useDisclosure();

  return (
    <Box position="relative" h="100%" px={6}>
      <AddNewContact
        isOpen={isOpenContacts}
        onOpen={onOpenContacts}
        onClose={onCloseContacts}
      />

      <AddNewOrganization
        isOpen={isOpenOrganizations}
        onOpen={onOpenOrganizations}
        onClose={onCloseOrganizations}
      />

      <CreateNewCircle
        isOpen={isOpenCircles}
        onOpen={onOpenCircles}
        onClose={onCloseCircles}
      />

      <Header
        title="Home"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Box position="absolute" right="0px" bottom="0px">
        <HomeMenuOptions
          onOpenContacts={onOpenContacts}
          onOpenOrganizations={onOpenOrganizations}
          onOpenCircles={onOpenCircles}
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
