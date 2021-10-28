import "./formCheckout.style.scss";
import FormInput from "../form-input/FormInput.component";
import FormOptions from "../form-options/FormOptions.component";

const FormCheckout = () => {
  return (
    <form className="form-checkout">
      <FormInput
        text="Name on Card"
        id="cardName"
        placeholder="John Doe"
      ></FormInput>
      <FormInput
        text="Credit card number"
        id="cardNumber"
        placeholder="1111-2222-3333-4444"
      ></FormInput>
      <div className="form-checkout__more flex">
        <FormOptions
          label="Exp Month"
          options={[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ]}
          id="cardExpMonth"
          bold
        ></FormOptions>
        <FormInput
          type="number"
          text="Exp Year"
          id="cardExpYear"
          placeholder="2025"
        ></FormInput>
        <FormInput
          type="number"
          text="CVV"
          id="cardCVV"
          placeholder="123"
        ></FormInput>
      </div>
    </form>
  );
};

export default FormCheckout;
