import * as React from "react";
import { Line } from "react-chartjs-2";

import {
  graphInitialData,
  graphOptions,
  getGraphData
} from "../utils/chartUtils";

type LineGraphProps = {
  streamData: string | number;
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
    <Line
      height={props.height}
      width={props.width}
      // @ts-ignore
      data={graphData}
      options={{ ...graphOptions, ...props.options }}
    />
  );
};

export default LineGraph;
