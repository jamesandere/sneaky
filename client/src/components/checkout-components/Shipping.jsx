import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { countries } from "../../locale/countries";

const Shipping = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  return (
    <Container>
      <h4>Shipping Address</h4>
      <section>
        <form>
          <Group>
            <div className="form-group">
              <label>Full name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <PhoneInput
                defaultCountry="KE"
                country=""
                value={value}
                onChange={setValue}
              />
            </div>
          </Group>
          <div className="form-group">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" />
          </div>
          <SelectContainer>
            <label>Country</label>
            <div className="select-container">
              <select className="select-box">
                <option value disabled>
                  Please select a country
                </option>
                {countries.map((country) => (
                  <option value={country.code}>{country.name}</option>
                ))}
              </select>
              <div className="icon-container">
                <svg
                  viewBox="0 0 20 20"
                  width="1rem"
                  height="1.25rem"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                </svg>
              </div>
            </div>
          </SelectContainer>
          <Group>
            <div className="form-group">
              <label>Street</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Postal code</label>
              <input type="text" />
            </div>
          </Group>
          <div className="submit-container">
            <button onClick={() => navigate(`/checkout/payment`)}>
              Proceed to payment
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default Shipping;

const Container = styled.div`
  h4 {
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  section {
    padding: 1rem;
  }

  form {
    .form-group {
      display: flex;
      flex-direction: column;
      position: relative;

      .PhoneInput {
        border: 1px solid rgb(220, 220, 220);
        display: flex;
        align-items: center;
        height: 100%;
        border-radius: 4px;
        padding: 0 10px;

        .PhoneInputInput {
          border: none;
          outline: none;
          font-size: 100%;
          flex: 1;
          min-width: 0;
          padding: 0 6px;
          font-size: 100%;
          height: 100%;
        }

        .PhoneInputCountryIcon {
          width: calc(1.4em * 1.5);
          height: 1.4em;
        }

        .PhoneInputCountry {
          margin-right: 0.35em;
        }

        .PhoneInputCountrySelectArrow {
          margin-left: 1em;
          display: block;
          content: "";

          &:focus {
            color: #03b2cb;
          }
        }
      }

      label {
        margin: 10px 0;
        font-weight: 400;
      }

      input[type="text"] {
        outline: none;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 4px;
        padding: 1rem 1.2rem;
        font-size: 100%;
      }
    }

    .submit-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;

      button {
        padding: 1rem;
        font-weight: 400;
        background-color: #3a3a3a;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        letter-spacing: 1px;
        transition: all 0.2s ease-in;

        &:hover {
          background-color: #008060;
        }
      }
    }
  }
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
`;

const SelectContainer = styled.div`
  margin: 10px 0;

  .select-container {
    min-width: 250px;
    height: 50px;
    position: relative;
    margin-top: 8px;
    display: flex;
    align-items: baseline;

    .select-box {
      border: 1px solid rgb(220, 220, 220);
      border-radius: 4px;
      padding: 1em 1.5em;
      width: 100%;
      font-size: 1rem;
      /* background-color: #4d5061; */
      -webkit-appearance: none;
      appearance: none;
      outline: none;
    }
  }

  .icon-container {
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    pointer-events: none;
  }
`;
