import { AddIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

const CustomAddIcon = ({ label, listView }) => {
  return (
    <IconButton
      icon={<AddIcon color={listView ? "accentOne" : "white"} />}
      aria-label={label}
      bg={listView ? "white" : "customDark"}
      position="fixed"
      borderRadius="full"
      right={["20px", "40px", "80px"]}
      bottom={["20px", null, "40px"]}
      borderWidth="1px"
      borderColor={listView ? "customDark" : "transparent"}
      w="50px"
      h="50px"
      _hover={{ bg: listView ? "#eaeaea" : "#193a73" }}
    />
  );
};

export default CustomAddIcon;
