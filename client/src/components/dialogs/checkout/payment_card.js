import React from "react";

import icons from "../../../constants/icons";

const {
  ArrowLeftIcon
} = icons;

import { CardWrapper } from "./styled";

const PaymentCard = ({onChange, form, setStep}) => {
  return (
    <CardWrapper id="form">
      <button
        className="back"
        onClick={() => setStep(true)}
      ><ArrowLeftIcon/></button>

      <div id="card">
        <div className="header">
          <div className="sticker"></div>
          <div>
            <img
              className="logo"
              src={
                "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png"
              }
              alt="Card logo"
            />
          </div>
        </div>
        <div className="body">
          <h2 id="creditCardNumber">{form.creditCardNum !== 0 ? form.creditCardNum.match(/.{1,4}/g).join('-') : ''}</h2>
        </div>
        <div className="footer">
          <div>
            <h5>Card Holder</h5>
            <h3>{form.CardHolder}</h3>
          </div>
          <div>
            <h5>Expires</h5>
            <h3>{form.expireMonth} / {form.expireYear}</h3>
          </div>
        </div>
      </div>

      <div className="input-container mt">
        <h4>Enter card number</h4>
        <input
          minLength={16}
          maxLength={16}
          name="creditCardNum"
          type="text"
          placeholder="Please enter your card number"
          onChange={onChange} required
        />
      </div>

      <div className="input-container">
        <h4>Card Holder</h4>
        <input name="CardHolder" type="text" placeholder="Please enter your full name" onChange={onChange} required />
      </div>

      <div className="input-grp">
        <div className="input-container">
          <h4>Expiration Year</h4>
          <select name="expireMonth" onChange={onChange} required>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="input-container">
          <h4>Month</h4>
          <select name="expireYear" onChange={onChange} required>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>
        <div className="input-container">
          <h4>CVV</h4>
          <input name="cvv" type="password" placeholder="CVV" required onChange={onChange} />
        </div>
      </div>

      <button type="submit">{`Submit payment`}</button>
    </CardWrapper>
  );
};

export default PaymentCard;
