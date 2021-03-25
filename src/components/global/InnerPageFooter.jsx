import {
  Box,
  Flex,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { BiCaretDown } from "react-icons/bi";

const InnerPageFooter = ({ pageNum, setPageNum, pageChange }) => {
  return (
    <Box
      display={["block", "flex"]}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      pb={12}
    >
      <Flex align="center" justify={["center", "auto"]}>
        <Text textStyle="p3Regular" color="veryDark">
          Page
        </Text>
        <form onSubmit={(e) => pageChange(e)}>
          <input
            style={inputStyle}
            type="number"
            value={pageNum}
            onChange={(e) => setPageNum(e.target.value)}
          />
        </form>
        <Text textStyle="p3Regular" color="veryDark">
          of 12
        </Text>
      </Flex>

      <Flex mt={[6, 0]} align="center" justify={["center", "auto"]}>
        <Menu>
          <MenuButton>
            <HStack
              spacing={1}
              borderRadius="4px"
              borderColor="greyOne"
              borderWidth="0.5px"
              w="48px"
              h="32px"
              px={2}
            >
              <Text color="veryDark" textStyle="p3Regular">
                20
              </Text>
              <Icon as={BiCaretDown} color="veryDark" />
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem>30</MenuItem>
            <MenuItem>40</MenuItem>
            <MenuItem>50</MenuItem>
          </MenuList>
        </Menu>

        <Text textStyle="p3Regular" color="black" ml="11px">
          entries per page
        </Text>
      </Flex>
    </Box>
  );
};

const inputStyle = {
  width: "32px",
  height: "32px",
  border: "0.5px solid #d5d9e3",
  textAlign: "center",
  color: "black",
  borderRadius: "3px",
  fontSize: "12px",
  fontWeight: "700",
  lineHeight: "18px",
  marginLeft: "11px",
  marginRight: "11px",
};

export default InnerPageFooter;
