import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { CircleInfoIcon } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function MainLayout() {
  return (
    <>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#000" },
            title: "",
            headerLeft: () => <Logo />,
            headerRight: () => (
              <Link href={"/about"} asChild>
                <Pressable>
                  <CircleInfoIcon />
                </Pressable>
              </Link>
            ),
            statusBarColor: "black",
            statusBarStyle: "light",
          }}
        />
      </View>
    </>
  );
}
