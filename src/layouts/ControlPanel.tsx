import * as React from "react";
import { useObject } from "react-firebase-hooks/database";

import RenderHandler from "../components/RenderHandler";
import View from "../components/View";
import Text from "../components/Text";
import Button from "../components/Button";

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
    { pirState: pir1, dataRef: "PIR1", text: "PIR 1" },
    { pirState: pir2, dataRef: "PIR2", text: "PIR 2" },
    { pirState: pir3, dataRef: "PIR3", text: "PIR 3" },
    { pirState: pir4, dataRef: "PIR4", text: "PIR 4" }
  ];

  const mapRelay = [
    { relayState: relay1, dataRef: "R1", text: "Relay 1" },
    { relayState: relay2, dataRef: "R2", text: "Relay 2" },
    { relayState: relay3, dataRef: "R3", text: "Relay 3" },
    { relayState: relay4, dataRef: "R4", text: "Relay 4" },
    { relayState: relay5, dataRef: "R5", text: "Relay 5" },
    { relayState: relay6, dataRef: "R6", text: "Relay 6" },
    { relayState: relay7, dataRef: "R7", text: "Relay 7" }
  ];

  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <View
          flexDirection={!isDesktopOrLaptop ? "column" : "row"}
          flexAlignItems={!isDesktopOrLaptop && "center"}
        >
          <View
            flex={0.55}
            flexDirection="column"
            flexAlignItems={!isDesktopOrLaptop && "center"}
          >
            <Text as="h3">Indikator PIR</Text>

            <View
              flexWrap="wrap"
              flexJustifyContent={!isDesktopOrLaptop && "center"}
              style={{ margin: "auto -4px" }}
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
          </View>

          <View
            flex={1}
            flexDirection="column"
            flexAlignItems={!isDesktopOrLaptop && "center"}
          >
            <Text as="h3">Kontrol Relay</Text>

            <View
              flexWrap="wrap"
              flexJustifyContent={!isDesktopOrLaptop && "center"}
              style={{ margin: "auto -4px" }}
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
          </View>
        </View>
      )}
    </RenderHandler>
  );
};

export default ControlPanel;
