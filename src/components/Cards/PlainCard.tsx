import styled from "styled-components";

import View from "../View";
import colors from "../../constants/colors";

const PlainCard = styled(View)`
  margin: 8px;
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

export default PlainCard;
