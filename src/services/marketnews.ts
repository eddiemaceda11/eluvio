import { type Dispatch, type SetStateAction } from "react";
import { type MarketNewsType } from "../App";

type News = {
  title: string; // feed.title
  banner_image: string; // feed.banner_image
  source: string; // feed.source
  url: string; // feed.url
};

// setMarketNews is a useState setter - need to give it type of Dispatch
export const fetchMarketNews = async (setMarketNews: Dispatch<SetStateAction<MarketNewsType[]>>) => {
  const response = await fetch("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=all&apikey=IOW76K7BG75VJQ55");
  const data = await response.json();
  // destructure coins to only get necessary items
  let structuredNews = data.feed.map((item: News) => {
    return {
      title: item.title,
      image: item.banner_image,
      source: item.source,
      link: item.url,
    };
  });
  setMarketNews(structuredNews);
};
