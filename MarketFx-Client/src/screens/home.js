import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { InputGroup, Form } from "react-bootstrap";

import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="Header">
        <div className="Logo">
          <p>MarketFx</p>
        </div>
        <div className="func">
          <div className="search">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <FaSearch />{" "}
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="logbuttons">
            <button className="SignUp btn btn-primary mr-4">SignUp</button>
            <button className="Login btn btn-outline-primary ml-5">
              Login
            </button>
          </div>
        </div>
      </div>
      <nav></nav>
    </div>
  );
};
export default Home;
