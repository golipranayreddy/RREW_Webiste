import { Component } from "react";
import react, {component, useState} from 'react';
import logo from '../images/Capture.JPG';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Navbar.css'
import { GiPhone,GiCloudDownload } from "react-icons/gi";
import pdf from '../images/pdf.pdf';
import ReorderIcon from '@material-ui/icons/Reorder'

import { Icon, InlineIcon } from '@iconify/react';
import mapMarkerAlt from '@iconify-icons/fa-solid/map-marker-alt';


function Navbar(){
        const [showLinks, setShowLinks] = useState(false);
        return(
            <div>
                <nav className="NavbarItems">
                    <div className = "leftSide">
                        <img className="navbar-logo" src={logo}/>
                    </div>
                    <div className = "rightSide">
                        <div className = "nav-menu" id = {showLinks ? "hidden" : ""}>
                                <a className='nav-links' href='/'>
                                Home
                                </a>
                                <a className='nav-links' href='/Products'>
                                Products
                                </a>
                                <a className='nav-links' href='/AboutUs'>
                                About Us
                                </a>
                                <a className='nav-links' href='/ContactUs'>
                                Contact Us
                                </a>
                                <a className='nav-links' href='/'>
                                Gallery
                                </a>
                        </div>
                        <button class="btn btn-success btn-lg float-right" onClick = {() => setShowLinks(!showLinks)}> 
                            <ReorderIcon /> 
                        </button>
                    </div>
                </nav>

                
            </div>
        )
    }


export default Navbar;