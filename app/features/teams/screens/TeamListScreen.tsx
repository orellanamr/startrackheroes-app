import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const TeamListScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [teams, setTeams] = useState([
    { id: "1", name: "Thunderbolts", members: 0 },
    { id: "2", name: "Avengers", members: 5 },
  ]);

  const renderTeamCard = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("TeamDetails", { teamName: item.name })
      }
    >
      <View style={styles.cardContent}>
        <Text style={[styles.teamName, { color: theme.colors.textPrimary }]}>
          {item.name}
        </Text>
        <Text
          style={[styles.teamMembers, { color: theme.colors.textSecondary }]}
        >
          {item.members === 0 ? "No members" : `${item.members} members`}
        </Text>
      </View>
      <Entypo
        name="chevron-right"
        size={24}
        color={theme.colors.textSecondary}
      />
    </TouchableOpacity>
  );

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Teams
        </Text>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => console.log("Add team")}
        >
          <Entypo name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={teams}
        keyExtractor={(item) => item.id}
        renderItem={renderTeamCard}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#362C6A",
    marginBottom: 16,
  },
  cardContent: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontFamily: "Poppins_600regular",
    marginBottom: 4,
  },
  teamMembers: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});

export default TeamListScreen;
