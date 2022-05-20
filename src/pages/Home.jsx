import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import style from '../assets/module-css/styles.module.css';
import pegassiIgnus from '../assets/images/pegassi-ignus.webp';
import grottiFuria from '../assets/images/grotti-furia.webp';
import ubermachtChyper from '../assets/images/ubermacht-chyper.webp'
import overflodTyrant from '../assets/images/overflod-tyrant.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home () {
    return (
        <div className={style.body} style={{ paddingTop: '10px', paddingBottom: '10px'  }}>
            <h1 className={style.h1home}>$ Available Cars $</h1>
        <Container fluid='md' className={style.latar} style={{ paddingTop: '10px' }}>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '2rem' }}>
                        <Card.Img variant="top" src={pegassiIgnus} />
                            <Card.Body>
                                <Card.Title>Pegassi Ignus</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="/car"><Button variant="danger">See Details</Button></a>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '2rem' }}>
                        <Card.Img variant="top" src={grottiFuria} />
                            <Card.Body>
                                <Card.Title>Grotti Furia</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://gta.fandom.com/wiki/Furia"><Button variant="danger">See Details</Button></a>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '2rem' }}>
                        <Card.Img variant="top" src={ubermachtChyper} />
                            <Card.Body>
                                <Card.Title>Übermacht Cypher</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://gta.fandom.com/wiki/Cypher"><Button variant="danger">See Details</Button></a>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', marginTop: '2rem' }}>
                        <Card.Img variant="top" src={overflodTyrant} />
                            <Card.Body>
                                <Card.Title>Överflöd Tyrant</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <a href="https://gta.fandom.com/wiki/Tyrant"><Button variant="danger">See Details</Button></a>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home