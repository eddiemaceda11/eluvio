import "./header.css";
import { useRef } from "react";
// import AccountModal from "./UserAccount/userAccount";

function AccountModal({ modalRef }) {
  return (
    <div className="account-modal">
      <dialog ref={modalRef}>
        <p>Modal</p>
        <p>Hello</p>
      </dialog>
    </div>
  );
}

//

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <div className="bars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>menu</p>
    </div>
  );
};

const Logo = () => {
  return <p className="logo">e:luvio</p>;
};

const Account = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const toggle = () => {
    if (modalRef.current!.open) {
      modalRef.current!.close();
    } else {
      modalRef.current!.showModal();
    }
  };

  return (
    <>
      <button
        className="account"
        onClick={toggle}
      >
        account
      </button>
    </>
  );
};

//

export const Header = () => {
  return (
    <header>
      <div className="container">
        <HeaderMenu />
        <Logo />
        <Account />
      </div>
    </header>
  );
};
