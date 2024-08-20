import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useFetchGames } from "../hook/useFetchGames";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";

interface Props {}

export default function Main(_props: Props): JSX.Element {
  const { games } = useFetchGames();
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginBottom: 8, marginTop: 8 }}>
          <Logo />
        </View>
        {/* <Text style={{ color: "#fff" }}>
            {JSON.stringify(games, null, 2)}
          </Text> */}
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
