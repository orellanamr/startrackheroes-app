import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CircularButtonProps {
  onPress: () => void;
  style?: object;
  icon: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  onPress,
  style,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.icon}>{icon}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default CircularButton;
