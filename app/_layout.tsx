import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  return (
    <>
      <StatusBar style="light" />
      <View className="bg-black flex-1">
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </View>
    </>
  );
}
