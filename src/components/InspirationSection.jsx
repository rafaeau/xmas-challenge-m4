import { Component } from 'react';
import { Container, Card } from "react-bootstrap";
import rio from "../assets/rio.jpeg";
import berlin from "../assets/berlin.jpg";
import paris from "../assets/paris.jpg";
import barcelona from "../assets/barcelona.jpg"

class InspirationSection extends Component {
    render() {
        return (
            <Container>
                <h2 className="ml-n3 mt-5">Inspiration for your next trip</h2>
                <div className='justify-content-between d-flex mx-n3 mt-3 card-city'>
                    <Card style={{ width:'18rem', height:'22rem', marginRight:'20px', borderRadius:'15px', overflow:'hidden', backgroundColor:'rgb(188,26,110)' }} >
                        <Card.Img variant="top" src={rio} height={170}/>
                        <Card.Body>
                            <Card.Title><h4>Rio de Janeiro</h4></Card.Title>
                            <Card.Text>
                            9978 kilometers away
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:'18rem', height:'22rem', marginRight:'20px', borderRadius:'15px', overflow:'hidden', backgroundColor:'rgb(217,59,48)' }}>
                        <Card.Img variant="top" src={berlin} height={170}/>
                        <Card.Body>
                            <Card.Title><h4>Berlin</h4></Card.Title>
                            <Card.Text>
                            5 kilometers away
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:'18rem', height:'22rem', marginRight:'20px', borderRadius:'15px', overflow:'hidden', backgroundColor:'rgb(222,49,81)' }}>
                        <Card.Img variant="top" src={paris} height={170}/>
                        <Card.Body>
                            <Card.Title><h4>Paris</h4></Card.Title>
                            <Card.Text>
                            878 kilometers away
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width:'18rem', height:'22rem', borderRadius:'15px', overflow:'hidden', backgroundColor:'rgb(204,45,74)' }}>
                        <Card.Img variant="top" src={barcelona} height={170} />
                        <Card.Body>
                            <Card.Title><h4>Barcelona</h4></Card.Title>
                            <Card.Text>
                            1499 kilometers away
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        )
    }
}
export default InspirationSection