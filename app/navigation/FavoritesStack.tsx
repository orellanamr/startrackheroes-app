import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../features/favorites/screens/FavoritesScreen";
import HeroDetailsScreen from "../features/home/screens/HeroDetailsScreen";

export type FavoritesStackParams = {
  Favorites: undefined;
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

const Stack = createStackNavigator<FavoritesStackParams>();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FavoritesStack" component={FavoritesScreen} />
      <Stack.Screen name="HeroDetails" component={HeroDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
