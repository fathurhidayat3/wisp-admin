import React from "react";

import Button from "../components/Button";
import View from "../components/View";
import Text from "../components/Text";
import Spacer from "../components/Spacer";

const ButtonStories = () => {
  return (
    <>
      <View flexDirection="column">
        <Text as="h3">Normal Button</Text>
        <View>
          <Button>Default</Button>
          <Button variant="navy">Navy</Button>
          <Button variant="blue">Blue</Button>
          <Button variant="dark-green">Dark Green</Button>
          <Button variant="green">Green</Button>
          <Button variant="red">Red</Button>
          <Button variant="orange">Orange</Button>
          <Button variant="yellow">Yellow</Button>
          <Button variant="gray">Gray</Button>
        </View>
      </View>
      <Spacer />
      <View flexDirection="column">
        <Text as="h3">Ghost Button</Text>
        <View>
          <Button ghost>Default</Button>
          <Button variant="navy" ghost>
            Navy
          </Button>
          <Button variant="blue" ghost>
            Blue
          </Button>
          <Button variant="dark-green" ghost>
            Dark Green
          </Button>
          <Button variant="green" ghost>
            Green
          </Button>
          <Button variant="red" ghost>
            Red
          </Button>
          <Button variant="orange" ghost>
            Orange
          </Button>
          <Button variant="yellow" ghost>
            Yellow
          </Button>
          <Button variant="gray" ghost>
            Gray
          </Button>
        </View>
      </View>
      <Spacer />
      <View flexDirection="column">
        <Text as="h3">Size</Text>
        <View>
          <Button size="small">Small</Button>
          <Button>Medium</Button>
          <Button size="large">Large</Button>
        </View>
      </View>
      <Spacer />
      <View flexDirection="column">
        <Text as="h3">Additional Props</Text>
        <View>
          <Button rounded>Rounded</Button>
          <Button disabled>Disabled</Button>
        </View>
        <Button block>Block</Button>
      </View>
    </>
  );
};

export default ButtonStories;
