import "./formShipping.style.scss";
import FormInput from "../form-input/FormInput.component";

const FormShipping = () => {
  return (
    <form className="form-shipping">
      <div className="form-shipping__name flex ai-c">
        <FormInput
          text="First name"
          id="fName"
          placeholder="First name"
        ></FormInput>
        <FormInput
          text="Last name"
          id="lName"
          placeholder="Last name"
        ></FormInput>
      </div>
      <div className="form-shipping__more flex ai-c">
        <FormInput text="Email" id="email" placeholder="Your Email"></FormInput>
        <FormInput text="Phone" id="phone" placeholder="Your Phone"></FormInput>
      </div>
      <div className="form-shipping__location flex ai-c">
        <FormInput
          text="Country"
          id="country"
          placeholder="Country"
        ></FormInput>
        <FormInput text="City" id="city" placeholder="City"></FormInput>
        <FormInput
          type="number"
          text="Zip code"
          id="zipCode"
          placeholder="Zip Code"
        ></FormInput>
      </div>
      <div className="form-shipping__location-more flex ai-c">
        <FormInput text="State" id="state" placeholder="State"></FormInput>
        <FormInput
          text="Address"
          id="address"
          placeholder="Address"
        ></FormInput>
      </div>
    </form>
  );
};

export default FormShipping;
