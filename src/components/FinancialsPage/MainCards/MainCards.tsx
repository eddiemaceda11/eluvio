import { Card } from "./Card";
import { type MainCoinType } from "../../../pages/Financials/Financials";
import "./maincards.css";
import { useRef } from "react";

export type MainCoinProps = {
  coins: MainCoinType[];
};

const backupData = [
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    coinName: "Bitcoin",
    coinSymbol: "BTC",
    coinPrice: 4.903,
    coinPercentage: 2.04,
    coinImg: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const MainCards = ({ coins }: MainCoinProps) => {
  const modalRef = useRef<HTMLDialogElement>();

  const openModal = () => {
    // if (modalRef.current === 'undefined') return;
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <div className="main-cards">
      <div className="container">
        <dialog ref={modalRef}>
          <form method="dialog">
            <div>
              <label>1</label>
              <input type="text" />
            </div>
            {/* <button type="submit">close</button> */}
          </form>
        </dialog>
        {/* <i className="fa-solid fa-list" onClick={openModal}></i> */}
        {coins.length > 0 &&
          coins.map((coin: MainCoinType) => (
            <Card
              key={coin.coinName}
              coin={coin}
            />
          ))}
        {coins.length === 0 &&
          backupData.map((item) => (
            <Card
              key={item.coinName}
              coin={item}
            />
          ))}
      </div>
    </div>
  );
};
