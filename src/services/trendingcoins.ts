import { Dispatch, SetStateAction } from "react";
import { TrendingCoinType } from "../pages/Financials/Financials";

export type TrendingCoin = {
  item: {
    symbol: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: string;
      };
    };
    large: string;
  };
};

// Function to fetch top 15 trending coins
export const fetchTrendingCoins = async (setTrendingCoins: Dispatch<SetStateAction<TrendingCoinType[]>>) => {
  const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const data = await response.json();
  // destructure coins to only get necessary items
  let structuredCoins = data.coins.map((coin: TrendingCoin) => {
    return {
      coinSymbol: coin.item.symbol,
      coinPrice: coin.item.data.price,
      percentage: coin.item.data.price_change_percentage_24h.usd,
      coinImg: coin.item.large,
    };
  });

  setTrendingCoins(structuredCoins);
};
