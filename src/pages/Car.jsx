import { Card, Button } from 'react-bootstrap';
import style from '../assets/module-css/styles.module.css';
import pegassiIgnus from '../assets/images/pegassi-ignus.webp';
import pegassiIgnusBack from '../assets/images/pegassi-ignus-back.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Car () {
    return (
        <div className={style.latar}>
        <Card style={{ width: '80rem', marginTop: '2rem' }}>
                    <div style={{ display: 'flex' }}>
                        <Card.Body>
                            <Card.Title style={{ width:'200px' }}>Pegassi Ignus</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    <h2>$2,765,000</h2>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img style={{ width:'40%' }} variant="top" src={pegassiIgnus} /> 
                        <Card.Img style={{ width:'40%' }} variant="top" src={pegassiIgnusBack} />
                    </div>
                    </Card> <br /> 
                    <a href="/"><Button variant="danger">Buy Now !!</Button></a>
        </div>
    )
}

export default Car