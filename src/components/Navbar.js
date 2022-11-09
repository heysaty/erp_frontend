import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import axios from "axios";


function ColorSchemesExample() {
  // const navigate = useNavigate();

  const  handleSubmit =()=> {
  
    // const token = localStorage.getItem('access_token');
    localStorage.removeItem('access_token');
    axios.put('http://127.0.0.1:8000/logout')
        // .then(response => this.setState({ updatedAt: response.data.updatedAt }));

 
    // navigate('/');
    alert("Logout Successfull")

  }


  return(
    <>
      <Navbar bg="primary" variant="light">
        <Container>
          <Link to="/home"><Navbar.Brand >ERP</Navbar.Brand></Link>
          <Nav className="me-auto">
          <Link to="/leaves"><Navbar.Brand >Leaves</Navbar.Brand></Link>
          <Link to="/leaves"><Navbar.Brand >Apply Leaves</Navbar.Brand></Link>
          <Link to="/signup"><Navbar.Brand >Create Account</Navbar.Brand></Link>
          <Link to="/"><Navbar.Brand onClick={handleSubmit} >Logout</Navbar.Brand></Link>

          
            
          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;