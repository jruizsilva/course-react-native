import { Slot } from "expo-router";
import Screen from "../../components/Screen";

export default function AboutLayout() {
  return (
    <Screen className="p-5">
      <Slot />
    </Screen>
  );
}
