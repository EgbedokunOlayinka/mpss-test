import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
// import InnerPageLeft from "./InnerPageLeft";
// import InnerPageRight from "./InnerPageRight";
// import MobileNav from "./MobileNav";
import Div100vh from "react-div-100vh";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "../global/Loader";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { userVerify, userLastLink } from "../../store/user/actions";

const InnerPageLeft = dynamic(() => import("./InnerPageLeft"), { ssr: false });
const InnerPageRight = dynamic(() => import("./InnerPageRight"), {
  ssr: false,
});
const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false });

const InnerPageLayout = ({ children, userVerify }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");

  const userLogin = useSelector((state) => state.userLogin);
  const { user, loading } = userLogin;

  const router = useRouter();

  useEffect(() => {
    // console.log("innerpagelayout");
    // console.log({ user, loading });
    if (!user && !loading) {
      // console.log("pushing to login");
      // console.log({ user, loading });
      router.push("/login");
      // console.log(123);
    }
  }, [user, loading]);

  return !user || loading ? (
    <Loader />
  ) : (
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
  );

  // return (
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

export default connect(null, { userVerify, userLastLink })(InnerPageLayout);
// export default InnerPageLayout;
