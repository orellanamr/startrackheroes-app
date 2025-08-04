import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import CircularButton from "../../../components/atoms/CircularButton";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const TeamsAuthScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamName, setTeamName] = useState("");

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setModalVisible(true);
  };

  const handleCreateTeam = () => {
    console.log(`Team created: ${teamName}`);
    setModalVisible(false);
    setTeamName("");
    navigation.navigate("TeamList");
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Teams
        </Text>
        <CircularButton
          onPress={() => console.log("Add team")}
          style={styles.topButton}
          icon={<Entypo name="plus" size={24} color="#FFFFFF" />}
        />
      </View>
      <View style={styles.centerContainer}>
        <TouchableOpacity
          onPress={handleAuthentication}
          style={styles.authButton}
        >
          <Image
            source={require("../../../assets/images/faceID.png")}
            style={styles.centerIcon}
          />
          <Text
            style={[styles.centerText, { color: theme.colors.textSecondary }]}
          >
            {isAuthenticated ? "Authenticated" : "Face ID"}
          </Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 8,
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
  authButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerIcon: {
    width: 125,
    height: 125,
    marginBottom: 16,
  },
  centerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginBottom: 16,
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
  closeButton: {
    marginTop: 16,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});

export default TeamsAuthScreen;
