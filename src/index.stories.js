import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonStories from "./stories/ButtonStories";

storiesOf("Components", module)
  .add("Typography", () => null)
  .add("Button", () => <ButtonStories />);
