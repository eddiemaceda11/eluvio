import "./trendingcoins.css";
import { type TrendingCoinType } from "../../../pages/Financials/Financials";

type TrendingCoinProps = {
  coins: TrendingCoinType[];
};

export const TrendingCoins = ({ coins }: TrendingCoinProps) => {
  return (
    <div className="trending-coins">
      <h2>Crypto / Trending</h2>
      <div className="table-container">
        <table align="center">
          <thead>
            <tr>
              <th>#</th>
              <th className="table-coin-name">Name</th>
              <th>Price</th>
              <th>24H(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
            {coins
              ? coins.map((coin: TrendingCoinType, index) => {
                  coin.coinPrice = coin.coinPrice.toString().slice(0, 9);

                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td className="table-coin-img-name">
                        <img
                          src={coin.coinImg}
                          className="coin-img"
                        />
                        {coin.coinSymbol}
                      </td>
                      <td>$ {coin.coinPrice}</td>
                      <td className={Number(coin.percentage).toFixed(2).indexOf("-") !== -1 ? "negative" : "positive"}>{Number(coin.percentage).toFixed(2)}%</td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};
