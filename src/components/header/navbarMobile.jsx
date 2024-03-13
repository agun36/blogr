import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo.svg';
import CloseBtn from '../../assets/images/icon-close.svg';
import OpenBtn from '../../assets/images/icon-hamburger.svg';
import { Accordion, AccordionItem, Nav, Navbar } from 'react-bootstrap';

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <nav>
            <Nav className='flex-column'>
                <div className='d-flex justify-content-between align-items-center '>
                    <Navbar.Brand>
                        <img src={logo} alt="blogr logo" />
                    </Navbar.Brand>
                    <div className=''>
                        {
                            isOpen
                                ? <img src={CloseBtn} alt="close button" onClick={toggle} />
                                : <img src={OpenBtn} alt="open button" onClick={toggle} />
                        }
                    </div>
                </div>
                <div>
                    {
                        isOpen && (
                            <Nav className='bg-menu'>
                                <div style={{margin:"auto"}}> 
                                    <Accordion style={{margin:"auto", width:"9rem", border:"none", backgroundColor: 'transparent', textAlign:"center"}}>
                                        <Accordion.Item style={{border:"none", backgroundColor: 'transparent', textAlign:"center"}} eventKey="0">
                                            <Accordion.Header className='accordion-header font-size-16' style={{margin:"auto", width:"9rem", border:"none", backgroundColor: 'transparent'}}>Product</Accordion.Header>
                                            <Accordion.Body style={{lineHeight:"3rem", textAlign:"center", paddingLeft:"5rem", paddingRight:"5rem"}} >
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Overview
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Pricing
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Marketplace
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Features
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Integrations
                                                </AccordionItem>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" style={{border:"none", backgroundColor: 'transparent'}}>
                                            <Accordion.Header>Company</Accordion.Header>
                                            <Accordion.Body style={{lineHeight:"3rem", textAlign:"center", paddingLeft:"5rem", paddingRight:"5rem"}}>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    About
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Team
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Blog
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Careers
                                                </AccordionItem>
                                            </Accordion.Body>
                                        </Accordion.Item >
                                        <Accordion.Item eventKey="2" style={{border:"none", backgroundColor: 'transparent'}}>
                                            <Accordion.Header className='font-size-16 text-center'>Connect</Accordion.Header>
                                            <Accordion.Body style={{lineHeight:"3rem", textAlign:"center", paddingLeft:"12rem", paddingRight:"12rem"}}>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Contact
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    Newsletter
                                                </AccordionItem>
                                                <AccordionItem className='font-size-16' style={{border:"none", backgroundColor: 'transparent'}}>
                                                    LinkedIn
                                                </AccordionItem>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                                <Nav className='flex-column align-items-center details'>
                                    <Nav.Link href="#deets" className='font-size-16 btn-login'>Login</Nav.Link>
                                    <Nav.Link className='btn-sign_up' eventKey="disabled" disabled>
                                        Sign Up
                                    </Nav.Link>
                                </Nav>
                            </Nav>
                        )
                    }
                </div>
            </Nav>
        </nav>
    );
}

export default NavbarMobile;
