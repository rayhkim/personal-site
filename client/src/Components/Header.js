import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/cs">Computer Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/cs">Art</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
