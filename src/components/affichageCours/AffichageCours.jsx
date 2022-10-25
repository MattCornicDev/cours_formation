import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './affichageCours.css'



export default class AffichageCours extends Component {
    render() {
        return (
            <>
                <div className='container' >
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <Link to="/gitCours" className="lien_page_git" >
                                <img src="git.png" className="card-img-top mt-2" alt="logo git" />
                                <div className="card-body">
                                    <h5 className="card-title">GIT</h5>
                                    <p className="card-text">Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="html.png" className="card-img-top mt-2" alt="logo html" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="bootstrap.png" className="card-img-top mt-2" alt="logo bootstrap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
