import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import HomeStack from "../navigation/HomeStack";
import TeamsStack from "../navigation/TeamsStack";
import FavoritesScreen from "../features/favorites/screens/FavoritesScreen";
import { useTheme, DefaultTheme } from "styled-components/native";
import heroIcon from "../assets/images/NavigationBottom/heroIcon.png";
import teamIcon from "../assets/images/NavigationBottom/teamIcon.png";
import favoriteIcon from "../assets/images/NavigationBottom/favoriteIcon.png";
import FavoritesStack from "./FavoritesStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme: DefaultTheme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: { route: { name: string } }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }: { focused: boolean }) => {
            let iconSource;

            if (route.name === "Superheroes") {
              iconSource = heroIcon;
            } else if (route.name === "Teams") {
              iconSource = teamIcon;
            } else if (route.name === "Favorites") {
              iconSource = favoriteIcon;
            }

            return (
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? theme.colors.accent
                      : theme.colors.textSecondary,
                  },
                ]}
              />
            );
          },
          tabBarActiveTintColor: theme.colors.accent,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderTopColor: "#3A2873",
            borderTopWidth: 1,
          },
        })}
      >
        <Tab.Screen name="Superheroes" component={HomeStack} />
        <Tab.Screen name="Teams" component={TeamsStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomTabNavigator;
