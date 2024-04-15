import "./header.css";
import { useRef } from "react";
// import AccountModal from "./UserAccount/userAccount";

function AccountModal({ modalRef }) {
  return (
    <>
      <dialog
        ref={modalRef}
        closed
      >
        <p>Modal</p>
        <p>Hello</p>
      </dialog>
    </>
  );
}

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
  const modalRef = useRef();

  const toggle = () => {
    if (modalRef.current.open) {
      console.log("open");
      modalRef.current.close();
    } else {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <AccountModal modalRef={modalRef} />
      <button
        className="account"
        onClick={toggle}
      >
        account
      </button>
    </>
  );
};

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
