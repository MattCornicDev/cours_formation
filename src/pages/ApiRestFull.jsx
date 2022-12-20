import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'

function ApiRestFull() {
    return (
        <>
            <Navbar />
            <nav className='nav flex-column navbar-expand-md' >

                <a href="#api">API RestFull</a>
                <a href="#creation_nouvelle_peinture">Creation d'une nouvelle peinture</a>
                <a href="#supprimer_tout">Supprimer toutes les peintures</a>
                <a href="#modifier">Modifier des données</a>



                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                </div>
            </nav >
            <h1 id="api">API RestFull</h1>


            <p>Creons de nouvelles peintures au lieu de faire save pour les inserer avec InsertMany(). Ajoutons une route method get() recherchons nos elements avec la methode find(), avec à l'interieur des accolades vides parce nous voulons renvoyer tout l'objet</p>
            <pre>
                <code>
                    const express = require("express") <br />
                    const bodyParser = require("body-parser") <br />
                    const ejs = require('ejs') <br />
                    const mongoose = require('mongoose') <br /><br />

                    const app = express() <br /><br />

                    app.set('view engine', 'ejs') <br />

                    app.use(bodyParser.urlencoded({'{extended:false}'})) <br /><br />

                    // connexion à la bdd <br />
                    mongoose.connect("mongodb://localhost/sotherbyDB",{'{useNewUrlParser: true}'}) <br /><br />

                    //creer notre premier schema <br />
                    const paintingSchema = new mongoose.Schema({'{'} <br />
                    name: String, <br />
                    author: String, <br />
                    price: Number <br />
                    {'}'}) <br /><br />

                    const Painting = mongoose.model("paintingSold", paintingSchema) <br /><br />

                    const Jonconde = new Painting({'{'} <br />
                    name: "La Jonconde", <br />
                    author: "Leonard de Vinci", <br />
                    price: 400 <br />
                    {'}'});
                    <br /><br />
                    const Guernica = new Painting({'{'} <br />
                    name: "Guernica", <br />
                    author: "Picasso", <br />
                    price: 200 <br />
                    {'}'});
                    <br /><br />
                    const NuitEtoilee = new Painting({'{'} <br />
                    name: "La Nuit Etoilée", <br />
                    author: "Van Gogh", <br />
                    price: 300 <br />
                    {'}'});
                    <br /><br />

                    Painting.insertMany([Jonconde, Guernica, NuitEtoilee], (err) {'=> {'} <br />
                    if(err) {'{'} <br />
                    console.log(err)
                    {'}'}else{'{'} <br />
                    console.log("insert success")
                    {'}}'} )
                    <br /><br />

                    app.get('/painting', (req, res) {'=> {'} <br />
                    Painting.find({'{}'}, (err, peintures) {'=> {'} <br />
                    if(err) {'{'} <br />
                    console.log(err) <br />
                    {'}'}else {'{'} <br />
                    res.send(peintures) <br />
                    {'}'} <br />
                    {'}'}) <br />
                    {'})'}
                    <br /><br />

                    app.listen(3000, (req,res) {'=> {'} <br />
                    console.log("Serveur lancée sur le port 3000") <br />
                    {'}'}) <br />

                </code>
            </pre>
            <p>Une fois <code>nodemon server</code> on verfie si dans la bdd sotheby est bien enregistrer. <code>mongosh</code> puis <code>show dbs</code> puis <code>use sotheby</code> puis <code>show collections</code> puis <code>db.paintingsolds.find()</code></p>

            <h2 id='creation_nouvelle_peinture'>Creation d'une nouvelle peinture</h2>

            <p>Ajoutons pour cela une methode post, plutot que d'utiliser un formulaire on va utiliser Postman.</p>
            <pre>
                <code>
                    app.post('/painting',(req, res) {'=> {'} <br />


                    {'}'})
                </code>
            </pre>
            <p>Plutôt que de créer un formulaire et recuperer le input avec req.body.name nous allons utiliser postman. Dans postman entrer l'url "http://localhost:3000/painting" et dans l'onglet body cocher form-urlencoder. Au lieu de creer un input postman nous permet d'ecrire des cles et des valeures </p>
            <img src={process.env.PUBLIC_URL + '/media/postman.png'} alt="postman" width="800px" />

            <pre>
                <code>
                    app.post('/painting',(req, res) {'=> {'} <br />
                    console.log(req.body.name) <br />
                    console.log(req.body.author) <br />
                    console.log(req.body.price) <br />
                    {'}'}) <br />
                </code>
            </pre>
            <p>En methode_POST appuyer sur "Send" la console doit vous renvoyer
                <pre>
                    <code>
                        Serveur lancée sur le port 3000 <br />
                        la cene <br />
                        leonard de vinci <br />
                        85 <br />
                    </code>
                </pre>
            </p>
            <p>Effacons nos console log, En restFull post c'est pour creer un nouvel objet.</p>
            <pre>
                <code>
                    app.post('/painting',(req, res) {'=> {'} <br />
                    const Object = new Painting({'{'} <br />
                    name: req.body.name, <br />
                    author: req.body.author, <br />
                    price: req.body.price <br />
                    {'}'}); <br /><br />
                    Object.save((err) {'=> {'} <br />
                    if (err) {'{'} <br />
                    console.log(err) <br />
                    {'}'}else{'{'} <br />
                    console.log("peinture vendu") <br />
                    {'}'} <br />
                    {'}'}) <br />
                    {'}'}) <br />
                </code>
            </pre>
            <p>La console nous renvoie bien penture vendu
                <pre>
                    <code>
                        Serveur lancée sur le port 3000 <br />
                        peinture vendu <br />
                    </code>
                </pre>
                <p>On a bien enregisté notre nouvelle objet. Pour verifier dans mongodb tapons <code>db.paintingsolds.find()</code> et nous avons bien notre tableau "Cene" enregistré</p>
            </p>

            <h2 id='supprimer_tout'>Supprimer toute les peinturees</h2>

            <p>Pour supprimer nos peintures nous allons utiliser la methode delete</p>
            <pre>
                <code>
                    app.delete('/painting',(req, res) {'=> {'} <br />
                    Painting.deleteMany({'{}'},(err) {'=> {'} <br />
                    if (err) {'{'} <br />
                    console.log(err) <br />
                    {'}'}else{'{'} <br />
                    console.log("Peinture supprimé") <br />
                    {'}'} <br />
                    {'}'}) <br />
                    {'}'}) <br />
                </code>
            </pre>
            <p>En methode delete sur postman et je clique sur "Send" si je verifie ma console elle m'indique bien "Peinture supprimé"</p>

            <pre>
                <code>
                    Serveur lancée sur le port 3000 <br />
                    Peinture supprimé <br />
                </code>
            </pre>
            <p>Allons sur mongosh et faisons un <code>show dbs</code> et <code>use SothebyDB</code> puis <code>show collections</code> puis <code>db.paintingsolds.find()</code> et on ne m'affiche rien tout à bien été supprimé</p>

            <h2>Recuperer une peinture specifique</h2>

            <p>On va utiliser une methode get mais dans la route on va specifier le nom de notre peinture</p>

            <pre>
                <code>
                    app.get("/painting/:paintingName",(req, res) {'=> {'} <br />
                    console.log(req.params.paintingName)
                    {'}'})
                </code>
            </pre>
            <p>Enregistrer et lancé dans l'url du navigateur "http://localhost:3000/painting/joconde" verifier la console vous devriez avoir </p>

            <pre>
                <code>
                    Serveur lancée sur le port 3000 <br />
                    joconde <br />
                </code>
            </pre>

            <p>Si on entre dans l'url "http://localhost:3000/painting/coucou" la console renverra coucou. Nous allons donc faire une requete dans notre base de donnée et nous ne voulons pas recuperer tout mais un seul element par consequent nous n'utiliserons pas find() mais findOne()</p>

            <pre>
                <code>
                    app.get("/painting/:paintingName",(req, res) {'=> {'} <br />
                    Painting.findOne({'{name: req.params.paintingName}'},(err, peinture) {'=> {'} <br />
                    if (err) {'{'} <br />
                    console.log(err) <br />
                    {'}'}else{'{'} <br />
                    res.send(peinture) <br />
                    {'}'} <br />
                    {'}'}) <br />
                    {'}'}) <br />
                </code>
            </pre>

            <p>notre base de donnée est vide decommenter l'insertion pour remettre ce que nous avons effacer. <br />
                ensuite dans l'url entrer cett adresse http://localhost:3000/painting/La%20Jonconde le %20 est le code ASCII pour espace La Jonconde est le name</p>

            <h2 id='modifier'>Modifier des données</h2>

            <p>Le PUT et le PATCH font quasiement la même chose. Le PUT remplace un document alors que le PATCH remplace uniquement le champ</p>

            <pre>
                <code>
                    app.put('/paintign/:paintingName',(req, res) {'=> {'} <br />
                    Painting.replaceOne( <br />
                    {'{name: req.params.paintingName}'}, <br />
                    {'{name: req.body.name, author: req.body.author, price: req.body.price}'}, // ici on ajoute nos nouveaux parametres <br />
                    {'{overwrite: true}'}, // parametre de mongoose, on lui dit qu'on peut reecrire au dessus <br />
                    (err) {'=> {'} <br />
                    if (err) {'{'} <br />
                    console.log(err) <br />
                    {'}'}else{'{'} <br />
                    console.log("put updated") <br />
                    {'}}'}
                    ) <br />
                    {'}'})
                </code>
            </pre>
            <p>Dans la methode update le deuxieme parametre sont les informations à update. Dans postman on entre l'url methode PUT http://localhost:3000/painting/Guernica et on modifie les parametres </p>

            <img src={process.env.PUBLIC_URL + "/media/postman_PUT.png"} alt="postman method put" width="800px" />

            <p>Si on change l'url et qu'on ajoute http://localhost:3000/painting/le%20cri et décocher name si vous reactualiser dans la collection vous n'avez plus de name. Cela est dû à la methode PUT. Pour modifier uniquement les propositions nous utiliserons la methode PATCH</p>



            <Footer />

        </>
    )
}

export default ApiRestFull