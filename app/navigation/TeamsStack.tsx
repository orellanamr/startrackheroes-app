import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeamsScreen from "../features/teams/screens/TeamsScreen";

export type TeamsStackParams = {
  Teams: undefined;
};

const Stack = createStackNavigator<TeamsStackParams>();

const TeamsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TeamsStack" component={TeamsScreen} />
    </Stack.Navigator>
  );
};

export default TeamsStack;
