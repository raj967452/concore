import React from 'react';
import { NavLink } from "react-router-dom";

import headerLink from '../../data/header.json';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            header: headerLink,
        }
    }
    render() {
        const links = this.state.header.menu;
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-md navbar-light nav-header col-md-12">
                            <div className="menu-holder">
                                <NavLink to="/">
                                    <img className="logo" src={this.state.header.logoSrc} alt="Concore" />
                                </NavLink >
                            </div>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-icon">
                                    <img src={this.state.header.hamburguer} alt="Menu" />
                                </span>
                            </button>
                            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    {links.map(function (menu, index) {
                                        return (
                                            <li key={index}>
                                                <NavLink to={menu.link} activeClassName="active" className="link">{menu.title}</NavLink>
                                            </li>
                                        )
                                    })}                              
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
};
export default Header;