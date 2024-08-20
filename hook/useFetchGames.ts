import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/meta";
import { Game } from "../types/game";

export const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    getLatestGames()
      .then((data) => setGames(data))
      .catch(console.log);
  }, []);

  return { games };
};
