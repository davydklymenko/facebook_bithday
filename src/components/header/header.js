import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    handleToggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    render() {
        const { isMenuOpen } = this.state;
        return (
            <>
                <header>
                    <div className="header">
                        {isMenuOpen ? (
                            <div className="menu-close">
                                <i onClick={this.handleToggleMenu} className="fa-solid fa-xmark" style={{color: '#0e60e4'}}></i>
                            </div>
                        ) : (
                            <div className="menu-close">
                               <i onClick={this.handleToggleMenu} className="fa-solid fa-bars" style={{color: '#0e60e4'}}></i>
                            </div>
                        )}

                        <li><a href="#">Home</a></li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="logo_facebook"></img>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Celebrate</a></li>
                    </div>

                    <div className={isMenuOpen ? "dropdown_menu open" : "dropdown_menu"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Celebrate</a></li>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;