import { Center, VStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../styles/pages/Login.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/global/Loader";
import { connect, useSelector } from "react-redux";
import { userVerify } from "../store/user/actions";

const Index = ({ userVerify }) => {
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { user, loading } = userLogin;

  useEffect(() => {
    // console.log("index");
    if (!user && !loading) {
      router.push("/login");
    }
  }, [router, user, loading]);

  return <Loader />;

  // return (
  //   <Center w="full" h="100vh" className={styles.pageBG} px={[4, null]}>
  //     <VStack>
  //       <Center>
  //         <NextLink href="/login">
  //           <Link
  //             textStyle="p2Bold"
  //             color="customDark"
  //             mt={4}
  //             align="center"
  //             _hover={{ opacity: "0.85", textTransform: "none" }}
  //           >
  //             Login Page
  //           </Link>
  //         </NextLink>
  //       </Center>

  //       <Center>
  //         <NextLink href="/signup">
  //           <Link
  //             textStyle="p2Bold"
  //             color="customDark"
  //             mt={4}
  //             align="center"
  //             _hover={{ opacity: "0.85", textTransform: "none" }}
  //           >
  //             Signup Page
  //           </Link>
  //         </NextLink>
  //       </Center>

  //       <Center>
  //         <NextLink href="/forgotpassword">
  //           <Link
  //             textStyle="p2Bold"
  //             color="customDark"
  //             mt={4}
  //             align="center"
  //             _hover={{ opacity: "0.85", textTransform: "none" }}
  //           >
  //             Forgot Password Page
  //           </Link>
  //         </NextLink>
  //       </Center>

  //       <Center>
  //         <NextLink href="/home">
  //           <Link
  //             textStyle="p2Bold"
  //             color="customDark"
  //             mt={4}
  //             align="center"
  //             _hover={{ opacity: "0.85", textTransform: "none" }}
  //           >
  //             Inner Pages
  //           </Link>
  //         </NextLink>
  //       </Center>
  //     </VStack>
  //   </Center>
  // );
};

export default connect(null, { userVerify })(Index);
// export default Index;
