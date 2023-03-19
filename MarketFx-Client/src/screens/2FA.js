import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./../utilities/Forms";
import axios from "axios";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 84%;
  margin: 50px auto;
  border: 1px solid #eee;
  padding: 11px;
  border-radius: 4px;
`;


const Twofactorauth = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [validate, setValidate] = useState({});

  const handleGenerate = async () => {
    try {
      const res = await axios.post('user/api/2fa/generate', { email });
      setMessage(`2FA setup successful. Your secret: ${res.data.secret}`);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const handleVerify = async () => {
    try {
      await axios.post('user/api/2fa/verify', { otp });
      setMessage('Token verified');
    } catch (err) {
      setMessage(err.response.data.message);
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
            <p>Two-Factor Authentication</p>
            <div className="auth-form-container text-start">
              <form
                className="auth-form"
                method="POST"
                autoComplete={"off"}
              >
                <div className="email mb-3">
                  <input
                    type="email"
                    className={`form-control ${
                      validate.validate && validate.validate.password
                        ? "is-invalid "
                        : ""
                    }`}
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.password
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.password
                      ? validate.validate.email[0]
                      : ""}
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      validate.validate && validate.validate.text
                        ? "is-invalid "
                        : ""
                    }`}
                    id="token"
                    name="token"
                    value={otp}
                    placeholder="Token"
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <div
                    className={`invalid-feedback text-start ${
                      validate.validate && validate.validate.text
                        ? "d-block"
                        : "d-none"
                    }`}
                  >
                    {validate.validate && validate.validate.text
                      ? validate.validate.text[0]
                      : ""}
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleGenerate}
                    className="btn btn-primary w-100 theme-btn mx-auto mb-2"
                  >
                    Send OTP
                  </button>
                  <br></br>
                </div>
                

                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleVerify}
                    className="btn btn-primary w-100 theme-btn mx-auto"
                  >
                    Verify
                  </button>
                </div>
                
              </form>

              <hr />
              <div className="auth-option text-center pt-2">
                <Link className="text-link" to="/login">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Twofactorauth;
