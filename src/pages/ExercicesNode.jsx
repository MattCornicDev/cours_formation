import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'

const ExercicesNode = () => {
    return (
        <>
            <Navbar />

            <Container>
                <nav className='nav flex-column navbar-expand-md' >

                    <a href="#exercice1">Exercice 1 carrelage</a>
                    <a href="#correction1">Correction Exercice 1</a>
                    <a href="#exercice2">Exercice 2 API</a>
                    <a href="#correction2">Correction exercice 2 API</a>
                    <a href="#exercice-nodejs">exerice nodeJS</a>
                    <a href="#qcm-js">QCM JavaScript</a>
                    <a href="#algoritme">Algorithme</a>
                    <a href="#exercice-sql">Exercice SQL</a>



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

                <h2 id='correction_exercice2'>Correction Exercice 2 API</h2>

                <pre>
                    <code>
                        mkdir Sotheby-API <br />
                        cd Sotheby-API <br />
                        touch server.js <br />
                        npm init -y <br />
                        yarn add express ejs body-parser mongoose <br />
                        code . <br />
                    </code>
                </pre>
                <p>Creons notre serveur</p>
                <pre>
                    <code>
                        const express = require("express") <br />
                        const bodyParser = require("body-parser") <br />
                        const ejs = require('ejs') <br />
                        const mongoose = require('mongoose') <br /><br />

                        const app = express() <br /><br />

                        app.set('view engine', 'ejs')

                        app.use(bodyParser.urlencoded({'{extended:false}'})) <br /><br />
                        {/*  // connexion à la bdd */}


                        mongoose.set('userUnifiedTopology', true) <br />
                        mongoose.connect("mongodb://localhost/sotherbyDB",{'{useNewUrlParser: true}'}) <br /><br />

                    //creer notre premier schema
                        const paintingSchema = new mongoose.Schema({'{'} <br />
                        name: String, <br />
                        author: String, <br />
                        price: Number <br />
                        {'}'}) <br />
                        const Painting = mongoose.model("paintingSold", paintingSchema)

                        app.listen(3000, (req,res) {'=> {'} <br />
                        console.log("Serveur lancée sur le port 3000")
                        {'}'})

                    </code>
                </pre>
                <p>Creer un dossier "views"</p>

                <Link to='../ApiRestFull'>La suite ici</Link>

                <h2 id='exercice-nodejs'>Exercice nodeJS</h2>

                <p>
                    Créez un fichier "index.js" et utilisez l'instruction console.log pour afficher un message de bienvenue.
                    <pre>
                        <code>
                            console.log('Bienvenue dans cet exercice de Node.js !');
                        </code>

                    </pre>
                </p>

                <p>
                    Utilisez la fonction setTimeout de Node.js pour afficher un message deux secondes plus tard.
                    <pre>
                        <code>
                            setTimeout(function() {'{'}
                            console.log('Voici un message affiché 2 secondes plus tard.');
                            {'}'}, 2000);
                        </code>
                    </pre>
                </p>

                <p>
                    Créez un tableau de nombres et utilisez la fonction forEach pour afficher chaque nombre dans le terminal.

                    <pre>
                        <code>
                            const numbers = [1, 2, 3, 4, 5];

                            numbers.forEach(function(number) {'{'}
                            console.log(number);
                            {'}'});
                        </code>
                    </pre>
                </p>

                <p>
                    Créez une fonction qui prend un paramètre et utilisez-la pour afficher ce paramètre dans le terminal.

                    <pre>
                        <code>
                            function printMessage(message) {'{'}
                            console.log(message);
                            {'}'}

                            printMessage('Voici un message imprimé par une fonction.');
                        </code>
                    </pre>
                </p>

                <p>
                    Utilisez l'instruction process.argv pour récupérer les arguments passés en ligne de commande et affichez-les dans le terminal.

                    <pre>
                        <code>
                            console.log(process.argv);
                        </code>
                    </pre>

                    Vous pouvez exécuter ce script en utilisant la commande node index.js dans votre terminal. Vous pouvez également passer des arguments en ligne de commande en les ajoutant après le nom du fichier, par exemple: node index.js arg1 arg2 arg3.
                </p>

                <h2 id='qcm-js'>QCM JavaScript</h2>

                <ol>

                    <li> Quelle est la syntaxe de base d'une déclaration de variable en JavaScript?</li>
                    <li> Quelle est la différence entre let et var en JavaScript?</li>
                    <li>Quelle est la différence entre null et undefined en JavaScript?</li>
                    <li>Comment concaténer deux chaînes de caractères en JavaScript?</li>
                    <li>Comment convertir une chaîne en entier en JavaScript?</li>
                    <li>Comment créer une fonction en JavaScript?</li>
                    <li>Quelle est la différence entre une fonction déclarative et une fonction exprimée en JavaScript?</li>
                    <li>Comment appeler une fonction en JavaScript?</li>
                    <li> Comment passer des arguments à une fonction en JavaScript?</li>
                    <li>Comment utiliser une boucle for en JavaScript?</li>
                    <li>Comment utiliser une boucle while en JavaScript?</li>
                    <li>Comment utiliser une boucle do...while en JavaScript?</li>
                    <li>Comment utiliser l'instruction break dans une boucle en JavaScript?</li>
                    <li>Comment utiliser l'instruction continue dans une boucle en JavaScript?</li>
                    <li> Quelle est la différence entre l'opérateur == et l'opérateur === en JavaScript ?</li>
                    <li>Comment utiliser un opérateur ternaire en JavaScript ?</li>
                    <li>Comment créer un tableau en JavaScript ?</li>
                    <li>Comment accéder à un élément d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode push pour ajouter un élément à la fin d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode pop pour supprimer un élément de la fin d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode shift pour supprimer un élément du début d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode unshift pour ajouter un élément au début d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode splice pour ajouter, supprimer ou remplacer des éléments d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode slice pour copier un sous - tableau d'un tableau en JavaScript?</li>
                    <li>Comment parcourir un tableau en JavaScript avec la méthode forEach ?</li>
                    <li>Comment utiliser la méthode map pour transformer chaque élément d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode filter pour filtrer les éléments d'un tableau en JavaScript?</li>
                    <li>Comment utiliser la méthode reduce pour réduire un tableau en une valeur unique en JavaScript ?</li>
                    <li>Comment créer un objet en JavaScript ?</li>
                    <li>Comment accéder à une propriété d'un objet en JavaScript ?</li>
                    <li>Comment définir une propriété d'un objet en JavaScript ?</li>
                    <li>Comment supprimer une propriété d'un objet en JavaScript ?</li>
                    <li>quelle différence entre java et javascript ?</li>
                </ol >



                <h2 id='algoritme'>Algoritme</h2>

                <p>Écrivez une fonction qui prend en entrée un entier n et renvoie la somme des nombres entiers pairs compris entre 0 et n, inclus.</p>

                <p>réponse</p>

                <pre>
                    <code>
                        function sumNumbers(n) {'{'} <br />
                        let sum = 0; <br />
                        for (let i = 0; i {'<='} n; i += 2) {'{'} <br />
                        sum += i; <br />
                        {'}'} <br />
                        return sum; <br />
                        {'}'} <br /> <br />

                        console.log(sumNumbers(4)); // affiche 6 (2 + 4) <br />
                        console.log(sumNumbers(6)); // affiche 12 (2 + 4 + 6) <br />
                        console.log(sumNumbers(10)); // affiche 30 (2 + 4 + 6 + 8 + 10) <br />

                    </code>
                </pre>

                <h2 id='exercice-sql'>Exercice SQL</h2>

                <p>Écrivez une requête SQL qui sélectionne tous les enregistrements de la table "customers" où le champ "country" vaut "France" et trie les résultats par ordre croissant de "last_name".</p>

                <p>réponse</p>

                <pre>
                    <code>
                        SELECT * FROM customers
                        WHERE country = 'France'
                        ORDER BY last_name ASC;

                    </code>
                </pre>

                <Footer />
            </Container>
        </>
    )
}

export default ExercicesNode