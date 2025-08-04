import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import powerIcon from "../../assets/images/Card/powerIcon.png";
import favoriteIcon from "../../assets/images/NavigationBottom/favoriteIcon.png";
import favoriteIconFilled from "../../assets/images/NavigationBottom/favoriteIconFilled.png";
import { useTheme } from "styled-components/native";
import { calculateAveragePower } from "../../utils/calculateAveragePower";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/slices/favoritesSlice";

export interface CardProps {
  heroId: number;
  image: string;
  title: string;
  subtitle: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({
  heroId,
  image,
  title,
  subtitle,
  powerstats,
  onPress,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.favorites);

  const isFavorite = favorites.some((hero: any) => hero.name === title);

  const toggleFavorite = () => {
    if (isFavorite) {
      const hero = favorites.find((hero: any) => hero.name === title);
      if (hero) dispatch(removeFavorite(hero.id));
    } else {
      dispatch(
        addFavorite({
          id: heroId,
          name: title,
          images: { md: image },
          biography: { fullName: subtitle, alterEgos: "" },
          powerstats,
        })
      );
    }
  };

  const averagePower = calculateAveragePower(powerstats);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.card]}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity
          style={[
            styles.favoriteIconContainer,
            { backgroundColor: theme.colors?.accent },
          ]}
          onPress={toggleFavorite}
        >
          <Image
            source={isFavorite ? favoriteIconFilled : favoriteIcon} // Cambiar ícono según el estado
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors?.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors?.textSecondary }]}>
          {subtitle}
        </Text>
        <View style={styles.powerContainer}>
          <Image source={powerIcon} style={styles.powerIcon} />
          <Text style={[styles.power, { color: theme.colors?.textPrimary }]}>
            <Text style={{ fontWeight: "bold" }}>{averagePower}</Text>
            <Text>/100</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    position: "relative",
    backgroundColor: "rgba(54, 44, 106, 0.65)",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 179,
    height: 186,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },
  powerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  power: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    marginLeft: 4,
  },
  powerIcon: {
    width: 18,
    height: 18,
  },
  favoriteIconContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 48,
    height: 48,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    width: 24,
    height: 24,
    tintColor: "#ffffff",
  },
});

export default Card;
