import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="Matt-Cornic-Dev.svg" alt="logo matt cornic" width="150" height="140"/>
                        </a>
                    </div>
                </nav>
            </>
        )
    }
}
