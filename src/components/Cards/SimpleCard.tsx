import * as React from "react";
import styled from "styled-components";

import PlainCard from "./PlainCard";
import View from "../View";
import Text from "../Text";

type SimpleCardProps = {
  title: string;
  children: any;
};

const SimpleCard = (props: SimpleCardProps) => {
  const { title, children } = props;

  return (
    <SimpleCardWrapper>
      <View flex={1} flexDirection="column">
        <Text as="h3" style={{ margin: 0 }}>
          {title}
        </Text>
        <SimpleCardContent>{children}</SimpleCardContent>
      </View>
    </SimpleCardWrapper>
  );
};

const SimpleCardWrapper = styled(PlainCard)`
  flex: 1;
  display: flex;

  padding: 16px;
`;

const SimpleCardContent = styled(View)`
  margin-top: 16px;

  width: 100%;
`;

export default SimpleCard;
