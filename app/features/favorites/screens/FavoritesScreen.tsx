import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { useSelector } from "react-redux";
import Card from "../../../components/molecules/Card";
import { Screen } from "../../../components/templates/Screen";
import { useNavigation } from "@react-navigation/native";

const FavoritesScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const favorites = useSelector(
    (state: any) => state.favorites?.favorites || []
  );

  const renderFavoriteItem = ({ item }: any) => (
    <Card
      image={item.images.md}
      title={item.name}
      subtitle={item.biography.fullName}
      powerstats={item.powerstats}
      onPress={() => navigation.navigate("HeroDetails", { hero: item })}
    />
  );

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Favorites
        </Text>
      </View>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFavoriteItem}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, { color: theme.colors.textPrimary }]}>
            No favorites yet.
          </Text>
        </View>
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
  listContainer: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default FavoritesScreen;
