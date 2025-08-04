import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import powerIcon from "../../../assets/images/Card/powerIcon.png";
import CircularButton from "../../../components/atoms/CircularButton";
import { calculateAveragePower } from "../../../utils/calculateAveragePower"; // Importar la función

interface HeroCardProps {
  hero: {
    name: string;
    affiliation: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    image: string;
  };
  onAdd: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onAdd }) => {
  const theme = useTheme();

  // Calcular el promedio de poder usando la función
  const averagePower = calculateAveragePower(hero.powerstats);

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
        <View style={styles.powerContainer}>
          <Image source={powerIcon} style={styles.powerIcon} />
          <Text style={[styles.power, { color: theme.colors?.textPrimary }]}>
            <Text style={{ fontWeight: "bold" }}>{averagePower}</Text>
            <Text>/100</Text>
          </Text>
        </View>
      </View>

      <CircularButton
        onPress={onAdd}
        style={styles.addButton}
        icon={<Text style={styles.addButtonText}>+</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 4,
  },
  heroImage: {
    width: 54,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  heroName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  heroAffiliation: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },
  powerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  powerIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  power: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 32,
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
