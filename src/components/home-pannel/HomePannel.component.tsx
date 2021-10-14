import "./homePannel.style.scss";
import imgPannel from "../../assets/images/img-pannel.png";
import imgLines from "../../assets/images/img-pannel-lines.png";
import BtnCta from "../buttons/btn-cta/BtnCta.component";

const HomePannel = () => {
  return (
    <div className="home-pannel">
      <div className="container flex">
        <section className="home-pannel__text flex flex-fd-c jc-c">
          <h1 className="fc-reverse">{`Admire Stylish Dresses & Looks`}</h1>
          <p className="fc-reverse">
            If we wanted to build a human-level tool to offer automated outfit
            advice, we needed to understand people’s fashion taste.
          </p>
          <BtnCta
            text="Show More"
            whiteBorder
            onClick={() => console.log("ok")}
          ></BtnCta>
        </section>
        <section className="home-pannel__img">
          <img className="img-lines" src={imgLines} alt="lines" />
          <img className="img-girl" src={imgPannel} alt="pannel" />
        </section>
        <span className="img-mobile-helper"></span>
      </div>
    </div>
  );
};

export default HomePannel;
