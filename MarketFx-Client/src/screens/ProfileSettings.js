import React, { useState, useEffect } from 'react';
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
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Header from '../components/Header';
import Footer from '../components/AppFooter';
import SubmitButton from '../components/SubmitButton';

export default function ProfileSettings() {
  const [name, setName] = useState('Maaz Haroon');
  const [email, setEmail] = useState('maazharoon147@gmail.com');
  const [password, setPassword] = useState('bakhtawar420');
  const [mobile, setMobile] = useState('+92-3455105522');

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
        setMobile(data.mobile);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    // Update the profile data by making a POST request to the server
    fetch('http://localhost:3001/profile', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, mobile }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  return (
    <section style={{ backgroundColor: 'white', flex: 3}}>
    <Header></Header>

      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <br></br>
                <p className="text-muted mb-1">Maaz Haroon</p><br></br>
                <p className="text-muted mb-4">Islamabad, Pakistan</p><br></br>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="h-80">
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
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
                        value={email}
                        onChange={event => setEmail(event.target.value)}
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
                        onChange={event => setPassword(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <input
                        type="text"
                        value={mobile}
                        onChange={event => setMobile(event.target.value)}
                        className="form-control"
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  </form>
                  </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <br></br>
      <SubmitButton></SubmitButton>
      <Footer style={{marginTop:20}}></Footer>
    </section>
  );
}

