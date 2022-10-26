import React, { Component } from 'react'
import Navbar from '../components/navigation/Navbar'

export default class NodeCours extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <h1>Node JS</h1>

                    <h2>Qu'est ce que nodeJS</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="rayan_dahl.jpg" alt="photo de Rayan Dahl" width="300px" className='' />
                        </div>
                        <div className="col-md-8">
                            <p>créé par Ryan Dahl en 2009, NodeJS est une plateforme qui utilise le moteur JavaScript V8 de Chrome qui permet de développer des applications en utilisant du JavaScript coté server. Il est non bloquant et asynchrone. </p>


                        </div>

                    </div>

                    <h2>Installation de node JS</h2>
                    <p>Tout d'abord il faut installer node JS si ce n'est pas déja fait. Pour vérifier si node est installer dans votre systeme lancer la commande suivant <code><kbd>node -v</kbd></code> s'il le terminal vous renvoie une version de node existante alors c'est ok sinon installer node via le lien suivant dans le site officiel <a href="https://nodejs.org/en/">cliquez ici</a></p>

                    <h2>Créer un serveur http</h2>
                    <pre>
                        <code>
                            <kbd>
                                var http = require <span>(</span>'http'<span>)</span>;<br />
                                var server = http.createServer<span>(</span>function<span>(</span>req, res<span>) </span>
                                <span>{'{'}</span>
                                <span> res.writeHead</span> <span>(</span>
                                <span>200</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span>res</span>
                                <span>.</span>
                                <span>end</span>
                                <span>(</span>
                                <span>' Salut tout le monde ! '</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span>{'}'}</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span>server</span>
                                <span>.</span>
                                <span>listen</span>
                                <span>(</span>
                                <span>8080</span>
                                <span>)</span>
                                <span>;</span>
                            </kbd>
                        </code>
                    </pre>
                    <p>Ce code crée un petit server lancé sur le port 8080 et qui dit bonjour, ici quelque soit la page demandée</p>
                    <p>require fait un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur web. Il existe des tonnes de bibliothèques comme celle-là, la plupart pouvant être téléchargées avec NPM, le gestionnaire de paquets de Node.js

                        La variable http représente un objet JavaScript qui va nous permettre de lancer un serveur web. C'est justement ce qu'on fait avec :</p>
                        
                    <h2>NPM et Yarn</h2>
                    <h2>Express JS</h2>
                </div>
            </>
        )
    }
}
