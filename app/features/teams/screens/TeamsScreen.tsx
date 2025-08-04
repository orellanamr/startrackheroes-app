import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useTheme } from "styled-components/native";
import { Screen } from "../../../components/templates/Screen";
import CircularButton from "../../../components/atoms/CircularButton";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const TeamsScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.colors.textPrimary }]}>
          Teams
        </Text>
        <CircularButton
          onPress={() => navigation.navigate("TeamsAuth")}
          style={styles.topButton}
          icon={<Entypo name="plus" size={24} color="#FFFFFF" />}
        />
      </View>
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
          onPress={() => navigation.navigate("TeamsAuth")}
          style={styles.centerButton}
          icon={<Entypo name="plus" size={24} color="#FFFFFF" />}
        />
      </View>
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
    backgroundColor: "#6C63FF", // Color del botón
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
    backgroundColor: "#6C63FF", // Color del botón
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TeamsScreen;
