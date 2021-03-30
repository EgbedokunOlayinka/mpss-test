import { Button } from "@chakra-ui/react";

const CustomModalButton = ({ children, dark, full, breadth, ...props }) => {
  return (
    <Button
      _hover={{
        opacity: 0.85,
      }}
      borderRadius="7px"
      textStyle="p2Bold"
      maxW={full ? "full" : "140px"}
      w={breadth ? breadth : "full"}
      h="47px"
      bg={dark ? "customDark" : "greyOne"}
      color={dark ? "white" : "veryDark"}
      _disabled={{
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.4",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomModalButton;
