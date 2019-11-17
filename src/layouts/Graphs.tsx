import * as React from "react";
import { useObject } from "react-firebase-hooks/database";

import RenderHandler from "../components/RenderHandler";
import SimpleCard from "../components/Cards/SimpleCard";
import LineGraph from "../components/LineGraph";
import View from "../components/View";

type GraphsProps = {
  firebase: any;
};

const Graphs = (props: GraphsProps) => {
  const [voltage] = useObject(props.firebase.database().ref("aVolt"));
  const [amphere] = useObject(props.firebase.database().ref("aAmp"));
  const [power, setPower] = React.useState();
  React.useEffect(() => {
    const currentVoltageData = voltage && voltage.val();
    const currentAmphereData = amphere && amphere.val();

    setPower(currentVoltageData * currentAmphereData);
  }, [voltage, amphere]);

  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <View
          flex={1}
          flexDirection={!isDesktopOrLaptop ? "column" : "row"}
          flexAlignItems={!isDesktopOrLaptop && "center"}
          style={{ margin: "0 -4px" }}
        >
          <SimpleCard title="Realtime Graph">
            <LineGraph
              streamData={voltage && voltage.val()}
              height={250}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 230,
                        stepSize: 10
                      }
                    }
                  ]
                }
              }}
            />
          </SimpleCard>

          <SimpleCard title="Realtime Graph">
            <LineGraph
              streamData={amphere && amphere.val()}
              height={250}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 1.5,
                        stepSize: 0.15
                      }
                    }
                  ]
                }
              }}
            />
          </SimpleCard>

          <SimpleCard title="Realtime Graph">
            <LineGraph
              streamData={power}
              height={250}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 345,
                        stepSize: 15
                      }
                    }
                  ]
                }
              }}
            />
          </SimpleCard>
        </View>
      )}
    </RenderHandler>
  );
};

export default Graphs;
