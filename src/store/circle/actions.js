import {
  ADD_CIRCLE_SUCCESS,
  ADD_CIRCLE_FAIL,
  ADD_CIRCLE_REQUEST,
  GET_CIRCLES_REQUEST,
  GET_CIRCLES_SUCCESS,
  GET_CIRCLES_FAIL,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";
import getToken from "../../utils/getToken";
import dayjs from "dayjs";

axios.defaults.baseURL = "https://rocky-sands-09711.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8080/smtpp";
// axios.defaults.baseURL = "https://127.0.0.1/smtpp";

// export const addOrganization = (values) => async (dispatch) => {
//   try {
//     const incDate = `${values.month} ${values.day}, ${values.year}`;

//     const newObj = {
//       name: values.organizationName,
//       email: values.email,
//       phone_number: `${values.phoneCode}${String(values.phoneNumber)}`,
//       incorporation_date: dayjs(incDate).format("YYYY-MM-DD HH-mm-ss"),
//       address: values.address,
//       sector: values.sector,
//       skype: values.skype,
//       background_info: values.backgroundInfo,
//       tags: values.tags,
//       opening_hours: values.openingHours,
//       weekly_events: values.weeklyEvents,
//       company_logo: "empty string for now",
//       // contactName: values.contactName,
//       // contact_email: values.contactEmail,
//       // contactPhoneNumber: `${values.contactPhoneCode}${String(
//       //   values.contactPhoneNumber
//       // )}`,
//     };

//     const transformed = qs.stringify(newObj);

//     console.log({ newObj });
//     // console.log(transformed);

//     dispatch({
//       type: ADD_ORGANIZATION_REQUEST,
//     });

//     const config = {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: getToken(),
//         "Access-Token": getToken(),
//       },
//     };

//     const { data } = await axios.post("/mspstreamaddorg.php", newObj, config);

//     console.log({ data });

//     const toast = createStandaloneToast();
//     toast({
//       title: "Success!",
//       description: "The Organization has been added successfully",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//       variant: "solid",
//     });

//     dispatch({
//       type: ADD_ORGANIZATION_SUCCESS,
//       payload: data.message,
//     });
//   } catch (err) {
//     const toast = createStandaloneToast();
//     toast({
//       title: "Failed to add Organization",
//       description:
//         err.response && err.response.data.message
//           ? capitalize(err.response.data.message)
//           : "Your request could not be completed. Please try again",
//       status: "error",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//       variant: "solid",
//     });

//     dispatch({
//       type: ADD_ORGANIZATION_FAIL,
//       payload:
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : "Your request could not be completed. Please try again",
//     });
//   }
// };

export const getAllCircles = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CIRCLES_REQUEST,
    });

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
        "Access-Token": getToken(),
      },
    };

    const { data } = await axios.get("/mspstreamgetcircles.php", config);

    // data.data.forEach((org) => {
    //   org.tags = JSON.parse(org.tags);
    //   org.weekly_events = JSON.parse(org.weekly_events);
    //   org.opening_hours = JSON.parse(org.opening_hours);
    // });

    console.log({ circles: data.data });

    dispatch({
      type: GET_CIRCLES_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    const toast = createStandaloneToast();
    toast({
      title: "Failed to get circles",
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
      type: GET_CIRCLES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};

export const getAllCirclesFull = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CIRCLES_REQUEST,
    });

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
        "Access-Token": getToken(),
      },
    };

    const { data } = await axios.get("/mspstreamgetcircles.php", config);

    // data.data.forEach((org) => {
    //   org.tags = JSON.parse(org.tags);
    //   org.weekly_events = JSON.parse(org.weekly_events);
    //   org.opening_hours = JSON.parse(org.opening_hours);
    // });

    console.log({ circles: data.data });

    dispatch({
      type: GET_CIRCLES_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    const toast = createStandaloneToast();
    toast({
      title: "Failed to get circles",
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
      type: GET_CIRCLES_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};
