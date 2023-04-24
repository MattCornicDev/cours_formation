import React, { Component } from 'react'
import './footer.css'


export default class Footer extends Component {
  render() {

    const anneeCourrante = new Date().getFullYear();

    return (
      <footer>
        <div>
          <p className='footer'>© {anneeCourrante} Copyright | Matt Cornic Dev</p>
        </div>
      </footer>
    );
  }

}

