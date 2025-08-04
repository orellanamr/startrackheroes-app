import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { ThemeProvider } from "./theme/ThemeProvider";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";
import SplashScreen from "./app/features/auth/screens/SplashScreen";

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        {isSplashVisible ? <SplashScreen /> : <BottomTabNavigator />}
      </ThemeProvider>
    </Provider>
  );
}
