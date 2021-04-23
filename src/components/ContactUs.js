import react, {Component} from 'react';
import Header from "../components/Header";
import {Row, Col } from 'react-bootstrap';
import FormPage from './FormPage';
import { GiPhone,GiCloudDownload } from "react-icons/gi";

import { Icon, InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt';
import { BsFillEnvelopeFill,BsClockFill } from "react-icons/bs";
class ContactUs extends Component{
    render(){
        return(
            <div>
            <Header name="Contact us"/>
            <div className="container" style={{ width:"80%", paddingTop:"20px" }}>
                <Row>
                    <Col>
                        <h2>Contact info :</h2>
                        <hr/>
                        <p><Icon icon={mapMarkerAlt} style={{color:"Red"}}/> &nbsp;
                            ADDRESS: 7-107/2, Manneguda Village, RR Dist. Hyderabad-501510
                        </p>
                        <hr/>
                        <p><GiPhone /> &nbsp;+91 9666551202 , +91 9700346744 , +91 9440731988</p>
                        <hr/>
                        <p><BsFillEnvelopeFill /> &nbsp; MailID: rangareddyengineeringworks_rre@yahoo.com</p>
                        <hr/>
                        <p><BsClockFill/> &nbsp; Timings: Monday - Saturday 9:00 am to 18:00 pm IST </p>
                        <hr/>
                    </Col>
                    <Col>
                        <h2>Get in touch!</h2>
                        <FormPage />
                    </Col>
                </Row>
            </div>
            </div>
            
        )
    }
}

export default ContactUs