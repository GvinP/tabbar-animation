import React, { ReactElement, cloneElement } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from "react-native-reanimated";
import { ICON_SIZE } from "./icons/Constants";

interface TabProps {
  children: ReactElement;
  onPress: () => void;
  active: SharedValue<number>;
  index: number;
  direction: "ltr" | "rtl";
}

const styles = StyleSheet.create({});

export default ({ children, active, index, onPress, direction }: TabProps) => {
  const isActive = useDerivedValue(() => {
    return active.value === index;
  }, [active.value]);
  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(isActive.value ? ICON_SIZE : 0, { duration: 1000 }),
    };
  });
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Animated.View
        style={{
          width: ICON_SIZE,
          height: ICON_SIZE,
          direction,
        }}
      >
        <View style={StyleSheet.absoluteFill}>{children}</View>
        <Animated.View style={[style, { overflow: "hidden" }]}>
          {cloneElement(children, { active: true })}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
