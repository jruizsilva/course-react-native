import { Slot } from "expo-router";
import { View } from "react-native";

export default function AboutLayout() {
  return (
    <View className="bg-slate-400 ">
      <Slot />
    </View>
  );
}
