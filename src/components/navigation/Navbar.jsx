import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MattCornicDev from '../../media/Matt-Cornic-Dev.svg'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <div className="row mb-5">
                            <div className="col-md-4 mt-3">
                                <Link to="/" className="navbar-brand">
                                    <img src={MattCornicDev} alt="logo matt cornic" width="150" height="140" />
                                </Link>
                            </div>
                            <div className='col-md-8 mt-3 float-start titre'>
                                <h1>COURS FORMATIONS DEVELOPPEUR D'APPLICATIONS</h1>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
