import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../components/global/Loader";

const EnsureGuest = (WrappedComponent) => {
  const RequiresGuest = (props) => {
    const storedUser = useSelector((state) => state.user);
    const { user } = storedUser;

    const router = useRouter();

    useEffect(() => {
      if (user) {
        router.push("/home");
      }
    }, [user]);

    return user ? <Loader /> : <WrappedComponent {...props} />;
    // return user ? <h1>loading</h1> : <Loader />;
  };

  return RequiresGuest;
};

export default EnsureGuest;
