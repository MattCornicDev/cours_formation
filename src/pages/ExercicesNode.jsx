import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'

const ExercicesNode = () => {
    return (
        <>
            <Navbar />
            <nav className='nav flex-column navbar-expand-md' >

                <a href="#exercice1">Exercice 1 carrelage</a>
                <a href="#correction1">Correction Exercice 1</a>
                <a href="#exercice2">Exercice 2 API</a>



                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                </div>
            </nav >
            <h1>EXERCICES</h1>

            <h2 id='exercice1'>Exercices CARRELAGE</h2>

            <p>Info relative au calcul du nombre de carreaux :</p>

            <p>Carreaux 15 x 15 cm : il vous faut 45 carreaux au m²</p>

            <ol>
                <li>Créez un fichier calculCarrelage.html dans un nouveau dossier carrelage que vous allez créer au préalable.</li>
                <li>Cette page html aura pour titre ‘’Calcul Carrelage’’.</li>
                <li>Ajoutez un formulaire HTML, ce dernier enverra via une méthode post, une requête vers notre server. Ce formulaire aura 1 input ;<br /> il contiendra la surface de notre pièce que l’on veut carreler.
                </li>
                <li>Ajoutez un bouton “Renvoyer le nombre de carreaux nécessaires”</li>
                <li>Ajouter les méthodes GET et POST nécessaires dans un fichier principal server.js (toujours dans le dossier carrelage).
                </li>
                <li>Utiliser la méthode sendFile() par la méthode GET afin d’envoyer en réponse au client la page calculCarrelage.html dans la route ‘’/’’ (home).
                </li>
                <li>Dans le fichier server.js , effectuez le calcul adéquat en prenant compte de l’info écrite en rouge en haut.
                </li>
                <li> Écrivez le bon code afin de renvoyer au client une phrase de ce genre : "Il vous faudra xcarreaux pour une surface de y m2 ! " .
                </li>
            </ol>
            <p>x représente le nombre de carreaux calculés grâce à l’info en rouge. <br />
                y représente la surface que le client rentre dans l’input du formulaire.
            </p>

            <h2 id="correction1">Correction Exercice 1</h2>

            <ol>
                <li>creer un dossier nommée carrelage</li>
                <li>touch caclculCarrelage.html</li>
                <li>touch server.js</li>
                <li>Ajouter le doctype</li>
                <li>Ajouter un formulaire</li>
                <pre>
                    <code>
                        form action="/" method="post" <br />
                        input type="text" name="surface" placeholder="rentrer votre surface" <br />
                        button type="submit" Renvoyer le nombre de carreaux nécessaire button <br />
                    </code>
                </pre>
                <li>Server JS. Faire un npm init et installer nos dependences: <br />
                    express body-parser </li>
                <pre>
                    <code>
                        const express = require("express") <br />
                        const bodyParser = require("body-parser") <br /> <br />
                        cons app = express() <br /><br />

                        app.use(bodyParser.urlencoded({'{'}extended:false{'}'}));<br /><br />

                        app.get("/",(req,res) {'=> {'} <br />
                        res.sendFile(__dirname + "/calculCarrelage.html") <br />
                        {'}'}) <br />
                        <br />
                        app.listen(3005,() {'{'} <br />
                        console.log("J'écoute bien sur le port 3005") <br />
                        {'}'})
                    </code>
                </pre>
                <p>Une fois notre get fait on va recuperer notre input. Pour notre calcul on va recuperer la surface de notre client et on le multiplie par 45</p>
                <li>Ajouter une methode post</li>

                <pre>
                    <code>
                        const express = require("express") <br />
                        const bodyParser = require("body-parser") <br /> <br />
                        cons app = express() <br /><br />

                        app.use(bodyParser.urlencoded({'{'}extended:false{'}'}));<br /><br />

                        app.get("/",(req,res) {'=> {'} <br />
                        res.sendFile(__dirname + "/calculCarrelage.html") <br />
                        {'}'}) <br />

                        app.post("/",(req,res) {'=> {'} < br />
                        const surface = Number(req.body.surface); <br />
                        const nbr_carreaux = surface * 45 <br />
                        res.send("Il vous faudra " + nbr_carreaux + "de carreaux pour une surface de " + surface + " m2");
                        )

                        <br />

                        app.listen(3005,() {'{'} <br />
                        console.log("J'écoute bien sur le port 3005") <br />
                        {'}'})
                    </code>
                </pre>
            </ol>

            <h2>Exercice 2 API</h2>

            <ol>
                <li>Créer un repertoire Sotherby-API</li>
                <li>Initialiser les packets NPM suivants : body-parser, express, mongoose, ejs</li>
                <li>Créer un fichier serveur.js</li>
                <li>Ajoutez les ligne nécessaires au bon fonctionnement de la page server.js</li>
                <li>Initialiser la connexion avec la base de données MongoDB :</li>
                <ul>
                    <li>Le nom de la base de données sera sotherbyDB</li>
                    <li>Le nom de la collection sera paintingSold</li>
                    <li>Cette Collection contiendra 3 champs :</li>
                    <ol>
                        <li>le nom de la peinture vendue sous le nom name</li>
                        <li>le nom du peintre de cette peinture sous le nom author</li>
                        <li>le prix de vente de la peinture sous le nom price</li>
                    </ol>
                </ul>
            </ol>

            <Footer />
        </>
    )
}

export default ExercicesNode