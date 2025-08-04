import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useGetAllSuperheroesQuery } from "../../../redux/api/superheroApi";
import Card from "../../../components/molecules/Card";
import SkeletonCard from "../components/SkeletonCard";
import { Screen } from "../../../components/templates/Screen";
import SearchBar from "../../../components/molecules/SearchBar";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setHeroes } from "../../../redux/slices/heroesSlice";
import { RootState } from "../../../redux/store";

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    data: superheroes,
    isLoading,
    error,
  } = useGetAllSuperheroesQuery(undefined);

  const heroesFromSlice = useSelector(
    (state: RootState) => state.heroes.heroes
  );

  const [searchText, setSearchText] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(heroesFromSlice);

  useEffect(() => {
    if (superheroes) {
      dispatch(setHeroes(superheroes));
    }
  }, [superheroes, dispatch]);

  useEffect(() => {
    const filtered = heroesFromSlice.filter((hero) => {
      const nameMatch = hero.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const fullNameMatch = hero.biography.fullName
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return nameMatch || fullNameMatch;
    });
    setFilteredHeroes(filtered);
  }, [searchText, heroesFromSlice]);

  const renderCard = ({ item }: { item: any }) => (
    <Card
      heroId={item.id}
      image={item.images.md}
      title={item.name}
      subtitle={item.biography.fullName || "Unknown"}
      powerstats={item.powerstats}
      onPress={() => navigation.navigate("HeroDetails", { hero: item })}
    />
  );

  const renderSkeletonCard = () => <SkeletonCard />;

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Superheroes
        </Text>
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onClear={() => setSearchText("")}
        />
      </View>
      {isLoading ? (
        <FlatList
          data={Array(4).fill(null)}
          renderItem={renderSkeletonCard}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : filteredHeroes.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <FontAwesome5
            name="sad-cry"
            size={40}
            color={theme.colors.textSecondary}
          />
          <Text
            style={[
              styles.noResultsText,
              { color: theme.colors.textSecondary },
            ]}
          >
            No heroes found matching your search.
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredHeroes}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins_600regular",
    fontWeight: "bold",
    marginBottom: 8,
  },
  noResultsContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
  listContainer: {
    padding: 16,
  },
});

export default HomeScreen;
