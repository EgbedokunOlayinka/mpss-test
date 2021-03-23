import { VStack } from "@chakra-ui/react";
import Dash from "../global/Dash";

const Hamburger = ({ sidebarOpen, setSidebarOpen, ...props }) => {
  return (
    <VStack spacing={1} onClick={() => setSidebarOpen(!sidebarOpen)} {...props}>
      <Dash />
      <Dash />
      <Dash />
    </VStack>
  );
};

export default Hamburger;
