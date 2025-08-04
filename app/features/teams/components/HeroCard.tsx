import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

interface HeroCardProps {
  hero: {
    name: string;
    affiliation: string;
    score: number;
    image: string;
  };
  onAdd: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onAdd }) => {
  const theme = useTheme();

  return (
    <View style={styles.card}>
      <Image source={{ uri: hero.image }} style={styles.heroImage} />
      <View style={styles.infoContainer}>
        <Text style={[styles.heroName, { color: theme.colors.textPrimary }]}>
          {hero.name}
        </Text>
        <Text
          style={[
            styles.heroAffiliation,
            { color: theme.colors.textSecondary },
          ]}
        >
          {hero.affiliation}
        </Text>
        <Text style={[styles.heroScore, { color: theme.colors.textSecondary }]}>
          {hero.score} / 100
        </Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={onAdd}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#362C6A",
    marginBottom: 16,
  },
  heroImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  heroName: {
    fontSize: 16,
    fontFamily: "Poppins_600regular",
    marginBottom: 4,
  },
  heroAffiliation: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },
  heroScore: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HeroCard;
