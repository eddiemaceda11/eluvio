import "./header.css";

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
  return <div className="account">account</div>;
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
