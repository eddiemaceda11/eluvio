import { type Dispatch, type SetStateAction } from "react";
import { type MainCoinType } from "../pages/Financials/Financials";

type MainCoin = {
  // coinName: string;
  // coinSymbol: string;
  // coinPrice: number;
  // coinPercentage: number;
  // coinImg: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
};

// Fetch the major coins for main cards
export const fetchMainCardCoins = async (setMainCoins: Dispatch<SetStateAction<MainCoinType[]>>) => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano%2C%20dogecoin%2C%20%20tether&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
  const data = await response.json();

  let finalCoins = data.map((coin: MainCoin) => {
    return {
      coinName: coin.name,
      coinSymbol: coin.symbol,
      coinPrice: coin.current_price,
      coinPercentage: coin.price_change_percentage_24h,
      coinImg: coin.image,
    };
  });

  // setMainCoins([...finalCoins]);
  setMainCoins(finalCoins);
};
