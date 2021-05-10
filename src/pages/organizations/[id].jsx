import React from "react";
import InnerPageLayout from "../../components/layout/InnerPageLayout";
import {
  Box,
  Center,
  Text,
  Grid,
  useMediaQuery,
  VStack,
  Flex,
} from "@chakra-ui/react";
import Header from "../../components/header/Header";
import OrganizationWeekday from "../../components/organizations/OrganizationWeekday";
import OrganizationEvent from "../../components/organizations/OrganizationEvent";
import OrganizationCardTwo from "../../components/organizations/OrganizationCardTwo";

const Organization = ({ sidebarOpen, setSidebarOpen }) => {
  const [isSmallerThan992] = useMediaQuery("(max-width: 991px)");

  return (
    <Box position="relative" minH="100%" px={6}>
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        // title={isSmallerThan992 ? 'Back' : 'Back to View Organizations' }
        title="Back to Organizations"
        sub="/organizations"
      />

      <Box
        mt="64px"
        // pb="32px"
        mr={[0, 0, 0, "40px", "80px"]}
        display={["block", null, null, "grid"]}
        gridTemplateColumns="1fr 200px"
        gridGap={[0, 0, 0, "32px", "64px"]}
      >
        <Box h="full">
          <Text color="black" fontWeight="700" fontSize="36px">
            ABC Organization
          </Text>
          <Text textStyle="p1Bold" color="customDark" mt="8px">
            Incorporated on 25th June 2019
          </Text>
          {isSmallerThan992 && (
            <Center
              h="200px"
              w="200px"
              border="0.5px solid black"
              borderRadius="10px"
              mt="24px"
            >
              <Text color="black" textStyle="p2Bold">
                Company Logo
              </Text>
            </Center>
          )}
          <Grid templateColumns="1fr 1fr" mt="24px">
            <Box>
              <Text textStyle="p2Regular" color="greyTwo">
                Email Address
              </Text>
              <Text textStyle="p1Bold" color="veryDark" noOfLines={1} mt="8px">
                abc@xyz.com
              </Text>
            </Box>
            <Box>
              <Text textStyle="p2Regular" color="greyTwo">
                Phone Number
              </Text>
              <Text textStyle="p1Bold" color="veryDark" noOfLines={1} mt="8px">
                09023808852
              </Text>
            </Box>
          </Grid>

          <Box mt="24px">
            <Text textStyle="p2Regular" color="greyTwo">
              Opening Hours
            </Text>
            <Box
              display={["block", "grid"]}
              gridTemplateColumns="1fr 1fr"
              mt="8px"
            >
              <VStack align="start" justify="start" spacing={3}>
                <OrganizationWeekday day="Monday" start="9:00" end="17:00" />
                <OrganizationWeekday day="Tuesday" start="9:00" end="17:00" />
                <OrganizationWeekday day="Wednesday" start="9:00" end="17:00" />
              </VStack>
              <VStack align="start" justify="start" spacing={3} mt={[3, 0]}>
                <OrganizationWeekday day="Thursday" start="9:00" end="17:00" />
                <OrganizationWeekday day="Friday" start="9:00" end="17:00" />
                <OrganizationWeekday day="Weekends" closed />
              </VStack>
            </Box>
          </Box>
          <Box mt="24px">
            <Text textStyle="p2Regular" color="greyTwo">
              Weekly Events
            </Text>
            <VStack align="start" justify="start" spacing={3} mt="8px">
              <OrganizationEvent />
            </VStack>
          </Box>
        </Box>
        {!isSmallerThan992 && (
          <Box h="full">
            <Center
              h="200px"
              w="200px"
              border="0.5px solid black"
              borderRadius="10px"
            >
              <Text color="black" textStyle="p2Bold">
                Company Logo
              </Text>
            </Center>

            <Box mt="24px" w="200px">
              <Text color="greyTwo" textStyle="p2Regular">
                Tags
              </Text>
              <Text mt="8px" color="black" textStyle="p2Regular">
                Construction, Construction, Construction, Construction,
                Construction, Construction, Construction, Construction,
              </Text>
            </Box>
          </Box>
        )}
      </Box>

      <Box
        mt="64px"
        pb="64px"
        mr={[0, 0, 0, "40px", "80px"]}
        // display={["block", null, null, "grid"]}
        display="grid"
        gridTemplateColumns={["1fr", `repeat(auto-fill, minmax(450px, 1fr))`]}
        // gridTemplateColumns="1fr 1fr"
        gridGap={["24px", "32px"]}
      >
        <OrganizationCardTwo text="Contact Person" />
        <OrganizationCardTwo text="Additional Information" light />
      </Box>
    </Box>
  );
};

Organization.Layout = InnerPageLayout;

export default Organization;

// export default connect(null, { getAllOrganizations })(Organizations);
