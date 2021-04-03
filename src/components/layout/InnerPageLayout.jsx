import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
// import InnerPageLeft from "./InnerPageLeft";
// import InnerPageRight from "./InnerPageRight";
// import MobileNav from "./MobileNav";
import Div100vh from "react-div-100vh";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from '../global/Loader';
import dynamic from "next/dynamic";

const InnerPageLeft = dynamic(() => import("./InnerPageLeft"), { ssr: false });
const InnerPageRight = dynamic(() => import("./InnerPageRight"), { ssr: false });
const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false });

const InnerPageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  const storedUser = useSelector((state) => state.user);
  const { user } = storedUser;

  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);

  return (
    <Div100vh>
      <Box overflowX="hidden" w="100vw" h="full" position="relative">
        {isSmallerThan768 ? (
          <MobileNav
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        ) : (
          <InnerPageLeft
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        <InnerPageRight
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        >
          {children}
        </InnerPageRight>
      </Box>
    </Div100vh>
  )

  // return !user ? (
  //   <Loader />
  // ) : (
  //   <Div100vh>
  //     <Box overflowX="hidden" w="100vw" h="full" position="relative">
  //       {isSmallerThan768 ? (
  //         <MobileNav
  //           sidebarOpen={sidebarOpen}
  //           setSidebarOpen={setSidebarOpen}
  //         />
  //       ) : (
  //         <InnerPageLeft
  //           sidebarOpen={sidebarOpen}
  //           setSidebarOpen={setSidebarOpen}
  //         />
  //       )}

  //       <InnerPageRight
  //         sidebarOpen={sidebarOpen}
  //         setSidebarOpen={setSidebarOpen}
  //       >
  //         {children}
  //       </InnerPageRight>
  //     </Box>
  //   </Div100vh>
  // );
};

export default InnerPageLayout;
