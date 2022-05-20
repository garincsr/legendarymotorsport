// import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import style from '../assets/module-css/styles.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import map from '../assets/images/map.webp';
import ig from '../assets/images/instagram.svg';
import fb from '../assets/images/facebook.svg';

function Service () {
    return (
        <div className={style.latar}>
        <Container fluid='md' className={style.latar} style={{ paddingTop: '10px' }}>
            <Row>
                <Col>
                    <Card style={{ width: '50rem', marginTop: '2rem', padding: '1rem' }}>
                        <Card.Body>
                            <Card.Title>Our Location</Card.Title>
                                <Card.Text>
                                    <img style={{ width:'100%' }} src={map} alt="" />
                                </Card.Text>
                        </Card.Body>
                        <a href="https://www.google.com/maps/place/Las+Vegas,+Nevada,+Amerika+Serikat/@36.1246738,-115.4551869,10z/data=!3m1!4b1!4m5!3m4!1s0x80beb782a4f57dd1:0x3accd5e6d5b379a3!8m2!3d36.171563!4d-115.1391009"><Button variant="danger">Google Map View</Button></a>
                    </Card> 
                </Col>
                <Col>
                    <Card style={{ width: '20rem', marginTop: '2rem' }}>
                        <Card.Body>
                            <Card.Title>Contact</Card.Title>
                                <Card.Text>
                                <a href="https://www.instagram.com/"><Button variant="warning"><img src={ig} alt="" />   Instagram</Button></a>
                                </Card.Text>
                                <Card.Text>
                                <a href="https://www.facebook.com/"><Button variant="primary"><img src={fb} alt="" />   Facebook</Button></a>
                                </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
        </Container>
            
        </div>
    )
}

export default Service