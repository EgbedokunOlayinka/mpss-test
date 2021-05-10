import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_RESET,
  USER_REGISTER_RESET,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_LOGOUT,
  USER_VERIFY_FAIL,
  USER_LAST_LINK,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";

import Cookies from "universal-cookie";

// axios.defaults.baseURL = "https://splattai.com";
axios.defaults.baseURL = "https://rocky-sands-09711.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080/smtpp";
// axios.defaults.baseURL = "https://127.0.0.1/smtpp";

export const userRegister = ({
  firstName: first_name,
  lastName: last_name,
  organizationName: organization_name,
  organizationWebsite: organization_website,
  timeZone: time_zone,
  email,
  password,
}) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

    const transformed = qs.stringify({
      first_name,
      last_name,
      organization_website,
      organization_name,
      time_zone,
      email,
      password,
    });

    const { data } = await axios.post(
      "/mspstreamsampleregister.php",
      // "http://localhost:8080/smtpp/mspstreamsampleregister.php",
      transformed,
      config
    );

    console.log(data);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Signup failed",
      description:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const cookies = new Cookies();

    const token = cookies.get("mspsUser") || null;

    // console.log(cookies.get('mspsUser'));

    const config = {
      withCredentials: true,
      // credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: token,
        "Access-Token": token,
        // "Content-Type": "application/json",
      },
    };

    const transformed = qs.stringify({
      email,
      password,
    });

    const { data } = await axios.post(
      "/mspstreamsamplelogin.php",
      // "https://ancient-plateau-27827.herokuapp.com/test.php",
      transformed,
      // { email, password },
      config
    );

    console.log(data);

    cookies.set("mspsUser", data.token, {
      path: "/",
      maxAge: 604800,
      secure: false,
      httpOnly: false,
    });

    // console.log(cookies.get('mspsUser'));

    //   setcookie('mspsUser', $jwt, [
    //     'expires' => time() + 604800,
    //     'path' => null,
    //     'domain' => null,
    //     'secure' => true,
    //     'httponly' => true,
    //     'samesite' => 'None',
    // ]);

    // console.log(cookies.getAll());

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Login failed",
      description:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: USER_LOGIN_FAIL,
      // payload: "Your request could not be completed. Please try again",
      payload:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
    });
  }
};

export const userVerify = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_VERIFY_REQUEST,
    });

    const cookies = new Cookies();

    const token = cookies.get("mspsUser") || null;

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: token,
        "Access-Token": token,
      },
    };

    const { data } = await axios.get(
      // "http://localhost:8080/smtpp/mspstreamauthverify.php",
      "/mspstreamauthverify.php",
      config
    );

    console.log(data);

    dispatch({
      type: USER_VERIFY_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    // console.log(error);
    dispatch({
      type: USER_VERIFY_FAIL,
    });
  }
};

export const userLogout = () => async (dispatch) => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  };

  const cookies = new Cookies();

  cookies.set("mspsUser", "", {
    path: "/",
    maxAge: 0,
    secure: false,
    httpOnly: false,
  });

  // const { data } = await axios.get(
  //   "/mspstreamlogout.php",
  //   config
  // );

  dispatch({
    type: USER_LOGOUT,
  });
};

export const userForgotPassword = ({ email }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

    const transformed = qs.stringify({
      email,
    });

    const { data } = await axios.post(
      "/mspstreamsampleforgpassword.php",
      // "http://localhost:8080/smtp/mspstreamsampleforgpassword.php",
      transformed,
      config
    );

    // console.log(data);

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
      payload: data.data.email,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Request failed",
      description:
        err.response && err.response.data.message
          ? capitalize(err.response.data.message)
          : "Your request could not be completed. Please try again",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};

export const userForgotPasswordReset = () => async (dispatch) => {
  dispatch({
    type: USER_FORGOT_PASSWORD_RESET,
  });
};

export const userRegisterReset = () => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_RESET,
  });
};

export const userLastLink = (link) => async (dispatch) => {
  console.log({ link });
  dispatch({
    type: USER_LAST_LINK,
    payload: link,
  });
};
