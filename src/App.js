import React from 'react';
import Bukwild from './Bukwild';
import bukContent from './data/bukContent.json';
import logo from './abc_logo.svg';
var slide_one = require('./backgrounds/slide_one.jpg');
var slide_two =  require('./backgrounds/slide_two.jpg');
var slide_three  = require('./backgrounds/slide_three.jpg');

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            index : 0
        }
    }
 
    render(){
        const backgroundUrl = bukContent.pages[this.state.index].blocks[0].background.split('.')[0];
        
        return(
            <div style={{
                backgroundImage: `url(${eval(backgroundUrl).default})`
                }} className="main-container">
                <img src='./backgrounds/slide_one.jpg' alt="hi" />
                <div className="top-ui">
                    <div className="logo-contact-box">
                        <img id="logo" src={logo} alt="abc logo for website"/>
                        <div id="contact-button" >Contact Us</div>
                    </div>
                    <div onClick={() => this.setState({index: 0})} className="nav-link">Industries</div>
                    <div onClick={() => this.setState({index: 1})} className="nav-link">Services</div>
                    <div onClick={() => this.setState({index: 2})} className="nav-link">About Us</div>
                </div>
                <Bukwild index={this.state.index} />
            </div>
        );
    }
}

export default App;