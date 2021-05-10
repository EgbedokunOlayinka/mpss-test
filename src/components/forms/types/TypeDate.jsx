import { Input } from "@chakra-ui/react";

const TypeDate = () => {
  return (
    <Input
      border="none"
      borderBottom="0.5px solid #d5d9e3"
      px={0}
      py={0}
      borderRadius={0}
      _focus={{
        border: "none",
        borderBottom: "0.5px solid #d5d9e3",
      }}
      _placeholder={{
        color: "greyTwo",
      }}
      textStyle="p2Regular"
      color="black"
      placeholder="DD/MM/YY"
      type="date"
      width="150px"
    />
  );
};

export default TypeDate;
