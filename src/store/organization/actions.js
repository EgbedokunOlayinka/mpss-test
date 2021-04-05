import {
  ADD_ORGANIZATION_SUCCESS,
  ADD_ORGANIZATION_FAIL,
  ADD_ORGANIZATION_REQUEST,
} from "./constants";
import axios from "axios";
import qs from "qs";
import { createStandaloneToast } from "@chakra-ui/react";
import capitalize from "../../utils/capitalize";

export const addOrganization = (values) => async (dispatch) => {
  try {
    const newObj = {
      name: values.organizationName,
      email: values.email,
      phoneNumber: `${values.phoneCode}${String(values.phoneNumber)}`,
      incorporationDate: `${values.month} ${values.day}, ${values.year}`,
      address: values.address,
      sector: values.sector,
      skype: values.skype,
      backgroundInfo: values.backgroundInfo,
      tags: values.tags,
      companyLogo: "empty string for now",
      contactName: values.contactName,
      contactEmail: values.contactEmail,
      contactPhoneNumber: `${values.contactPhoneCode}${String(
        values.contactPhoneNumber
      )}`,
    };

    const transformed = qs.stringify(newObj);

    // console.log(newObj);
    // console.log(transformed);

    dispatch({
      type: ADD_ORGANIZATION_REQUEST,
    });

    const config = {
      // withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        // "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://splattai.com/yinkaaddorganizationendpoints.php",
      //   "http://localhost:8080/zuri/test.php",
      transformed,
      config
    );

    // console.log(response);

    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Success!",
      description: "The Organization has been added successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      variant: "solid",
    });

    dispatch({
      type: ADD_ORGANIZATION_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    const toast = createStandaloneToast();
    // const customToast = createStandaloneToast({ theme: yourCustomTheme })
    toast({
      title: "Failed to add Organization",
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
      type: ADD_ORGANIZATION_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : "Your request could not be completed. Please try again",
    });
  }
};
