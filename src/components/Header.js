import react, {Component} from 'react';
import img14 from "../images/img14.jpg"
import '../CSS/Header.css'
class Header extends Component{
    render(){
        return( 
            <div className=".container-fluid header-image" style={{backgroundImage:`url(${img14})`, height:"150px"}}>
                <div className="outer-spacing">
                    <div className="header-title-outer box">
                    <strong>
                    <div className="vl"></div>
                        <h5 className="header-title" style={{color:"white"}}>{this.props.name}</h5>
                    </strong>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header