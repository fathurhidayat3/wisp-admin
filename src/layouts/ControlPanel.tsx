import * as React from "react";
import { useObject } from "react-firebase-hooks/database";

import RenderHandler from "../components/RenderHandler";
import SimpleCard from "../components/Cards/SimpleCard";
import View from "../components/Layouts/View";
import Button from "../components/Buttons/Button";

type ControlPanelProps = {
  firebase: any;
};

const ControlPanel = (props: ControlPanelProps) => {
  const [pir1] = useObject(props.firebase.database().ref("PIR1"));
  const [pir2] = useObject(props.firebase.database().ref("PIR2"));
  const [pir3] = useObject(props.firebase.database().ref("PIR3"));
  const [pir4] = useObject(props.firebase.database().ref("PIR4"));
  const [relay1] = useObject(props.firebase.database().ref("R1"));
  const [relay2] = useObject(props.firebase.database().ref("R2"));
  const [relay3] = useObject(props.firebase.database().ref("R3"));
  const [relay4] = useObject(props.firebase.database().ref("R4"));
  const [relay5] = useObject(props.firebase.database().ref("R5"));
  const [relay6] = useObject(props.firebase.database().ref("R6"));
  const [relay7] = useObject(props.firebase.database().ref("R7"));

  const clickRelay = (ref: string, relayState: any) => {
    let relayRef = props.firebase.database().ref(ref);

    const currentRelay =
      relayState && relayState.val() && relayState.val().status;
    const status = currentRelay === "OFF" ? "ON" : "OFF";
    relayRef.update({ status });
  };

  const mapPir = [
    { pirState: pir1, dataRef: "PIR1", text: "Lamp 1" },
    { pirState: pir2, dataRef: "PIR2", text: "Lamp 2" },
    { pirState: pir3, dataRef: "PIR3", text: "Lamp 3" },
    { pirState: pir4, dataRef: "PIR4", text: "Lamp 4" }
  ];

  const mapRelay = [
    { relayState: relay1, dataRef: "R1", text: "Control 1" },
    { relayState: relay2, dataRef: "R2", text: "Control 2" },
    { relayState: relay3, dataRef: "R3", text: "Control 3" },
    { relayState: relay4, dataRef: "R4", text: "Control 4" },
    { relayState: relay5, dataRef: "R5", text: "Control 5" },
    { relayState: relay6, dataRef: "R6", text: "Control 6" },
    { relayState: relay7, dataRef: "R7", text: "Control 7" }
  ];

  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <View
          flex={1}
          flexDirection={!isDesktopOrLaptop ? "column" : "row"}
          flexAlignItems={!isDesktopOrLaptop && "center"}
          style={{ margin: "0 -4px" }}
        >
          <SimpleCard title="Indicator">
            <View
              flexWrap="wrap"
              flexJustifyContent={!isDesktopOrLaptop && "center"}
              style={{ margin: "0 -4px" }}
            >
              {mapPir.map(pirItem => {
                return (
                  <Button
                    variant={
                      pirItem.pirState &&
                      pirItem.pirState.val() &&
                      pirItem.pirState.val().status === "1"
                        ? "green"
                        : "red"
                    }
                    rounded
                    key={pirItem.dataRef}
                  >
                    {pirItem.text}
                  </Button>
                );
              })}
            </View>
          </SimpleCard>

          <SimpleCard title="Control">
            <View
              flexWrap="wrap"
              flexJustifyContent={!isDesktopOrLaptop && "center"}
              style={{ margin: "0 -4px" }}
            >
              {mapRelay.map(relayItem => {
                return (
                  <Button
                    variant={
                      relayItem.relayState &&
                      relayItem.relayState.val() &&
                      relayItem.relayState.val().status === "ON"
                        ? "green"
                        : "red"
                    }
                    size="medium"
                    onClick={() =>
                      clickRelay(relayItem.dataRef, relayItem.relayState)
                    }
                    key={relayItem.dataRef}
                  >
                    {relayItem.text}
                  </Button>
                );
              })}
            </View>
          </SimpleCard>
        </View>
      )}
    </RenderHandler>
  );
};

export default ControlPanel;
