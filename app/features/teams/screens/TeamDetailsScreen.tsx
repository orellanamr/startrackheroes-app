import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import Entypo from "@expo/vector-icons/Entypo";
import { RouteProp, useRoute } from "@react-navigation/native";
import { TeamsStackParams } from "../../../navigation/TeamsStack";
import { useNavigation } from "@react-navigation/native";
import { useGetAllSuperheroesQuery } from "../../../redux/api/superheroApi";
import HeroCard from "../components/HeroCard";

const TeamDetailsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<TeamsStackParams, "TeamDetails">>();
  const { teamName } = route.params;
  const [isModalVisible, setModalVisible] = useState(false);

  const { data: heroes = [], isLoading } = useGetAllSuperheroesQuery();

  const handleAddHero = (heroName: string) => {
    console.log(`Hero added: ${heroName}`);
    setModalVisible(false);
  };

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-left"
            size={24}
            color={theme.colors.textPrimary}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          {teamName}
        </Text>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => setModalVisible(true)}
        >
          <Entypo name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Text
          style={[styles.centerText, { color: theme.colors.textSecondary }]}
        >
          No team members
        </Text>
      </View>
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text
            style={[styles.modalTitle, { color: theme.colors.textPrimary }]}
          >
            Add member
          </Text>
          {isLoading ? (
            <Text
              style={[
                styles.loadingText,
                { color: theme.colors.textSecondary },
              ]}
            >
              Loading...
            </Text>
          ) : (
            <FlatList
              data={heroes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HeroCard
                  hero={{
                    name: item.name,
                    affiliation: item.biography.fullName || "Unknown",
                    score: item.powerstats.combat || 0,
                    image: item.images.md,
                  }}
                  onAdd={() => handleAddHero(item.name)}
                />
              )}
              contentContainerStyle={styles.listContainer}
            />
          )}
        </View>
      </Modal>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins_600regular",
    fontWeight: "bold",
  },
  topButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#362C6A",
    padding: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "Poppins_600regular",
    marginTop: 40,
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 16,
  },
});

export default TeamDetailsScreen;
