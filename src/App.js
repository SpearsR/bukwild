import React from 'react';
import Bukwild from './Bukwild';
import logo from './abc_logo.svg';
import bukContent from './data/bukContent.json';

//Adds static image objects into an array for later use
var images = bukContent.pages.map(value => require(`./backgrounds/${value.blocks[0].background}`));
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            index : 0
        }
    }
 
    render(){
        return(
            //Here I assign the backgrounds
            <div style={{
                backgroundImage: `url(${images[this.state.index].default})`
                }} className="main-container background-transition">
                <div className="top-ui">
                    <div className="logo-contact-box">
                        <img id="logo" className="fade-left" src={logo} alt="abc logo for website"/>
                        <div id="contact-button" className="fade-right">Contact Us</div>
                    </div>
                    <div onClick={() => this.setState({index: 0})} className="nav-link fade-left">Industries</div>
                    <div onClick={() => this.setState({index: 1})} className="nav-link fade-left">Services</div>
                    <div onClick={() => this.setState({index: 2})} className="nav-link fade-left">About Us</div>
                </div>
                <Bukwild index={this.state.index} />
            </div>
        );
    }
}

export default App;