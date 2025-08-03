import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useTheme } from "styled-components/native";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  power: number;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, power }) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          {subtitle}
        </Text>
        <Text style={[styles.power, { color: theme.colors.textPrimary }]}>
          Power: {power}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  power: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});

export default Card;
