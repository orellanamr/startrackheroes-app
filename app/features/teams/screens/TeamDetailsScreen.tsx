import React, { useState, useEffect } from "react";
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
import Card from "../../../components/molecules/Card";
import SearchBar from "../../../components/molecules/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { addHeroToTeam } from "../../../redux/slices/teamsSlice";
import { removeHeroFromTeam } from "../../../redux/slices/teamsSlice";

const TeamDetailsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<TeamsStackParams, "TeamDetails">>();
  const { teamName } = route.params;
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.teams.teams);
  const team = teams.find((t) => t.name === teamName);

  const [isModalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  const { data: heroes, isLoading, error } = useGetAllSuperheroesQuery();
  const heroesFromSlice = useSelector(
    (state: RootState) => state.heroes.heroes
  );

  useEffect(() => {
    const sourceHeroes = error ? heroesFromSlice : heroes || [];
    const filtered = sourceHeroes.filter((hero) => {
      const nameMatch = hero.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const fullNameMatch = hero.biography.fullName
        .toLowerCase()
        .includes(searchText.toLowerCase());
      return nameMatch || fullNameMatch;
    });
    setFilteredHeroes(filtered);
  }, [searchText, heroes, heroesFromSlice, error]);

  const handleAddHero = (hero: any) => {
    if (team) {
      const isHeroAlreadyInTeam = team.members.some(
        (member) => member.id === hero.id
      );
      if (!isHeroAlreadyInTeam) {
        dispatch(addHeroToTeam({ teamId: team.id, hero }));
      }
    }
    setModalVisible(false);
  };

  const handleRemoveHero = (heroId: number) => {
    if (team) {
      dispatch(removeHeroFromTeam({ teamId: team.id, heroId }));
    }
  };

  const renderTeamMemberCard = ({ item }: { item: any }) => (
    <View style={styles.cardContainer}>
      <Card
        heroId={item.id}
        image={item.images.md}
        title={item.name}
        subtitle={item.biography.fullName || "Unknown"}
        powerstats={item.powerstats}
        onPress={() => navigation.navigate("HeroDetails", { hero: item })}
      />
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleRemoveHero(item.id)}
      >
        <Entypo name="trash" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  const renderModalHeroCard = ({ item }: { item: any }) => (
    <HeroCard
      hero={{
        name: item.name,
        affiliation: item.biography.fullName || "Unknown",
        powerstats: item.powerstats || {},
        image: item.images.md,
      }}
      onAdd={() => handleAddHero(item)}
    />
  );

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
      {team?.members.length === 0 ? (
        <View style={styles.centerContainer}>
          <Text
            style={[styles.centerText, { color: theme.colors.textSecondary }]}
          >
            No team members
          </Text>
        </View>
      ) : (
        <FlatList
          data={team.members}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTeamMemberCard}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Entypo name="cross" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text
            style={[styles.modalTitle, { color: theme.colors.textPrimary }]}
          >
            Add member
          </Text>
          <SearchBar
            value={searchText}
            onChangeText={setSearchText}
            onClear={() => setSearchText("")}
            placeholder="Search"
          />
          {isLoading && !error ? (
            <Text
              style={[
                styles.loadingText,
                { color: theme.colors.textSecondary },
              ]}
            >
              Loading...
            </Text>
          ) : filteredHeroes.length === 0 ? (
            <Text
              style={[
                styles.noResultsText,
                { color: theme.colors.textSecondary },
              ]}
            >
              No heroes found matching your search.
            </Text>
          ) : (
            <FlatList
              data={filteredHeroes}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderModalHeroCard}
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
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  deleteButton: {
    marginLeft: -55,
    marginBottom: -100,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 8,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#362C6A",
    padding: 16,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 16,
  },
  closeButton: {
    position: "absolute",
    top: 56,
    right: 16,
    zIndex: 1,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "center",
  },
  noResultsText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});

export default TeamDetailsScreen;
