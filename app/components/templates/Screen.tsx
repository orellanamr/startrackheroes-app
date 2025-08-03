import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ScrollView } from "react-native";
import StatusBar from "../molecules/StatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";

interface ScreenProps {
  children: ReactNode;
  container?: boolean;
  scrollable?: boolean;
  safeAreaBackground?: string;
  statusBarProps?: {
    leftElement?: React.ReactNode;
    onLeftIconPress?: () => void;
    title?: React.ReactNode;
    onTitlePress?: () => void;
    rightElement?: React.ReactNode;
    onRightIconPress?: () => void;
    backgroundColor?: string;
    textColor?: string;
    iconColor?: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    showBackButton?: boolean;
  };
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  statusBarProps,
  container = false,
  scrollable = false,
  safeAreaBackground,
}) => {
  const theme = useTheme();

  // Determine the background color for SafeAreaView
  const getSafeAreaBackground = () => {
    if (safeAreaBackground) return safeAreaBackground;
    if (statusBarProps?.backgroundColor) return statusBarProps.backgroundColor;
    return theme.colors.background || "#FFFFFF";
  };

  const content = scrollable ? (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: container ? 10 : 0,
      }}
    >
      {children}
    </ScrollView>
  ) : (
    <>{children}</>
  );

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        backgroundColor: getSafeAreaBackground(),
        flex: 1,
      }}
    >
      {statusBarProps && <StatusBar {...statusBarProps} />}
      {content}
    </SafeAreaView>
  );
};
