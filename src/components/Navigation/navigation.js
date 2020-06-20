import React, { Component } from "react";
import logo from "./images/logo.png"
import "../styles.css"
import "../../index.js"
class Navigation extends Component {
    constructor(props){
        super();
        this.state = {
            open: true
        }
    }

    changeOpen = () => {
        this.setState({open: !this.state.open})
    }
    
    render(){
        console.log(this.state.open)
        return(
            <header>
            
                <nav>
                    <div className="nav-top">
                    <span className="logo"> <img src={logo} alt="sony-logo"/></span>
                    <a href="/" className="sign-in">Sign in</a>
                    <i className="fas fa-search"></i>
                    </div>

                    <ul className={this.state.open ? "": "nav-list"}>
                        {this.state.open ? 
                         <button aria-label="Close navigation" className="open-nav" onClick={this.changeOpen}>&#9776;</button>:
                         <button aria-label="Close navigation" className="close-nav" onClick={this.changeOpen}>&times;</button>
                        }
                        
                   
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">Games<li className="nav-item"></li></a>
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">Hardware<li className="nav-item"></li></a>
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">Services<li className="nav-item"></li></a>
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">News<li className="nav-item"></li></a>
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">Shop<li className="nav-item"></li></a>
                        <a className={this.state.open ? "nav-link-hide": "nav-link"} href="/">Help<li className="nav-item"></li></a>
                    </ul>
                </nav>



            </header>
        )
       

        
    }
    
    
}

export default Navigation