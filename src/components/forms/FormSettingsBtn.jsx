import { Button } from "@chakra-ui/react";

const FormSettingsBtn = ({ dark, children, ...props }) => {
  return (
    <Button
      _hover={{
        opacity: 0.85,
      }}
      borderRadius="7px"
      textStyle="p2Bold"
      h="49px"
      bg={dark ? "customDark" : "white"}
      color={dark ? "white" : "veryDark"}
      borderColor={dark ? "transparent" : "greyOne"}
      borderWidth="1px"
      py="13px"
      px={["24px", "47px"]}
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

export default FormSettingsBtn;
