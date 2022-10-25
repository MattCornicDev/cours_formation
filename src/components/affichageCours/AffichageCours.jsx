import React, { Component } from 'react'



export default class AffichageCours extends Component {
    render() {
        return (
            <>
                <div className='container' >
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src='/git.png' className="img-fluid rounded-start" alt="logo git" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cours git</h5>
                                    <p className="card-text">Cours git pour débutant.</p>
                                    <p className="card-text"><small className="text-muted">Débutant</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
