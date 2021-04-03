import { Box } from "@chakra-ui/react";
import NavItems from "./NavItems";

const NewNavItems = ({ sidebarOpen, setSidebarOpen}) => {
    return (
        <Box bg="customDark" h="100%" py={["24px", "36px"]}>
          {
            <NavItems
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        </Box>
    )
}

export default NewNavItems;