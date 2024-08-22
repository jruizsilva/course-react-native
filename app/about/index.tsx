import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function AboutPage() {
  return (
    <>
      <Link href={"/"} asChild>
        <Pressable>
          <Text>Volver al inicio</Text>
        </Pressable>
      </Link>
      <Text>About page</Text>
    </>
  );
}
