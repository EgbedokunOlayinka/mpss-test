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
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";

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
      "https://splattai.com/mspstreamsampleregister.php",
      // "http://localhost:8080/smtp/mspstreamsampleregister.php",
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

    const config = {
      // withCredentials: true,
      // credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

    const transformed = qs.stringify({
      email,
      password,
    });

    const { data } = await axios.post(
      "https://splattai.com/mspstreamsamplelogin.php",
      // "http://localhost:8080/smtp/mspstreamsamplelogin.php",
      transformed,
      config
    );

    console.log(data);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("smtpUser", JSON.stringify(data.data));
    }

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
      "https://splattai.com/mspstreamsampleforgpassword.php",
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
