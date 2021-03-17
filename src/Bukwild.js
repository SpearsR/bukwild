import React from 'react';
import bukContent from './bukContent.json';
import arrow from './right-arrow.svg';
class Bukwild extends React.Component{

    componentDidMount(){
        document.getElementById('test').className += " fade-in";
        const animated = document.querySelector('.fade-in');
        animated.addEventListener('animationend', () => {
            document.getElementById('test').classList.remove('fade-in');
          });
    }
    
    componentDidUpdate(){
        document.getElementById('test').className += " fade-in";
        const animated = document.querySelector('.fade-in');
        animated.addEventListener('animationend', () => {
            document.getElementById('test').classList.remove('fade-in');
        });
    }
    
    componentWillUnmount(){
        document.getElementById('test').classList.remove('fade-in');
    }


    render(){
     return(
            <>  
                {/*Here is the middle headline bukContent*/}
                <div id="test" className="headings">
                    <div className="headline">{bukContent.pages[this.props.index].blocks[0].headline}</div>
                    <div className="subhead">{bukContent.pages[this.props.index].blocks[0].subhead}</div>
                </div>

                {/*Here is the CTA*/}
                <div className="cta-box">
                    <div className="cta-text">{bukContent.pages[this.props.index].blocks[0].cta}</div>
                    <div className="lets-talk-button">
                        <span className="LETS-TALK">LET'S TALK.</span>
                        <img src={arrow} alt="arrow icon"/>
                    </div>
                </div> 
            </>
        );
    }
}

export default Bukwild;

