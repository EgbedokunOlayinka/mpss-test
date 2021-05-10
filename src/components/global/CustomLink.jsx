import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Flex, Box, Link, useMediaQuery, Button, Text } from "@chakra-ui/react";

const CustomLink = ({
  href,
  children,
  text,
  setSidebarOpen,
  sidebarOpen,
  btn,
  func,
}) => {
  const [isSmallerThan768] = useMediaQuery("(max-width: 767px)");
  const router = useRouter();

  let className = children.props.className || "";
  let textClass;
  let active = undefined;
  if (router.pathname === href) {
    className = `${className} selected-icon`;
    textClass = "selected-navlink";
    active = true;
  }

  const handleClick = () => {
    isSmallerThan768 && sidebarOpen && setSidebarOpen(false);
  };

  //   return <Link href={href}>{React.cloneElement(children, { className })}</Link>;

  return (
    <NextLink href={href}>
      <Flex
        w="full"
        py={["9px", "11px"]}
        px="21px"
        className={textClass}
        onClick={() => handleClick()}
      >
        <Box h="full" mt={["2.5px", null, "1.5px"]}>
          {React.cloneElement(children, { className, active })}
        </Box>
        {btn ? (
          <Text
            className="navlink"
            _hover={{ opacity: "0.85", textTransform: "none" }}
            ml="8px"
            cursor="pointer"
            onClick={() => func()}
          >
            {text}
          </Text>
        ) : (
          <Link
            className="navlink"
            _hover={{ opacity: "0.85", textTransform: "none" }}
            ml="8px"
          >
            {text}
          </Link>
        )}
      </Flex>
    </NextLink>
  );
};

export default CustomLink;
