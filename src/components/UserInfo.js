import React from "react";
import styled from "styled-components";

import View from "./View";
import Spacer from "./Spacer";
import Text from "./Text";
import colors from "../constants/colors";

const UserInfo = props => {
  return (
    <>
      <UserInfoWrapper>
        <Avatar src={props.profile.avatar} />
        <UserInfoContent>
          <Text as="small">Hello, </Text>
          <Text as="h4" style={{ marginTop: 2 }}>
            {props.profile.username}
          </Text>
        </UserInfoContent>
      </UserInfoWrapper>

      <View style={{ margin: "8px 0", padding: "0 16px" }}>
        <Spacer backgroundColor={colors.navy} style={{ margin: 0 }} />
      </View>
    </>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  padding: 16px;
`;

const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: -8px;
  padding-left: 12px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;

  border-radius: 25px;
`;

export default UserInfo;
