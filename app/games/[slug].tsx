import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

interface Props {}

export default function GameDetails(_props: Props): JSX.Element {
  return (
    <>
      <Link href={"/"} asChild>
        <Pressable>
          <Text className="text-white">Volver al inicio</Text>
        </Pressable>
      </Link>
      <Text className="text-white mt-10 font-bold">GameDetails</Text>
    </>
  );
}
