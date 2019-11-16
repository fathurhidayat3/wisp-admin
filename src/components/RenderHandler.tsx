import { useMediaQuery } from "react-responsive";

type RenderHandlerProps = {
  children: (isDesktopOrLaptop: boolean) => any;
};

const RenderHandler = (props: RenderHandlerProps) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });

  return props.children(isDesktopOrLaptop);
};

export default RenderHandler;
