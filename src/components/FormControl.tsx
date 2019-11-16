import styled from "styled-components";

import { FlexDirectionType } from "./View";

type FormControlProps = {
  direction?: FlexDirectionType;
};

const FormControl = styled.div`
  display: flex;
  ${(props: FormControlProps) =>
    props.direction === "row"
      ? `
    align-items: center;
    flex-direction: row;
  `
      : `flex-direction:column;`};

  margin-bottom: 12px;
`;

export default FormControl;
