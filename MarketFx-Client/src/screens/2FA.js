import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "./../utilities/Forms";
import axios from "axios";
import styled from "styled-components";
import { MarketFxApi } from "../Api/MarketFxApi";

const StyledContainer = styled.div`
  width: 84%;
  margin: 50px auto;
  border: 1px solid #eee;
  padding: 11px;
  border-radius: 4px;
`;

const TwoFa = () => {
  
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/user/generate-otp", { email });
      alert("An email has been sent with instructions to reset your password.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <StyledContainer className="row g-0 auth-wrapper">
      <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
        {/* <div className="auth-background-holder"></div>
        <div className="auth-background-mask"></div> */}
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
          alt="login form"
          className="rounded-start w-100"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
        <div className="d-flex flex-column align-content-end">
          <div className="auth-body mx-auto">
            <p>Two Factor Authentication</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                onSubmit={handleSubmit}
                autoComplete={"off"}
                
              >
                <div className="password mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.pass
                        ? "is-invalid "
                        : ""
                    }`}
                    id="otp"
                    name="otp"
                    value={email}
                     placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.pass
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.pass
                      ? validate.validate.pass[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Send Email
                  </button>
                </div>
              </form>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default TwoFa;
