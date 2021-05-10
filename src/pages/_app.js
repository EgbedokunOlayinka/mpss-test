import { wrapper } from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

import { useSelector } from "react-redux";
import { useEffect } from "react";

import { connect } from "react-redux";
import { userVerify, userLastLink } from "../store/user/actions";
import { useRouter } from "next/router";

import "../styles/globals.scss";

const WrappedApp = ({ Component, pageProps, userVerify, userLastLink }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  const userLogin = useSelector((state) => state.userLogin);
  const { user, loading } = userLogin;

  const router = useRouter();

  useEffect(() => {
    // console.log("app");
    userLastLink(router.pathname);
    if (!user) {
      // console.log("running");
      userVerify();
    }
  }, []);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(
  connect(null, { userVerify, userLastLink })(WrappedApp)
);
// export default wrapper.withRedux(WrappedApp);
