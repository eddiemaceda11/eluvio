import { useState, useEffect } from "react";
import { Header } from "../../components/FinancialsPage/Header/Header";
import { Carousel } from "../../components/FinancialsPage/Carousel/Carousel";

import { fetchStocks } from "../../services/stocks";

export type StockType = {
  symbol: string;
  name: string;
  price: string;
  changesPercentage: string;
};

const FinancialsPage = () => {
  // // state for trending crypto coins
  // const [trendingCoins, setTrendingCoins] = useState<TrendingCoinType[]>([]);
  // // state for main coins at the top
  // const [mainCoins, setMainCoins] = useState<MainCoinType[]>([]);
  // // state for market news
  // const [marketNews, setMarketNews] = useState<MarketNewsType[]>([]);
  // // state for stocks
  const [stocks, setStocks] = useState<StockType[]>([]);

  useEffect(() => {
    // fetchMainCardCoins(setMainCoins);
    // fetchTrendingCoins(setTrendingCoins);
    // fetchMarketNews(setMarketNews);
    fetchStocks(setStocks);
  }, []);
  console.log(stocks);

  return (
    <div>
      <Header />
      <Carousel stocks={stocks} />
    </div>
  );
};

export default FinancialsPage;
