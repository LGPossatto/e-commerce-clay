import FormOptions from "../forms/form-options/FormOptions.component";
import FormRadio from "../forms/form-radio/FormRadio.component";
import "./shopMenu.style.scss";

const ShopMenu = () => {
  return (
    <div className="shop-menu flex jc-sb ai-c">
      <FormOptions
        label="Show"
        options={["Popular", "Man", "Woman", "Kids"]}
      ></FormOptions>
      <FormOptions
        label="Price"
        options={["Any", "Less than $100", "Less than $500", "Less than $1000"]}
      ></FormOptions>
      <FormOptions
        label="Brand"
        options={["Any", "Gucci", "Yves Saint Laurent", "Karl Lagerfeld"]}
      ></FormOptions>
      <FormRadio text="Size" options={["L", "M", "S"]}></FormRadio>
    </div>
  );
};

export default ShopMenu;
