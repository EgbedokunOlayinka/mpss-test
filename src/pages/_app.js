import { wrapper } from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";

import "../styles/globals.scss";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
