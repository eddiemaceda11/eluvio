import barstoolImg from "./images/barstool-store.svg";
import budweiserImg from "./images/budweiser.svg";
import mrBeastImg from "./images/mrbeast.svg";
import cocacolaImg from "./images/cocacola.svg";
import toyotaImg from "./images/toyota.svg";
import nikeImg from "./images/nike.svg";
import mercedesImg from "./images/mercedes.svg";

const Company = () =>
  /*{
     company 
  }*/
  {
    return (
      <div className="logos-slide">
        <img src={barstoolImg} />
        <img src={budweiserImg} />
        <img src={nikeImg} />
        <img src={mrBeastImg} />
        <img src={cocacolaImg} />
        <img src={toyotaImg} />
        <img src={mercedesImg} />
        <img src={cocacolaImg} />
      </div>
    );
  };

export default Company;
