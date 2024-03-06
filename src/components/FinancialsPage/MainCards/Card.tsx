import "./maincards.css";
import { type MainCoinType } from "../../../pages/Financials/Financials";

type MainCoinCard = {
  coin: MainCoinType;
};

export const Card = ({ coin }: MainCoinCard) => {
  return (
    <div className="main-card">
      <div className="main-coin-info">
        <h2>{coin.coinSymbol.toUpperCase()}</h2>
        <h2>{coin.coinName}</h2>
        <h2>
          <span className="main-usd-symbol">$</span>
          {coin.coinPrice}
        </h2>
        <h2 className={coin.coinPercentage < 0 ? "negative" : "positive"}>{coin.coinPercentage}%</h2>
      </div>
      <img
        src={coin.coinImg}
        className="main-coin-img"
      />
    </div>
  );
};
