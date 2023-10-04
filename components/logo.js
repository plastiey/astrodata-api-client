import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
//import FootprintIcon from "./icons/footprint";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 35px;
  display: inline-flex;
  align-items: center;
  height: 34px;
  line-height: 20px;
  color: "_yellow";
  padding: 5px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(360deg);
  }
`;

const Logo = () => {
  return (
    (
      <Link href="/" scroll={false}>
        <LogoBox>
          <Text
            color="_yellow"
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            magneconn
          </Text>
        </LogoBox>
      </Link>
    )
  );
};

export default Logo;
