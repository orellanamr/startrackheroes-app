import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamsScreen from "../features/teams/screens/TeamsScreen";
import TeamDetailsScreen from "../features/teams/screens/TeamDetailsScreen";
import HeroDetailsScreen from "../features/home/screens/HeroDetailsScreen";

export type TeamsStackParams = {
  Teams: undefined;
  TeamsAuth: undefined;
};

const Stack = createStackNavigator<TeamsStackParams>();

const TeamsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TeamsHome" component={TeamsScreen} />
      <Stack.Screen name="TeamDetails" component={TeamDetailsScreen} />
      <Stack.Screen name="HeroDetails" component={HeroDetailsScreen} />
    </Stack.Navigator>
  );
};

export default TeamsStack;
