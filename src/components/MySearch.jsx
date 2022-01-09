import { Component } from 'react';
import { Container, Badge, Row, Col } from "react-bootstrap";
import { HiSearchCircle } from 'react-icons/hi';

class MySearch extends Component {
    render() {
        return (
            <div className='search-bar'>
            <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="dark">
                <Badge pill className="pill-nav">
                    <Row>
                        <Col xs={10}>
                            <Row>
                                <p>Location</p>
                                <p>Check in</p>
                                <p>Check out</p>
                                <p>Guests</p>
                            </Row>
                            <Row>
                                <p>Where are you going?</p>
                                <p>Add dates</p>
                                <p>Add dates</p>
                                <p>Add guests</p>
                            </Row>
                        </Col>
                        <Col xs={2}>
                            <HiSearchCircle style={{ fontSize: "50px", marginTop:"3px" }} />
                        </Col>
                    </Row>
                </Badge>
            </Container>
            </div>
        )
    }
}

export default MySearch