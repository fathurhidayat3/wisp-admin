import React from "react";
import { useMediaQuery } from "react-responsive";

const RenderHandler = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });

  return props.children(isDesktopOrLaptop);
};

export default RenderHandler;
