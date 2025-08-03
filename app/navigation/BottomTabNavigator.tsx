import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import HomeScreen from "../features/home/screens/HomeScreen";
import TeamsScreen from "../features/teams/screens/TeamsScreen";
import FavoritesScreen from "../features/favorites/screens/FavoritesScreen";
import { useTheme } from "styled-components/native";
import heroIcon from "../assets/images/NavigationBottom/heroIcon.png";
import teamIcon from "../assets/images/NavigationBottom/teamIcon.png";
import favoriteIcon from "../assets/images/NavigationBottom/favoriteIcon.png";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();

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
          },
        })}
      >
        <Tab.Screen name="Superheroes" component={HomeScreen} />
        <Tab.Screen name="Teams" component={TeamsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
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
