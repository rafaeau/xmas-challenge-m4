import { Component } from 'react';
import { Container, Card, Button } from "react-bootstrap";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";


class DiscoverySection extends Component {
    render() {
        return (
            <Container>
                <h2 className="ml-n3 mt-5">Discover Airbnb Experiences</h2>
                <div className='justify-content-between d-flex mx-n3 mt-3 card-city mb-5'>
                    <Card className="bg-light text-black" style={{ color:'black', width: '35rem', height: '35rem', marginRight: '20px', borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Img src={img1} alt="Card image" style={{objectFit:'cover', width: '100%', height:'100%', objectPosition:'50% 0%'}}/>
                        <Card.ImgOverlay>
                            <Card.Title>
                                <h1>Things to do <br />
                                on your trip</h1>
                                <Button variant="light" id="button-img"><b>Experiences</b></Button>
                                </Card.Title>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-light text-white" style={{ color:'black', width: '35rem', height: '35rem', borderRadius: '15px', overflow: 'hidden' }}>
                        <Card.Img src={img2} alt="Card image" style={{objectFit:'cover', width: '100%', height:'100%', objectPosition:'50% 0%'}}/>
                        <Card.ImgOverlay>
                            <Card.Title id='text-big-card'>
                                <h1>Things to do<br />
                                from home</h1>
                                <Button variant="light" id="button-img"><b>Online experiences</b></Button>
                                </Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Container>
        )
    }
}

export default DiscoverySection