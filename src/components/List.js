import styled from "styled-components";

import colors from "../constants/colors";

const ListGroup = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListGroupItem = styled.li`
  list-style: none;
  position: relative;

  margin: 0;
  padding: 12px 16px;

  font-size: 0.9rem;
  color: ${colors.black};

  ${props =>
    props.active
      ? `
      background-color: ${colors.darkGray}
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;

      font-weight: bold;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 4px;

        background-color: ${colors.navy};
      }
    `
      : `
      background-color: ${colors.gray}
    `}

  &:hover {
    background-color: ${colors.darkGray};
  }
`;

const ListGroupItemText = styled.li`
  list-style: none;

  margin: 0;
  padding: 12px 16px;

  background-color: ${colors.black};

  font-size: 0.7rem;
  color: ${colors.gray};
`;

export { ListGroup, ListGroupItem, ListGroupItemText };
