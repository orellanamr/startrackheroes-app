import React from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";
import { useGetAllSuperheroesQuery } from "../../../redux/api/superheroApi";
import Card from "../../../components/molecules/Card";
import { Screen } from "../../../components/templates/Screen";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const {
    data: superheroes,
    isLoading,
    error,
  } = useGetAllSuperheroesQuery(undefined);

  const renderCard = ({ item }: { item: any }) => (
    <Card
      image={item.images.md}
      title={item.name}
      subtitle={item.biography.fullName}
      powerstats={item.powerstats}
      onPress={() => navigation.navigate("HeroDetails", { hero: item })}
    />
  );
  //console.error("error", error);
  if (isLoading)
    return (
      <Screen>
        <Text>Loading...</Text>
      </Screen>
    );
  if (error)
    // TO DO: Get superheroes from Redux store or show a fallback
    return (
      <Screen>
        <Text>Error loading superheroes</Text>
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
        data={superheroes}
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
