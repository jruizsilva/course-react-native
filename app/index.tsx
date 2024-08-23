import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { AnimatedGameCard } from "../components/GameCard";
import { useFetchGames } from "../hook/useFetchGames";
import Screen from "../components/Screen";

export default function HomePage() {
  const { games } = useFetchGames();
  return (
    <>
      <Screen className="px-3">
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
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    flexBasis: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
});
