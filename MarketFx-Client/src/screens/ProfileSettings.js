import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Header from "../components/Header";
import Footer from "../components/AppFooter";
import SubmitButton from "../components/SubmitButton";
import { MarketFxApi } from "../Api/MarketFxApi";

export default function ProfileSettings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [user, setUser] = useState("");

  //   fetch('http://localhost:5000/profile/profile')
  //     .then(response => response.json())
  //     .then(data => {
  //       setName(data.name);
  //       setEmail(data.email);
  //       setPassword(data.password);
  //       setMobile(data.mobile);
  //     })
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(async () => {
    const response = await MarketFxApi.get("/user/me");
    setUser(response.user);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await MarketFxApi.patch("/user/update", {
      name,
      password,
      email,
      mobile,
    });

    setUser(response.info);
  };

  return (
    <section style={{ backgroundColor: "white", flex: 3 }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <br></br>
                <p className="text-muted mb-1">{user && user.name}</p>
                <br></br>
                <p className="text-muted mb-4">Islamabad, Pakistan</p>
                <br></br>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="h-80">
              <MDBCardBody>
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  autoComplete={"off"}
                >
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        placeholder={user.name}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="email"
                        placeholder={user.email}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Password</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        placeholder={user.mobile}
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <div className="text-center">
                    <button
                      style={{ marginBottom: 10 }}
                      type="submit"
                      className="btn btn-primary w-100 theme-btn mx-auto"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <br></br>
    </section>
  );
}
