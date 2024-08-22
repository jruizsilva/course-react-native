import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView className="bg-black flex-1">
        <Slot />
      </SafeAreaView>
    </>
  );
}
