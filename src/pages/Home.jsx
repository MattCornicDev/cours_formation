import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AffichageCours from '../components/affichageCours/AffichageCours';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div className='container'>
                    <div className="row">
                        <div>
                            <AffichageCours />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
