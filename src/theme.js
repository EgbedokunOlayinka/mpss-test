import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    customDark: "#293C73",
    veryDark: "#161A2E",
    accentOne: "#F29D52",
    lightOne: "#CEDEF2",
    lightTwo: "#F2D9BB",
    greyOne: "#D5D9E3",
    greyTwo: "#828693",
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
