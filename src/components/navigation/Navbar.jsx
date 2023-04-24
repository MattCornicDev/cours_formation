import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MattCornicDev from '../../media/Matt-Cornic-Dev.svg'

function Navbar() {
    return (
        <>
            <div className='navBarContainer'>
                <div>
                    <Link to="/">
                        <img src={MattCornicDev} alt="logo matt cornic" width="150" height="140" />
                    </Link>
                </div>
                <div>
                    <h1>COURS FORMATIONS DEVELOPPEUR D'APPLICATIONS</h1>
                </div>
            </div>
        </>
    )
}
export default Navbar
