import styled from "styled-components";

export type FlexDirectionType =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

type ViewProps = {
  flex?: any;
  display?: any;
  flexDirection?: FlexDirectionType;
  flexWrap?: any;
  flexJustifyContent?: any;
  flexAlignItems?: any;
};

const View = styled.div`
  flex: ${(props: ViewProps) => (props.flex ? props.flex : undefined)};
  display: ${props => (props.display ? props.display : "flex")};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "nowrap")};
  justify-content: ${props =>
    props.flexJustifyContent ? props.flexJustifyContent : "flex-start"};
  align-items: ${props =>
    props.flexAlignItems ? props.flexAlignItems : "flex-start"};
`;

export default View;
