export type TrendingCoin = {
  symbol: string;
  price: string;
  percentage: number;
  coinImg: string;
  // coinId: string;
};

// Function to fetch top 15 trending coins
export const fetchTrendingCoins = async (setTrendingCoins) => {
  const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await response.json();
  // destructure coins to only get necessary items
  let structuredCoins = data.coins.map((coin) => {
    return {
      coinSymbol: coin.item.symbol,
      coinPrice: coin.item.data.price,
      percentage: coin.item.data.price_change_percentage_24h.usd,
      coinImg: coin.item.large,
    };
  });

  setTrendingCoins(structuredCoins);
};
