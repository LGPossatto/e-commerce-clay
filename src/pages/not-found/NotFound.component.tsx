import { useHistory } from "react-router";
import BtnCta from "../../components/buttons/btn-cta/BtnCta.component";
import "./notFound.style.scss";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="not-found container flex flex-fd-c ai-c">
      <h2>Page Not Found</h2>
      <BtnCta
        text={"Return Home"}
        onClick={() => {
          history.push("/");
        }}
      ></BtnCta>
    </div>
  );
};

export default NotFound;
