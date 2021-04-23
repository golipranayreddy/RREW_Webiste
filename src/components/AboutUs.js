import react, {Component} from 'react';
import Header from "../components/Header";
import { Col, Row } from 'react-bootstrap';
import img1 from '../images/img1.jpg';
class AboutUs extends Component{
    render(){
        return(
            <div>
            <Header name="About us"/>
            <div className="container" style={{width:"80%",paddingTop:"20px"}}>

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
                        <hr/>
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
                    
            
                        <hr />
                        <h2>Meet our team!</h2>
                        
                        <Row style={{paddingLeft:"10%",paddingRight:"10%", paddingTop:"2%",paddingBottom:"2%"}}>
                            <Col>
                            
                                <div className="shadows-courses">
                                    <img src={img1} alt="Jane" style={{width:"100%", padding:"0px",margin:"0px" }}/>
                                    <h4>G.Ranga Reddy</h4>
                                    <p className="title">Owner & Founder</p>
                                    <p>example@example.com</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="shadows-courses">
                                        <img src={img1} alt="Jane" style={{width:"100%", padding:"0px",margin:"0px" }}/>
                                        <h4>G.Ranga Reddy</h4>
                                        <p className="title">Owner & Founder</p>
                                        <p>example@example.com</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="shadows-courses">
                                    <img src={img1} alt="Jane" style={{width:"100%", padding:"0px",margin:"0px" }}/>
                                    <h4>G.Ranga Reddy</h4>
                                    <p className="title">Owner & Founder</p>
                                    <p>example@example.com</p>
                                </div>
                            </Col>
                        </Row>
                 
            </div>
            </div>
            
        )
    }
}

export default AboutUs