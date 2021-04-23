import react, {Component} from 'react';
// import logo from '../images/logo.jpg';
import "../CSS/Clients.css";
// import homePageImage from '../images/homePageImage.jpg';
import img1 from '../images/aboutCompany.JPG';
import img2 from '../images/companyClients.JPG';
class Clients extends Component{
    render(){
        return(
            // style={{backgroundColor:"black"}}
            <div className="row">
                <div className="column1">
                    <img src={img1} alt="Snow" style={{width:'100%'}} />
                </div>
                <div className="column2">
                    <img src={img2} alt="Forest" style={{width:'100%'}}/>
                </div>
                
            </div>
        )
    }
}
export default Clients