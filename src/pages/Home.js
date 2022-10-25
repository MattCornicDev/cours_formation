import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AffichageCours from '../components/affichageCours/AffichageCours';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <h1>git et github par Rarib LAAMIMAT</h1>
                </div>
                <div>
                    <AffichageCours />
                </div>
            </>
        )
    }
}
