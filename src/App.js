import React from 'react';
import Bukwild from './Bukwild';
import bukContent from './bukContent.json';
import logo from './abc_logo.svg';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            index : 0
        }
    }

    render(){
        const backgroundUrl = require(`./backgrounds/${bukContent.pages[this.state.index].blocks[0].background}`);
        return(
            <div style={{
                backgroundImage: `url(${backgroundUrl.default})`
                }} className="main-container">
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