import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function App() {
   
  return (
    <MDBDropdown style={{marginLeft:30}}>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
      <FontAwesomeIcon icon={faUser} />
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link href='/profile'>Profile</MDBDropdownItem>
        <MDBDropdownItem link href=''>My Packages</MDBDropdownItem>
        <MDBDropdownItem link href=''>Add Payment Method</MDBDropdownItem>
        <MDBDropdownItem link href=''>Watchlist</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}
