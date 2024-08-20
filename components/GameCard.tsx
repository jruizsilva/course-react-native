import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { Game } from "../types/game";
import { useEffect, useRef } from "react";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: game.image,
            width: 150,
            height: 150,
          }}
        />
        <Text style={styles.title} className="bg-red-100">
          {game.title}23
        </Text>
        <Text style={styles.score}>{game.score}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {game.description}
        </Text>
      </View>
    </>
  );
}

interface AnimatedGameCardProps {
  game: Game;
  index: number;
}

export function AnimatedGameCard({
  game,
  index,
}: AnimatedGameCardProps): JSX.Element {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 300,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
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
