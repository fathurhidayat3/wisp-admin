import styled from "styled-components";

const FormControl = styled.div`
  display: flex;
  ${props =>
    props.direction === "row"
      ? `
    align-items: center;
    flex-direction: row;
  `
      : `flex-direction:column;`};

  margin-bottom: 12px;
`;

export default FormControl;
