import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import CircularButton from "../../../components/atoms/CircularButton";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { createTeam } from "../../../redux/slices/teamsSlice";
import { useNavigation } from "@react-navigation/native";

const TeamsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.teams.teams); // Obtener equipos desde el slice
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamName, setTeamName] = useState("");
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleCreateTeam = () => {
    const teamId = generateUniqueId(); // Generar un ID único manualmente
    dispatch(createTeam({ id: teamId, name: teamName }));
    setModalVisible(false);
    setTeamName("");
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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
          {item.members.length === 0
            ? "No members"
            : `${item.members.length} members`}
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
        <CircularButton
          onPress={handleOpenModal} // Abrir el modal
          style={styles.topButton}
          icon={<Entypo name="plus" size={24} color="#FFFFFF" />}
        />
      </View>
      {teams.length === 0 ? (
        <View style={styles.centerContainer}>
          <Image
            source={require("../../../assets/images/NavigationBottom/teamIcon.png")}
            style={styles.centerIcon}
          />
          <Text
            style={[styles.centerText, { color: theme.colors.textSecondary }]}
          >
            Create your first team
          </Text>
          <CircularButton
            onPress={handleOpenModal} // Abrir el modal
            style={styles.centerButton}
            icon={<Entypo name="plus" size={24} color="#FFFFFF" />}
          />
        </View>
      ) : (
        <FlatList
          data={teams}
          keyExtractor={(item) => item.id}
          renderItem={renderTeamCard}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={handleCloseModal}
        >
          <View style={styles.modalContent}>
            <Text
              style={[styles.modalTitle, { color: theme.colors.textPrimary }]}
            >
              Add a new team
            </Text>
            <Text
              style={[
                styles.modalSubtitle,
                { color: theme.colors.textPrimary },
              ]}
            >
              Team name
            </Text>
            <TextInput
              style={[
                styles.input,
                { borderColor: theme.colors.textSecondary },
              ]}
              placeholder="Team name"
              placeholderTextColor={theme.colors.textSecondary}
              value={teamName}
              onChangeText={setTeamName}
            />
            <TouchableOpacity
              onPress={handleCreateTeam}
              style={styles.createButton}
            >
              <Text style={styles.createButtonText}>Create team</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
  centerIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  centerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginBottom: 16,
  },
  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: "60%",
    padding: 16,
    borderRadius: 24,
    backgroundColor: "#362C6A",
    position: "absolute",
    bottom: 0,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "left",
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "left",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  createButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_600regular",
  },
});

export default TeamsScreen;
