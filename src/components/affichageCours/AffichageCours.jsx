import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './affichageCours.css'



export default class AffichageCours extends Component {
    render() {
        return (
            <>
                <div className='container' >
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                    <Link to="/gitCours" className="lien_page_git" >
                        <div className="col">
                            <div className="card h-100">
                                <img src="git.svg.png" className="card-img-top mt-2 mx-auto" alt="logo git" />
                                <div className="card-body">
                                    <h5 className="card-title">GIT</h5>
                                    <p className="card-text">Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</p>
                                </div>
                                
                                <div className="card-footer">
                                    <small className="text-muted">Mise à jour il y a 3 min</small>
                                </div>
                                
                            </div>
                        </div>
                        </Link>
                        <Link to="/nodeCours" className="lien_page_git" >
                        <div className="col">
                            <div className="card h-100">
                                <img src="Node.js_logo.svg.png" className="card-img-top mt-2 mx-auto" alt="logo node JS" />
                                <div className="card-body">
                                    <h5 className="card-title">GIT</h5>
                                    <p className="card-text">Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</p>
                                </div>
                                
                                <div className="card-footer">
                                    <small className="text-muted">Mise à jour il y a 3 min</small>
                                </div>
                                
                            </div>
                        </div>
                        </Link>
                        <div className="col">
                            <div className="card h-100">
                                <img src="html.svg.png" className="card-img-top mt-2 mx-auto" alt="logo html" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">cours HTML.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Mise à jour il y a 3 min</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img src="bootstrap_logo.svg.png" className="card-img-top mt-2 mx-auto" alt="logo bootstrap" />
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
