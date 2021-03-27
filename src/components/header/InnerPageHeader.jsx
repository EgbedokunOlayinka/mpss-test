import { Box, Text, HStack, Icon } from "@chakra-ui/react";
import Header from "./Header";
import CustomSwitch from "../global/CustomSwitch";
import CustomSort from "../global/CustomSort";
import CustomFilter from "../global/CustomFilter";
import { FiDownload } from "react-icons/fi";

const InnerPageHeader = ({
  sidebarOpen,
  setSidebarOpen,
  title,
  listView,
  setListView,
}) => {
  const gridTextProps = {
    color: listView ? "greyTwo" : "customDark",
    text: listView ? "p2Regular" : "p2Bold",
  };
  const listTextProps = {
    color: listView ? "primaryStackBlue" : "greyBlue",
    text: listView ? "p2Bold" : "p2Regular",
  };

  return (
    <>
      <Header
        title={title}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Box
        w="full"
        mt={["43px", "61px", "79px"]}
        display={["block", null, "flex"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing={2} minW="190px">
          <Text color={listTextProps.color} textStyle={listTextProps.text}>
            List View
          </Text>
          <CustomSwitch value={listView} setValue={setListView} />
          <Text color={gridTextProps.color} textStyle={gridTextProps.text}>
            Grid View
          </Text>
        </HStack>

        <Box display={["block", "flex"]} mt={[6, null, 0, 0]}>
          {listView && (
            <HStack spacing="8px">
              <Icon as={FiDownload} color="customDark" w={4} h={4} />
              <Text color="customDark" textStyle="p2Regular">
                Export CSV
              </Text>
            </HStack>
          )}

          <HStack
            spacing={["16px", "32px", "16px", "32px"]}
            ml={
              listView
                ? [null, "39px", "19px", "39px"]
                : [null, null, "19px", "39px"]
            }
            mt={[6, 0]}
          >
            <CustomSort />
            <CustomFilter />
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default InnerPageHeader;
