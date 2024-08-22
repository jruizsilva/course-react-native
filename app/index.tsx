import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

export default function HomePage() {
  return (
    <>
      <Link href={"/about"} asChild>
        <Pressable>
          <Text>Ir al about</Text>
        </Pressable>
      </Link>
      <Text>Index page</Text>
    </>
  );
}
