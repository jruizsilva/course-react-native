import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/meta";
import { GameDetails } from "../types/game";

export const useFetchGameBySlug = (slug: string) => {
  const [game, setGame] = useState<GameDetails | null>(null);

  useEffect(() => {
    getGameDetails(slug)
      .then((data) => setGame(data))
      .catch(console.log);
  }, [slug]);

  return { game };
};
