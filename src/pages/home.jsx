import { Box } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";
import HomeMenuOptions from "../components/home/HomeMenuOptions";

const Home = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%">
      <Header
        title="Home"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Box position="absolute" right="0px" bottom="0px">
        <HomeMenuOptions />
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
