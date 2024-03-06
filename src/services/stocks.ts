import { Dispatch, SetStateAction } from "react";
import { type StockType } from "../pages/Financials/Financials";

export const fetchStocks = async (setStocks: Dispatch<SetStateAction<StockType[]>>) => {
  const response = await fetch("https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=KgHkD2pEWKutRteHLMhCilJM03YoUxQM");
  const data = await response.json();
  setStocks(data.slice(0, 14));
};
