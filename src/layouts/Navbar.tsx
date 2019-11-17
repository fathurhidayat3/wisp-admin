import * as React from "react";
import styled from "styled-components";

import RenderHandler from "../components/RenderHandler";
import Text from "../components/Typography/Text";
import colors from "../constants/colors";

type NavbarProps = { firebase: any };

const Navbar = (props: NavbarProps) => {
  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <TopNavbar isDesktopOrLaptop={isDesktopOrLaptop}>
          <Text
            color={colors.navy}
            as={!isDesktopOrLaptop ? "h4" : "h3"}
            align={!isDesktopOrLaptop ? "center" : undefined}
            withoutSpacing
          >
            Wisp Admin
          </Text>
        </TopNavbar>
      )}
    </RenderHandler>
  );
};

type TopNavbarProps = {
  isDesktopOrLaptop: boolean;
};

const TopNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${(props: TopNavbarProps) =>
    props.isDesktopOrLaptop ? `8px 20px;` : `16px 20px;`};

  min-height: ${props => (props.isDesktopOrLaptop ? `50px;` : `60px;`)};
  width: calc(100vw - 40px);

  background-color: ${colors.white};
  box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);
  -moz-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);

  z-index: 10;
`;

export default Navbar;
