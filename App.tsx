import { ThemeProvider } from "./theme/ThemeProvider";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <BottomTabNavigator />
    </ThemeProvider>
  );
}
