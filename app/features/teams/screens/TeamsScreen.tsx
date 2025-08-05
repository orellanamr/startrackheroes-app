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
  Alert,
} from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import CircularButton from "../../../components/atoms/CircularButton";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { createTeam, deleteTeam } from "../../../redux/slices/teamsSlice";
import { useNavigation } from "@react-navigation/native";

const TeamsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) => state.teams.teams);
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamName, setTeamName] = useState("");
  const generateUniqueId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleOpenModal = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      Alert.alert(
        "Error",
        "Biometric authentication is not supported on this device."
      );
      return;
    }

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      Alert.alert(
        "Error",
        "No biometric authentication methods are configured."
      );
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to create a team",
    });

    if (result.success) {
      setModalVisible(true);
    } else {
      Alert.alert("Authentication failed", "Unable to authenticate.");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCreateTeam = () => {
    const teamId = generateUniqueId();
    dispatch(createTeam({ id: teamId, name: teamName }));
    setModalVisible(false);
    setTeamName("");
  };

  const handleDeleteTeam = (teamId: number) => {
    dispatch(deleteTeam(teamId));
  };

  const renderTeamCard = ({ item }: any) => (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() =>
          navigation.navigate("TeamDetails", { teamName: item.name })
        }
      >
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
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTeam(item.id)}
      >
        <Entypo name="trash" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Teams
        </Text>
        <CircularButton
          onPress={handleOpenModal}
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
            onPress={handleOpenModal}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  teamMembers: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  deleteButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 8,
    borderRadius: 8,
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
