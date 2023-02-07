import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { Colors, ICON_SIZE, PADDING, SEGMENT } from "./icons/Constants";

const size = 6;
const topParticulars = [0, 1, 2];
const bottomParticulars = [0, 1];
const HEIGHT = ICON_SIZE + PADDING;

interface ParticularsProps {
  direction: "ltr" | "rtl";
  active: SharedValue<number>;
}

const Particulars: React.FC<ParticularsProps> = ({ active, direction }) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.particulars}>
        {topParticulars.map((particular) => {
          const translateX = useDerivedValue(() => {
            return active.value * SEGMENT;
          }, [active.value]);
          const style = useAnimatedStyle(() => ({
            transform: [{ translateX: active.value * SEGMENT }],
          }));
          return (
            <Animated.View
              style={[styles.particular, style]}
              key={particular}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Particulars;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  particulars: {
    height: HEIGHT,
  },
  particular: {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: Colors.primary,
  },
});
