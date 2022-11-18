import { Canvas, Fill } from "@shopify/react-native-skia";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { version } from 'canvaskit-wasm/package.json';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <View>

      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <Canvas style={{ height: 200 }}>
        <Fill color="black" />
      </Canvas>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "black" },
});

export default MyButton;
