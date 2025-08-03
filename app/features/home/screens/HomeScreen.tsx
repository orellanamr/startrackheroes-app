import React from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { Screen } from "../../../components/templates/Screen";
import { useTheme } from "styled-components/native";
//import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const theme = useTheme();
  //const navigation = useNavigation();

  const renderCard = ({ item }: { item: any }) => (
    <View
      style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}
    >
      <Text style={{ color: theme.colors.textPrimary }}>{item.name}</Text>
      <Text style={{ color: theme.colors.textSecondary }}>{item.realName}</Text>
    </View>
  );

  return (
    // <Screen
    //   statusBarProps={{
    //     showBackButton: true,
    //     title: <Text style={{ marginTop: 8 }}>Algo</Text>,
    //   }}
    // >
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
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
      <FlatList
        data={[]}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
    // </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins_400Regular",
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default HomeScreen;
