import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'

function ApiRestFull() {
    return (
        <>
            <Navbar />
            <h1>API RestFull</h1>

            <p>Ajoutons une route method get()</p>
            <pre>
                <code>
                    const express = require("express") <br />
                    const bodyParser = require("body-parser") <br />
                    const ejs = require('ejs') <br />
                    const mongoose = require('mongoose') <br /><br />

                    const app = express() <br /><br />

                    app.set('view engine', 'ejs')

                    app.use(bodyParser.urlencoded({'{extended:false}'})) <br /><br />

                    // connexion à la bdd
                    mongoose.set('userUnifiedTopology', true) <br />
                    mongoose.connect("mongodb://localhost/sotherbyDB",{'{useNewUrlParser: true}'}) <br /><br />

                    //creer notre premier schema
                    const paintingSchema = new mongoose.Schema({'{'} <br />
                    name: String, <br />
                    author: String, <br />
                    price: Number <br />
                    {'}'}) <br />

                    const Painting = mongoose.model("paintingSold", paintingSchema) <br />

                    app.get('/painting', (req, res) {'=> {'} <br /> )


                    app.listen(3000, (req,res) {'=> {'} <br />
                    console.log("Serveur lancée sur le port 3000") <br />
                    {'}'}) <br />

                </code>
            </pre>
            <Footer />
        </>
    )
}

export default ApiRestFull