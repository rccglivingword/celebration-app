import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormPage from "./Components/Forms/Forms";
import Logo from './Components/Framework/Logo';
import AppNavBar from './Components/Framework/Navbar';



const App = () => {
    return (
        <Container fluid = "md" >
            <Row className='ma5'>
                <AppNavBar />
            </Row>
            <Row>
                <Col md="3">
                    <Logo/>
                </Col>
                <Col md="9">
                    <FormPage />
                </Col>
            </Row>
            
        </Container>
    )
}
export default App