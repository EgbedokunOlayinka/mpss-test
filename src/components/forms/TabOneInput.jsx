import { Input } from "@chakra-ui/react";

const TabOneInput = ({ num, value, onChange, textStyle, color, ...props }) => {
  return (
    <Input
      border="none"
      px={0}
      borderRadius={0}
      _focus={{
        borderBottom: "0.5px solid #d5d9e3",
      }}
      value={value}
      onChange={(e) => onChange(num - 1, e.target.value)}
      textStyle={textStyle}
      color={color ? color : "customDark"}
      {...props}
    />
  );
};

export default TabOneInput;
