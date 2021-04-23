import react, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from '../images/img1.jpg';
class AboutUs extends Component{
    render(){
        return(
            <div className="container" style={{width:"80%",paddingTop:"20px"}}>
                <Row>
                    <Col>
                        <h2>Company Overview</h2>
                        <p>
                            Ranga Reddy Engineering Works is an is ISO 9001-2008 certified company, established in the year 1989. 
                            We are Manufacturer & Supplier of Poultry Feed Equipments like Poultry Silo, Feed Tankers, Feed Conveyor, etc. 
                            Our company is well-known for offfering various kind of products for the poultry industry.
                        </p>
                        <p>
                            The offered equipment are high in demand across the nation as these are in-tandem with quality standards 
                            laid by international authorities. To ensure the same, we carry out the manufacturing process by using 
                            optimum quality raw material. Further, to ensure the quality of raw material, we procure it from the most 
                            reliable vendors of the industry and test it before usage.
                        </p>
                        <h3>Our Main Range Of Products Include:</h3>
                        <ul>
                            <li>Poultry Feed Equipment.</li>
                            <li>Poultry Feed Transport System.</li>
                            <li>Precision Rotor.</li>
                            <li>Feed Tanker.</li>
                            <li>Trolley System.</li>
                            <li>Storage Bin & Storage Silo.</li>
                            <li>Bucket Elevator.</li>
                        </ul>
                    </Col>
                    <div className = "vertical" style={{borderLeft: "6px solid black",
            height: "700px",
            position:"absolute", 
            left: "50%" }}></div> 
                    <Col>
                        <h2>Meet our team!</h2>
                        <Row>
                            <Col style={{marginLeft:"27%"}}>
                                <div className="card" style={{width:"62%", alignContent:"center"}}>
                                    <img src={img1} alt="Jane" style={{width:"100%"}}/>
                                        <h4>G.Ranga Reddy</h4>
                                        <p className="title">Owner & Founder</p>
                                        <p>example@example.com</p>
                                </div>
                            </Col>
                            {/* <Col>
                                <div className="card">
                                    <img src={img1} alt="Jane" style={{width:"100%"}}/>
                                        <h4>G.Ranga Reddy</h4>
                                        <p className="title">Owner & Founder</p>
                                        <p>example@example.com</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <img src={img1} alt="Jane" style={{width:"100%"}}/>
                                        <h4>G.Sandeep Reddy</h4>
                                        <p className="title">Co-Owner</p>
                                        <p>example@example.com</p>
                                </div>
                            </Col> */}
                        </Row>
                        <Row>
                            <Col>
                                <div className="card">
                                    <img src={img1} alt="Jane" style={{width:"100%"}}/>
                                    {/* <div className="container"> */}
                                        <h4>G.Ranga Reddy</h4>
                                        <p className="title">Owner & Founder</p>
                                        <p>example@example.com</p>
                                    {/* </div> */}
                                </div>
                            </Col>
                            <Col>
                                <div className="card">
                                    <img src={img1} alt="Jane" style={{width:"100%"}}/>
                                    {/* <div className="container"> */}
                                        <h4>G.Sandeep Reddy</h4>
                                        <p className="title">Co-Owner</p>
                                        <p>example@example.com</p>
                                    {/* </div> */}
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default AboutUs