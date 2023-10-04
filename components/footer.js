import { Box, Link, Button } from "@chakra-ui/react";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="sm"
      color="_yellow"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      padding="1rem"
      zIndex="999"
    >
      <span>&copy;Magneconn | Next Space Lab | {new Date().getFullYear()}</span>
      <Link
        href="https://github.com/kenjitheman/projx.c"
        target="_blank"
        position="absolute"
        bottom="2.5"
        right="4"
      >
        <Button
          variant="ghost"
          color="_yellow"
          fontSize="2.5rem"
          leftIcon={<IoLogoGithub />}
        >
        </Button>
      </Link>
    </Box>
  );
};

export default Footer;
