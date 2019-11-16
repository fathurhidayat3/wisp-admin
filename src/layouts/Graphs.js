import React from "react";
import { useObject } from "react-firebase-hooks/database";

import RenderHandler from "../components/RenderHandler";
import View from "../components/View";
import LineGraph from "../components/LineGraph";
import Card from "../components/Card";
import Text from "../components/Text";

const Graphs = props => {
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
          flexDirection="column"
          flexAlignItems={!isDesktopOrLaptop && "center"}
        >
          <Text as="h3">Grafik Realtime</Text>
          <Card>
            <View
              flex={1}
              flexDirection={!isDesktopOrLaptop && "column"}
              flexAlignItems="center"
            >
              <LineGraph
                streamData={voltage && voltage.val()}
                title="Voltage"
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
              <LineGraph
                streamData={amphere && amphere.val()}
                title="Amphere"
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
              <LineGraph
                streamData={power}
                title="Power"
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
            </View>
          </Card>
        </View>
      )}
    </RenderHandler>
  );
};

export default Graphs;
