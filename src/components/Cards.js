import react, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import img1 from '../images/img1.jpg';
// import "../CSS/homePage.css";
import "../CSS/Cards.css";
class Cards extends Component{
    render(){
        return(
            // style={{backgroundColor:"black"}}
                <div className="row">
                    
                    <div className="column">
                        <Card>
                            <div className="shadow p-1 mb-1" style={{ height: "auto" }}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body className = "CardBody">
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className = "CardFooter">
                                    <small className="InnerText">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                    <div className="column">
                        <Card>
                            <div className="shadow p-1 mb-1" style={{ height: "auto" }}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body className = "CardBody">
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className = "CardFooter">
                                    <small className="InnerText">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                    <div className="column">
                        <Card>
                            <div className="shadow p-1 mb-1" style={{ height: "auto" }}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body className = "CardBody">
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className = "CardFooter">
                                    <small className="InnerText">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                    <div className="column">
                        <Card>
                            <div className="shadow p-1 mb-1" style={{ height: "auto" }}>
                                <Card.Img variant="top" src={img1} />
                                <Card.Body className = "CardBody">
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className = "CardFooter">
                                    <small className="InnerText">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </div>
                        </Card>
                    </div>
                   
                </div>
        )
    }
}
export default Cards