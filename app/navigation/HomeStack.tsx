import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../features/home/screens/HomeScreen";
import HeroDetailsScreen from "../features/home/screens/HeroDetailsScreen";

export type HomeStackParams = {
  Home: undefined;
  HeroDetails: {
    hero: {
      name: string;
      images: { md: string };
      biography: { fullName: string; alterEgos: string };
      powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
      };
    };
  };
};

const Stack = createStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HeroDetails" component={HeroDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
