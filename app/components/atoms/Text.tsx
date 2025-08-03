import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "styled-components/native";

interface TextProps extends RNTextProps {
  variant?: "title" | "subtitle" | "body";
}

const Text: React.FC<TextProps> = ({ variant = "body", style, ...props }) => {
  const theme = useTheme();

  const getVariantStyle = () => {
    switch (variant) {
      case "title":
        return styles.title;
      case "subtitle":
        return styles.subtitle;
      default:
        return styles.body;
    }
  };

  return <RNText style={[getVariantStyle(), style]} {...props} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "#A1A1A1",
  },
  body: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#FFFFFF",
  },
});

export default Text;
