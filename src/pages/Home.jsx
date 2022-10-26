import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AffichageCours from '../components/affichageCours/AffichageCours';
import Navbar from '../components/navigation/Navbar';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <Navbar />
                        </div>
                        <div className="col-6">
                            <h1>Cours succins de git et github</h1>
                        </div>
                        <div>
                            <AffichageCours />
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
