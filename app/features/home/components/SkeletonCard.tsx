import React from "react";
import { View, StyleSheet } from "react-native";

const SkeletonCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.title} />
        <View style={styles.subtitle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(106, 77, 188, 0.24)",
    marginBottom: 16,
  },
  image: {
    width: "50%",
    height: 150,
    borderRadius: 8,
    backgroundColor: "rgba(106, 77, 188, 0.24)",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    width: "80%",
    height: 16,
    backgroundColor: "rgba(106, 77, 188, 0.24)",
    borderRadius: 8,
    marginBottom: 8,
  },
  subtitle: {
    width: "60%",
    height: 12,
    backgroundColor: "rgba(106, 77, 188, 0.24)",
    borderRadius: 8,
  },
});

export default SkeletonCard;
