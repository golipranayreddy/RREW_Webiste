import react, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import img14 from "../images/img14.jpg"
// import './Navbar.css'
import { GiPhone,GiCloudDownload } from "react-icons/gi";
import pdf from '../images/pdf.pdf';
import "../CSS/HomePageHeader.css";

import { Icon, InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt';
class HomePageHeader extends Component{
    render(){
        return(
            <div className="row" style={{backgroundImage:`url(${img14})`}}>
                <div className="column1">
                    <p style={{color:"white"}}><Icon icon={mapMarkerAlt} style={{color:"Red"}}/> &nbsp; ADDRESS
                            7-107/2, Manneguda Village, <br/>
                            RR Dist. Hyderabad-501510</p>
                </div>
                <div className="column1">
                    <p style={{color:"white"}}><GiPhone /> +91 9666551202 , +91 9700346744 ,+91 9440731988</p>
                </div>
                <div className="column2">
                    <h4 style={{color:"white", fontFamily:"TimesNewRoman"}}><GiCloudDownload /> 
                            <a href={pdf} style={{fontWeight:"bolder"}} download> Download Browcher</a>
                        </h4>
                </div>
                
            </div>
        )
    }
}
export default HomePageHeader;