import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/global/Loader";

const EnsureGuest = (WrappedComponent) => {
  const RequiresGuest = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { user, loading } = userLogin;

    const userRegister = useSelector((state) => state.userRegister);
    const { redirect: registerRedirect } = userRegister;

    const userForgot = useSelector((state) => state.userForgot);
    const { redirect: forgotRedirect } = userForgot;

    const userLink = useSelector((state) => state.userLink);
    const { lastLink } = userLink;

    const router = useRouter();

    useEffect(() => {
      // console.log("ensureguest");
      if (user) {
        if (
          !lastLink ||
          lastLink === "/login" ||
          lastLink === "/home" ||
          lastLink === "/" ||
          lastLink === "/forgotpassword" ||
          lastLink === "/registersuccess"
        ) {
          router.push("/home");
        } else {
          router.back();
        }

        // console.log(user);
        // console.log(login);
        // router.push("/home");
      } else if (registerRedirect) {
        console.log("pushed");
        router.push("/registersuccess");
      } else if (forgotRedirect) {
        router.push("/passwordreset");
      }
    }, [user, registerRedirect, forgotRedirect]);

    return user || loading ? <Loader /> : <WrappedComponent {...props} />;
    // return user ? <h1>loading</h1> : <Loader />;
  };

  return RequiresGuest;
};

export default EnsureGuest;
