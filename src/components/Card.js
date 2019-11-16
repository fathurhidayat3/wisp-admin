import styled from "styled-components";

import colors from "../constants/colors";

const Card = styled.div`
  display: flex;

  margin: 8px 0;
  padding: 16px 8px;

  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;

  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);
  -moz-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);
`;

export default Card;
