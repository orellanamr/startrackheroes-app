import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";

const FavoritesScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={{ color: theme.colors.textPrimary }}>Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
