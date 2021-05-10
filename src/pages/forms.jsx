import { Box, Text, Center, Stack, WrapItem, Wrap } from "@chakra-ui/react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import Header from "../components/header/Header";
import FormBox from "../components/icons/FormBox";
import NextLink from "next/link";

const Forms = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Box position="relative" h="100%" px={6}>
      <Header
        title="Forms"
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Center h="100%" px={[4, 8]} py={[4, 8]}>
        <Wrap justify="center" spacing={[4, 8]}>
          <NextLink href="/forms/create">
            <WrapItem
              _hover={{
                transform: "scale(1.03)",
              }}
              transition="all .2s ease-in-out"
            >
              <Center
                h={["200px", "240px", null, "274px"]}
                w={["200px", "240px", null, "274px"]}
                border="1px"
                borderColor="greyOne"
                style={boxStyle}
                borderRadius="10px"
                p={[4, 8]}
              >
                <Box mt="auto">
                  <Center mb={6}>
                    <FormBox />
                  </Center>
                  <Text textStyle="p1Regular">Create New Form</Text>
                </Box>
              </Center>
            </WrapItem>
          </NextLink>
          <NextLink href="/forms/view">
            <WrapItem
              _hover={{
                transform: "scale(1.03)",
              }}
              transition="all .2s ease-in-out"
            >
              <Center
                h={["200px", "240px", null, "274px"]}
                w={["200px", "240px", null, "274px"]}
                border="1px"
                borderColor="greyOne"
                style={boxStyle}
                borderRadius="10px"
                p={[4, 8]}
              >
                <Box mt="auto">
                  <Center mb={6}>
                    <FormBox />
                  </Center>
                  <Text textStyle="p1Regular">View Forms</Text>
                </Box>
              </Center>
            </WrapItem>
          </NextLink>
        </Wrap>
      </Center>
    </Box>
  );
};

const boxStyle = {
  boxShadow: "0px 4px 12px rgba(213, 217, 227, 0.2)",
};

Forms.Layout = InnerPageLayout;

export default Forms;
