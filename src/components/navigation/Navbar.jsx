import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-md-6 mt-3">
                                <Link to="/" className="navbar-brand">
                                    <img src="Matt-Cornic-Dev.svg" alt="logo matt cornic" width="150" height="140" />
                                </Link>
                            </div>
                            <div className='col-md-6 mt-5 titre'>
                                <h1>COURS FORMATIONS DEVELOPPEUR D'APPLICATIONS</h1>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
