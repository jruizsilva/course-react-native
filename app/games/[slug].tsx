import { Link, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFetchGameBySlug } from "../../hook/useFetchGameBySlug";

interface Props {}

export default function GameDetails(_props: Props): JSX.Element {
  const { slug } = useLocalSearchParams();
  const { game } = useFetchGameBySlug(slug as string);
  console.log(game);
  return (
    <>
      <View className="px-4">
        <Link href={"/"} asChild>
          <Pressable>
            <Text className="text-white">Volver al inicio</Text>
          </Pressable>
        </Link>
        {game === null ? (
          <View className="basis-3/4 items-center justify-center">
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <View className="items-center mb-2">
              <Image
                source={{
                  uri: game.img,
                  width: 180,
                  height: 180,
                }}
              />
            </View>
            <View>
              <Text style={styles.title}>{game.title}</Text>
              <Text style={styles.score}>{game.score}</Text>
              <Text style={styles.description}>{game.description}</Text>
            </View>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  score: {
    color: "#0f9",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#ddd",
  },
});
