import { wrapper } from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

import "../styles/globals.scss";

const WrappedApp = ({ Component, pageProps }) => {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
