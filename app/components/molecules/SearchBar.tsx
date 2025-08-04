import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { useTheme } from "styled-components/native";
import AntDesign from "@expo/vector-icons/AntDesign"; // Ícono de búsqueda
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Ícono de borrar

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onClear,
  placeholder = "Search",
}) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.secondary }]}
    >
      <AntDesign
        name="search1"
        size={24}
        color={theme.colors.textSecondary}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, { color: theme.colors.textPrimary }]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <MaterialIcons
            name="clear"
            size={24}
            color={theme.colors.textSecondary}
            style={styles.clearIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  clearIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },
});

export default SearchBar;
