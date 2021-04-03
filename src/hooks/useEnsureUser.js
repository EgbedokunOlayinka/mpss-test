import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const useEnsureUser = () => {
  const storedUser = useSelector((state) => state.user);
  const { user } = storedUser;

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return;
};

export default useEnsureUser;
