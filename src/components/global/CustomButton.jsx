import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  return (
    <Button
      //   w={full ? "full" : ["full", null, "143px"]}
      _hover={{
        opacity: 0.85,
      }}
      //   transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      borderRadius="10px"
      textStyle="p1Bold"
      px="78px"
      py="13px"
      bg="customDark"
      color="white"
      _disabled={{
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: "0.4",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
