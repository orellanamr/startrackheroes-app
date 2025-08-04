import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Screen } from "../../../components/templates/Screen";
import { calculateAveragePower } from "../../../utils/calculateAveragePower";
import { DefaultTheme, useTheme } from "styled-components/native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeStackParams } from "../../../navigation/HomeStack";
import powerIcon from "../../../assets/images/Card/powerIcon.png";
import favoriteIcon from "../../../assets/images/NavigationBottom/favoriteIcon.png";
import favoriteIconFilled from "../../../assets/images/NavigationBottom/favoriteIconFilled.png";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../../redux/slices/favoritesSlice";

const HeroDetailsScreen = () => {
  const theme: DefaultTheme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorites.favorites);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<HomeStackParams, "HeroDetails">>();
  const { hero } = route.params;

  const isFavorite = favorites.some(
    (favoriteHero: any) => favoriteHero.name === hero.name
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      const favoriteHero = favorites.find(
        (favoriteHero: any) => favoriteHero.name === hero.name
      );
      if (favoriteHero) dispatch(removeFavorite(favoriteHero.id));
    } else {
      dispatch(
        addFavorite({
          id: Math.random(), // Generar un ID único temporal
          name: hero.name,
          images: hero.images,
          biography: hero.biography,
          powerstats: hero.powerstats,
        })
      );
    }
  };

  const averagePower = calculateAveragePower(hero.powerstats);

  return (
    <Screen>
      <Image source={{ uri: hero.images.md }} style={styles.heroImage} />
      <TouchableOpacity
        style={[
          styles.backIconContainer,
          { backgroundColor: theme.colors.accent },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={theme.colors.textPrimary}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.favoriteIconContainer,
          { backgroundColor: theme.colors.accent },
        ]}
      >
        <TouchableOpacity onPress={toggleFavorite}>
          <Image
            source={isFavorite ? favoriteIconFilled : favoriteIcon} // Cambiar ícono según el estado
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.heroName, { color: theme.colors.textPrimary }]}>
          <Text style={{ fontWeight: "bold" }}>{hero.name}</Text>
        </Text>
        <Text style={[styles.heroDetail, { color: theme.colors.textPrimary }]}>
          Real Name:{" "}
          <Text style={{ fontWeight: "bold" }}>{hero.biography.fullName}</Text>
        </Text>
        <Text style={[styles.heroDetail, { color: theme.colors.textPrimary }]}>
          Alter egos:{" "}
          <Text style={{ fontWeight: "bold" }}>{hero.biography.alterEgos}</Text>
        </Text>
        <View style={styles.statsContainer}>
          {Object.entries(hero.powerstats).map(([stat, value], index) => (
            <React.Fragment key={stat}>
              <View style={styles.statRow}>
                <View style={styles.statLabelContainer}>
                  <Text
                    style={[
                      styles.statLabel,
                      { color: theme.colors.textPrimary },
                    ]}
                  >
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}
                  </Text>
                </View>
                <View style={styles.statValueContainer}>
                  <Text
                    style={[
                      styles.statValue,
                      { color: theme.colors.textPrimary },
                    ]}
                  >
                    {value}
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />
            </React.Fragment>
          ))}
        </View>
        <View style={styles.powerContainer}>
          <Image source={powerIcon} style={styles.powerIcon} />
          <Text
            style={[styles.averagePower, { color: theme.colors.textPrimary }]}
          >
            <Text style={{ fontWeight: "bold" }}>
              Avg. Score: {averagePower}
            </Text>
            <Text>/100</Text>
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    width: "100%",
    height: "45%",
    resizeMode: "cover",
  },
  headerIconsContainer: {
    position: "absolute",
    top: 40,
    left: 16,
    flexDirection: "row",
    zIndex: 1,
  },
  backIconContainer: {
    position: "absolute",
    top: 80,
    left: 16,
    width: 48,
    height: 48,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIconContainer: {
    position: "absolute",
    top: 80,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    padding: 16,
  },
  heroName: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
  },
  heroDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
  statsContainer: {
    marginTop: 16,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },
  statLabelContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  statValueContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
  },
  statValue: {
    fontSize: 12,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    width: "100%",
    marginVertical: 4,
  },
  powerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  powerIcon: {
    width: 18,
    height: 18,
  },
  averagePower: {
    //  fontWeight: "bold",
    marginTop: 8,
    marginLeft: 8,
  },
});

export default HeroDetailsScreen;
