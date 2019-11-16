import styled from "styled-components";

const View = styled.div`
  flex: ${props => (props.flex ? props.flex : undefined)};
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
