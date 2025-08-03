import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  style,
  placeholderTextColor,
  ...props
}) => {
  const theme = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: theme.colors.secondary,
          color: theme.colors.textPrimary,
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor || theme.colors.textSecondary}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});

export default Input;
