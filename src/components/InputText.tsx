import styled from "styled-components";

const InputText = styled.input`
  padding: 0 8px;
  height: 27px;

  border: 1px solid #95afc0;
  border-radius: 3px;

  outline: none;

  &:disabled {
    background: #95afc0;

    color: #535c68;
  }
`;

export default InputText;
