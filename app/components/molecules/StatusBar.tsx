import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface StatusBarProps {
  leftElement?: React.ReactNode;
  onLeftIconPress?: () => void;
  title?: React.ReactNode;
  onTitlePress?: () => void;
  rightElement?: React.ReactNode;
  onRightIconPress?: () => void;
  backgroundColor?: string;
  iconColor?: string;
  containerStyle?: ViewStyle;
  showBackButton?: boolean;
  showBottomLine?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({
  leftElement,
  onLeftIconPress,
  title,
  onTitlePress,
  rightElement,
  onRightIconPress,
  backgroundColor = "#fff",
  iconColor = "#000",
  containerStyle,
  showBackButton = false,
  showBottomLine = true,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor }, containerStyle]}>
      <View style={styles.content}>
        {showBackButton ? (
          <TouchableOpacity
            onPress={onLeftIconPress || navigation.goBack}
            style={styles.iconContainer}
          >
            {leftElement || (
              <Ionicons name="arrow-back" size={24} color={iconColor} />
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.iconContainer} />
        )}
        <TouchableOpacity onPress={onTitlePress} style={styles.titleContainer}>
          {title || <View style={styles.titlePlaceholder} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.iconContainer}
        >
          {rightElement}
        </TouchableOpacity>
      </View>
      {showBottomLine && <View style={styles.bottomLine} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  bottomLine: {
    height: 1,
    backgroundColor: "#E5E5E5",
    opacity: 0.5,
  },
  iconContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titlePlaceholder: {
    width: 100,
    height: 28,
    backgroundColor: "#E5E5E5",
    borderRadius: 4,
  },
});

export default StatusBar;
