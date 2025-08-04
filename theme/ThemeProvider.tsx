import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      textSecondary: string;
      accent: string;
      background: string;
    };
  }
}

const theme = {
  colors,
  typography,
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
