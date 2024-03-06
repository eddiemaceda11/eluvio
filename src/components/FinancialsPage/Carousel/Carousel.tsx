import { useEffect } from "react";
import { type StockType } from "../../../pages/Financials/Financials";
import "./carousel.css";

type StocksArrayType = {
  stocks: StockType[];
};

export const Carousel = ({ stocks }: StocksArrayType) => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, [stocks]);

  const addAnimation = () => {
    // Select all elements with the scroller className
    const scrollers = Array.from(document.querySelectorAll(".scroller"));
    // For each element with a scroller className, add attribute
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
    });

    const scrollerInner = document.querySelector(".scroller__inner");
    // make a second copy that won't get changed even if DOM gets updated
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        {stocks.map((stock) => {
          return (
            <li>
              <h3>{stock.symbol}</h3>
              <h4>{stock.name}</h4>
              <div className="scroller-card-numbers">
                <h5>{stock.price}</h5>
                <h5 className="negative">({stock.changesPercentage}%)</h5>
              </div>
            </li>
          );
        })}
        {/* <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li>
        <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li>
        <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li>
        <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li>
        <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li>
        <li>
          <h3>AAPL</h3>
          <h4>Apple Inc.</h4>
          <div className="scroller-card-numbers">
            <h5>$182.52</h5>
            <h5 className="negative">(1.00%)</h5>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
