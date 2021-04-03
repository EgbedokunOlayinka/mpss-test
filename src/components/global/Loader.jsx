import BeatLoader from "react-spinners/BeatLoader";
import { Center } from "@chakra-ui/react";
import Div100vh from "react-div-100vh";

export default function () {
  return (
    <Div100vh>
      <Center w="100vw" h="full">
        <BeatLoader loading={true} size={30} margin={4} />
      </Center>
    </Div100vh>
  );
}
