import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AnimatedGameCard } from "../components/GameCard";
import { Logo } from "../components/Logo";
import { useFetchGames } from "../hook/useFetchGames";
import { Link } from "expo-router";

export default function HomePage() {
  const { games } = useFetchGames();
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 8, marginTop: 8 }}>
          <Logo />
        </View>
        <View>
          <Link href={"/about/"} asChild>
            <Pressable>
              <Text className="text-white">Ir al about</Text>
            </Pressable>
          </Link>
        </View>
        {games.length === 0 ? (
          <View style={styles.loader}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard key={item.slug} game={item} index={index} />
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  loader: {
    flexBasis: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
});
