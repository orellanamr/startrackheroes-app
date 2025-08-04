import React, { useEffect } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";
import { useGetAllSuperheroesQuery } from "../../../redux/api/superheroApi";
import Card from "../../../components/molecules/Card";
import { Screen } from "../../../components/templates/Screen";
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

  // Obtener los héroes desde el slice como respaldo
  const heroesFromSlice = useSelector(
    (state: RootState) => state.heroes.heroes
  );

  // Efecto para despachar los datos al slice
  useEffect(() => {
    if (superheroes) {
      dispatch(setHeroes(superheroes)); // Guardar los datos en el slice
    }
  }, [superheroes, dispatch]);

  const renderCard = ({ item }: { item: any }) => (
    <Card
      image={item.images.md}
      title={item.name}
      subtitle={item.biography.fullName || "Unknown"}
      powerstats={item.powerstats}
      onPress={() => navigation.navigate("HeroDetails", { hero: item })}
    />
  );

  if (isLoading)
    return (
      <Screen>
        <Text>Loading...</Text>
      </Screen>
    );

  if (error && heroesFromSlice.length === 0)
    return (
      <Screen>
        <Text>Error loading superheroes and no offline data available</Text>
      </Screen>
    );

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Superheroes
        </Text>
        <TextInput
          style={[
            styles.searchInput,
            {
              backgroundColor: theme.colors.secondary,
              color: theme.colors.textPrimary,
            },
          ]}
          placeholder="Search"
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>
      <FlatList
        data={error ? heroesFromSlice : superheroes} // Mostrar datos del slice si hay error
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
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
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  listContainer: {
    padding: 16,
  },
});

export default HomeScreen;
