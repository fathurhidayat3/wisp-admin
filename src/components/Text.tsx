import styled from "styled-components";

const marginMatcher = (as?: string) => {
  switch (as) {
    case "h1":
      return "12px 0";
    case "h2":
      return "10px 0";
    case "h3":
      return "8px 0";
    case "h4":
      return "7px 0";
    case "h5":
      return "5px 0";
    case "h6":
      return "4px 0";
    case "span":
    case "small":
    default:
      return "0";
  }
};

type TextProps = {
  as?: string;
  withoutSpacing?: boolean;
  align?: "left" | "center" | "right" | "justify";
  children: any;
};

const Text = styled.span`
  margin: ${(props: TextProps) => (props.as ? marginMatcher(props.as) : "0")};

  font-family: "Ubuntu";
  color: ${props => (props.color ? props.color : "black")};
  ${props =>
    props.withoutSpacing
      ? `
    margin: 0;
    padding: 0;
  `
      : null};
  text-align: ${props => (props.align ? props.align : "left")};
`;

export default Text;
