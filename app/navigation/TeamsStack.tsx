import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamsScreen from "../features/teams/screens/TeamsScreen";
import TeamsAuthScreen from "../features/teams/screens/TeamsAuthScreen";
import TeamListScreen from "../features/teams/screens/TeamListScreen";
import TeamDetailsScreen from "../features/teams/screens/TeamDetailsScreen";

export type TeamsStackParams = {
  Teams: undefined;
  TeamsAuth: undefined;
};

const Stack = createStackNavigator<TeamsStackParams>();

const TeamsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TeamsHome" component={TeamsScreen} />
      <Stack.Screen name="TeamsAuth" component={TeamsAuthScreen} />
      <Stack.Screen name="TeamList" component={TeamListScreen} />
      <Stack.Screen name="TeamDetails" component={TeamDetailsScreen} />
    </Stack.Navigator>
  );
};

export default TeamsStack;
