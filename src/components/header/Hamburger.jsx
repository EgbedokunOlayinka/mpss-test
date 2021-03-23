import { VStack } from "@chakra-ui/react";
import Dash from "../global/Dash";

const Hamburger = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <VStack spacing={1} onClick={() => setSidebarOpen(!sidebarOpen)}>
      <Dash />
      <Dash />
      <Dash />
    </VStack>
  );
};

export default Hamburger;
