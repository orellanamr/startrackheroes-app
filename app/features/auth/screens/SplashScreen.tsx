import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeIn" duration={2000}>
        <Image
          source={require("../../../assets/images/superherosLogo.png")}
          style={styles.logo}
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A3D",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export default SplashScreen;
