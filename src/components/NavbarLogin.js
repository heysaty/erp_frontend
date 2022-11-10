import React from 'react';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  // const navigate = useNavigate();

  return(
    <>
    
      <Navbar bg="primary" variant="light">
        <Container>
          <Link><Navbar.Brand >ERP</Navbar.Brand></Link>
          
         
        </Container>

      </Navbar>
    </>




  );
}

export default ColorSchemesExample;