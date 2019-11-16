import React from "react";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "react-feather";

import { ListGroup, ListGroupItem } from "../components/List";
import UserInfo from "../components/UserInfo";
import colors from "../constants/colors";

const Sidebar = () => {
  const [show, setShow] = React.useState(true);

  return (
    <SidebarWrapper show={show}>
      <SidebarContainer show={show}>
        <ListGroup>
          <UserInfo
            profile={{
              username: "Piyuw Piyuw",
              avatar: "https://api.adorable.io/avatars/285/abott@adorable.png"
            }}
          />

          <ListGroupItem>Dashboard</ListGroupItem>
          <ListGroupItem active>Sensor</ListGroupItem>
          <ListGroupItem>User Log</ListGroupItem>
          <ListGroupItem>User</ListGroupItem>
        </ListGroup>
      </SidebarContainer>
      <SidebarTool>
        <SidebarToggler onClick={() => setShow(!show)}>
          {show ? (
            <ChevronLeft size="24" color={colors.navy} />
          ) : (
            <ChevronRight size="24" color={colors.navy} />
          )}
        </SidebarToggler>
      </SidebarTool>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 61px;

  width: ${props => (props.show ? "250px" : "40px")};

  background-color: ${colors.gray};
`;

const SidebarContainer = styled.div`
  flex-direction: column;

  height: calc(100vh - 105px);

  overflow: auto;

  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

const SidebarTool = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;

  height: 40px;
  width: inherit;

  background-color: ${colors.navy};
  border-top-right-radius: 9px;
`;

const SidebarToggler = styled.button`
  height: 40px;
  width: 40px;

  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-top-right-radius: 3px;

  outline: none;
`;

export default Sidebar;
