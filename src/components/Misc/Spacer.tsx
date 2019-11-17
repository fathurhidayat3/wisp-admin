import styled from "styled-components";

import colors from "../../constants/colors";

type SpacerProps = {
  backgroundColor?: string;
};

const Spacer = styled.div`
  margin: 1rem 0;

  height: 1px;
  width: 100%;

  background-color: ${(props: SpacerProps) =>
    props.backgroundColor ? props.backgroundColor : colors.darkGray};
`;

export default Spacer;
