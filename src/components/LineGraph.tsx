import * as React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

import Text from "./Text";
import {
  graphInitialData,
  graphOptions,
  getGraphData
} from "../utils/chartUtils";

type LineGraphProps = {
  streamData: string | number;
  title: string;
  height?: number;
  width?: number;
  options: any;
};

const LineGraph = (props: LineGraphProps) => {
  const [graphData, setGraphData] = React.useState(graphInitialData);

  React.useEffect(() => {
    setGraphData((oldData: any): any =>
      getGraphData(props.streamData, oldData)
    );
  }, [props.streamData]);

  return (
    <GraphContainer>
      <Text as="h4">{props.title}</Text>
      <Line
        height={props.height}
        width={props.width}
        // @ts-ignore
        data={graphData}
        options={{ ...graphOptions, ...props.options }}
      />
    </GraphContainer>
  );
};

const GraphContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 8px;
`;

export default LineGraph;
