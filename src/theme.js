import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    // customDark: "#27459C",
    customDark: "#27459C",
    veryDark: "#161A2E",
    accentOne: "#F29D52",
    accentTwo: "#219653",
    accentTwoLight: "#EAFEF2",
    accentThree: "#9B51E0",
    accentThreeLight: "#FAEFFE",
    lightOne: "#CEDEF2",
    lightTwo: "#F2D9BB",
    greyOne: "#D5D9E3",
    greyTwo: "#7A7E89",
    BGD: "#F5F8FE",
    tab: {
      100: "#27459c",
      200: "#27459c",
      300: "#27459c",
      400: "#27459c",
      500: "#27459c",
      600: "#27459c",
      700: "#27459c",
      800: "#27459c",
      900: "#27459c",
    },
  },
  fonts: {
    body: "'Quicksand', sans-serif",
  },
  textStyles: {
    h1: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "64px",
      lineHeight: "120%",
    },
    h2: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: "120%",
    },
    h3: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "120%",
    },
    h4: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "24px",
      lineHeight: "120%",
    },
    p1Bold: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "150%",
    },
    p1Regular: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "150%",
    },
    p2Bold: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "150%",
    },
    p2Regular: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "150%",
    },
    p3Bold: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "150%",
    },
    p3Regular: {
      fontFamily: "Quicksand, sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "150%",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
