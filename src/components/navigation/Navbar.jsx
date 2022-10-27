import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img src="Matt-Cornic-Dev.svg" alt="logo matt cornic" width="150" height="140"/>
                        </Link>
                        <h1>COURS FORMATIONS DEVELOPPEUR D'APPLICATIONS</h1>
                    </div>
                </nav>
            </>
        )
    }
}
