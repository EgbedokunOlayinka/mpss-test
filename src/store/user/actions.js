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
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";

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
      transformed,
      config
    );

    console.log(data);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: "Your request could not be completed. Please try again"
    });
  }
};

export const userLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
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
      transformed,
      config
    );

    console.log(data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: "Your request could not be completed. Please try again",
    });
  }
};

export const userForgotPassword = ({ email }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_FORGOT_PASSWORD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    };

    const transformed = qs.stringify({
      email,
    });

    const { data } = await axios.post(
      "https://splattai.com/mspstreamsampleforgpassword.php",
      transformed,
      config
    );

    // console.log(data);
    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Password reset successful",
      description: "A new password has been sent to the provided email",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: USER_FORGOT_PASSWORD_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload: "Your request could not be completed. Please try again",
    });
  }
};
