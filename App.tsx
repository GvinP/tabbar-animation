import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabbar from "./Tabbar";

export default function App() {
  return (
    <SafeAreaProvider>
      <Tabbar />
      <StatusBar />
    </SafeAreaProvider>
  );
}
