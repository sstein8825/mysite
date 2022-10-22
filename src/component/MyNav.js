import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './MyNav.css'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaCode, FaSignInAlt, FaInfo } from 'react-icons/fa';


const links = [
    { href: '/', text: "Home", icon: <FaHome/>},
    { href: '/about', text: 'About', icon: <FaInfo/> },
    { href: '/projects', text: 'Projects', icon: <FaCode/> },
    { href: '/login', text: 'Login', icon: <FaSignInAlt/> },
  ];

const createNavItem = ({ href, text, icon }) => (
    <NavItem>
        <Link as={Link} to={href} className="nav-link"> {icon} {text}</Link>
    </NavItem>
);

export default class MyNav extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  
    render() {
        return (
            <div className="pt-3 myfont">
                <Navbar sticky="top" bg="blue" expand="sm">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
      );
    }
  }