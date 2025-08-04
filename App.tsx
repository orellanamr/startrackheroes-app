import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/redux/store";
import { ThemeProvider } from "./theme/ThemeProvider";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";
import SplashScreen from "./app/features/auth/screens/SplashScreen";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          {isSplashVisible ? <SplashScreen /> : <BottomTabNavigator />}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
