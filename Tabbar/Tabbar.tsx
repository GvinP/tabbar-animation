import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Tab from "./Tab";
import Compass from "./icons/Compass";
import Chat from "./icons/Chat";
import Camera from "./icons/Camera";
import Bell from "./icons/Bell";
import User from "./icons/User";
import { ICON_SIZE, PADDING, SEGMENT } from "./icons/Constants";
import { useSharedValue } from "react-native-reanimated";
import Particulars from "./Particulars";

const tabs = [
  { icon: <Compass /> },
  { icon: <Chat /> },
  { icon: <Camera /> },
  { icon: <Bell /> },
  { icon: <User /> },
];
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default () => {
  const active = useSharedValue(0);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map(({ icon }, index) => {
          return (
            <View key={index} style={styles.tab}>
              <Particulars {...{ direction, active }} />
              <Tab
                onPress={() => {
                  setDirection(active.value > index ? "rtl" : "ltr");
                  active.value = index;
                }}
                {...{ active, index, direction }}
              >
                {icon}
              </Tab>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
