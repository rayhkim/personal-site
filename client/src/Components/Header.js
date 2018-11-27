import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/cs">Page 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/cs">Page 2</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
