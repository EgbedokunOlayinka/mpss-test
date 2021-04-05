import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/global/Loader";

const EnsureGuest = (WrappedComponent) => {
  const RequiresGuest = (props) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { user } = userLogin;

    const userRegister = useSelector((state) => state.userRegister);
    const { redirect: registerRedirect } = userRegister;

    const userForgot = useSelector((state) => state.userForgot);
    const { redirect: forgotRedirect } = userForgot;

    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push("/home");
      } else if (registerRedirect) {
        router.push("/registersuccess");
      } else if (forgotRedirect) {
        router.push("/passwordreset");
      }
    }, [user, registerRedirect, forgotRedirect]);

    return user || forgotRedirect || registerRedirect ? (
      <Loader />
    ) : (
      <WrappedComponent {...props} />
    );
    // return user ? <h1>loading</h1> : <Loader />;
  };

  return RequiresGuest;
};

export default EnsureGuest;
