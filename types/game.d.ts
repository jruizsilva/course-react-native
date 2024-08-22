interface Game {
  description: number;
  releaseDate: string;
  score: number;
  slug: string;
  title: string;
  image: string;
}

interface GameDetails {
  img: string;
  title: string;
  slug: string;
  description: string;
  score: number;
}

interface GameDetailsResponse {
  components: Component[];
}

interface Component {
  data: Data;
}

interface Data {
  item: Item;
}

interface Item {
  id: number;
  type: string;
  typeId: number;
  title: string;
  slug: string;
  mustPlay: boolean;
  premiereYear: number;
  description: string;
  platform: string;
  criticScoreSummary: CriticScoreSummary;
  releaseDate: Date;
  releaseDateText: Date;
  production: Production;
  images: Image[];
  video: null;
  genres: Family[];
  rating: string;
  countries: string[];
  platforms: Platform[];
  gameTaxonomy: GameTaxonomy;
}

interface CriticScoreSummary {
  url: string;
  max: number;
  score: number;
  normalizedScore: number;
  reviewCount: number;
  positiveCount: number;
  neutralCount: number;
  negativeCount: number;
  sentiment: string;
}

interface GameTaxonomy {
  franchises: Family[];
  family: Family;
  title: Family;
  game: Family;
  platform: Family;
}

interface Family {
  id: number;
  name: string;
}

interface Image {
  id: string;
  filename: string;
  dateCreated: DateCreated;
  alt: null;
  credits: null;
  path: null;
  cropGravity: null;
  crop: null;
  caption: null;
  typeName: string;
  imageUrl: null;
  width: number;
  height: number;
  sType: null;
  bucketType: string;
  bucketPath: string;
  mediaType: null;
  provider: string;
}

interface DateCreated {
  date: null;
  timezone: null;
}

interface Platform {
  id: number;
  name: string;
  criticScoreSummary: CriticScoreSummary;
  relatedGameId: number;
  isLeadPlatform: boolean;
  releaseDate: Date;
  slug: string;
}

interface Production {
  companies: Company[];
  officialSite: null;
  crew: any[];
}

interface Company {
  id: number;
  typeId: number;
  typeName: string;
  name: string;
  url: string;
}

export type { Game, GameDetails, GameDetailsResponse };
