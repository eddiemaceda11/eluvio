import { useState, useEffect } from "react";
import { Header } from "../../components/FinancialsPage/Header/Header";
import { Carousel } from "../../components/FinancialsPage/Carousel/Carousel";
import { MainCards } from "../../components/FinancialsPage/MainCards/MainCards";

import { fetchStocks } from "../../services/stocks";
import { fetchMainCardCoins } from "../../services/maincoins";
import { fetchTrendingCoins } from "../../services/trendingcoins";
import { TrendingCoins } from "../../components/FinancialsPage/TrendingCoins/TrendingCoins";

import "./Financials.css";

export type StockType = {
  symbol: string;
  name: string;
  price: string;
  changesPercentage: string;
};

export type MainCoinType = {
  coinName: string;
  coinSymbol: string;
  coinPrice: number;
  coinPercentage: number;
  coinImg: string;
};

export type TrendingCoinType = {
  coinName: string;
  coinSymbol: string;
  coinPrice: string;
  percentage: string;
  coinImg: string;
};

const FinancialsPage = () => {
  // // state for trending crypto coins
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoinType[]>([]);
  // // state for main coins at the top
  const [mainCoins, setMainCoins] = useState<MainCoinType[]>([]);
  // // state for market news
  // const [marketNews, setMarketNews] = useState<MarketNewsType[]>([]);
  // // state for stocks
  const [stocks, setStocks] = useState<StockType[]>([]);

  useEffect(() => {
    fetchMainCardCoins(setMainCoins);
    fetchTrendingCoins(setTrendingCoins);
    // fetchMarketNews(setMarketNews);
    fetchStocks(setStocks);
  }, []);
  console.log(stocks);

  return (
    <div>
      <Header />
      <Carousel stocks={stocks} />
      <MainCards coins={mainCoins} />
      <div className="investments-container">
        <TrendingCoins coins={trendingCoins} />
      </div>
    </div>
  );
};

export default FinancialsPage;
