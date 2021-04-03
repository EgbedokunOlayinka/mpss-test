import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const useEnsureGuest = () => {
  const storedUser = useSelector((state) => state.user);
  const { user } = storedUser;

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  return;
};

export default useEnsureGuest;
