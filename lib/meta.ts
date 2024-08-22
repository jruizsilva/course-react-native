import { Game, GameDetails, GameDetailsResponse } from "../types/game";

export async function getLatestGames() {
  const LATEST_GAMES =
    "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";

  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const {
    data: { items },
  } = json;

  return items.map((item: any) => {
    const { description, slug, releaseDate, image, criticScoreSummary, title } =
      item;
    const { score } = criticScoreSummary;

    // crea la imagen
    const { bucketType, bucketPath } = image;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    return {
      description,
      releaseDate,
      score,
      slug,
      title,
      image: img,
    };
  });
}

export async function getGameDetails(slug: string): Promise<GameDetails> {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json: GameDetailsResponse = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } =
    components[0].data.item;
  const { score } = criticScoreSummary;

  const { bucketType, bucketPath } = images[0];
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  return {
    img,
    title,
    slug,
    description,
    score,
  };
}
