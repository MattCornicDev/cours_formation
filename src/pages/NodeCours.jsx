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
                                <span>var </span>
                                <span>http </span>
                                <span>=</span>
                                <span> require</span>
                                <span>(</span>
                                'http'
                                <span>)</span>;<br />
                                <span>var </span>
                                <span>server </span>
                                <span>=</span>
                                <span> http</span>
                                <span>.</span>
                                <span>createServer</span>
                                <span>(</span>
                                function
                                <span>(</span>
                                <span>req</span>
                                <span>, </span>
                                <span>res</span>
                                <span>) </span>
                                <span>{'{'}</span><br />
                                <span> res.writeHead</span> <span>(</span>
                                <span>200</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span> res</span>
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

                    tout d'abord on importe http de la bibliothèque nodeJS cela nous permet de créer un server web
                    <pre>
                        <code>
                            <kbd>
                                <span>var </span>
                                <span>http </span>
                                <span>=</span>
                                <span> require</span>
                                <span>(</span>
                                'http'
                                <span>)</span>;<br />
                            </kbd>
                        </code>
                    </pre>
                    <p>http est un objet js qui nous permettra de lancer un server web</p>
                    <pre>
                        <code>
                            <kbd>
                                <span>var </span>
                                <span>server </span>
                                <span>=</span>
                                <span> http</span>
                                <span>.</span>
                                <span>createServer</span>
                                <span>(</span>
                                <span>)</span>
                            </kbd>
                        </code>
                    </pre>
                    <p>On appelle la fonction <code>createServer()</code> contenue dans l'objet http et on enregistre ce serveur dans la variable server. La fonction createServer prendra un paramètre ce paramètre est une fonction c'est ce qu'on appelle une fonction callback !</p>

                    <pre>
                        <code>
                            <kbd>
                                <span>var </span>
                                <span>server </span>
                                <span>=</span>
                                <span> http</span>
                                <span>.</span>
                                <span>createServer</span>
                                <span>(</span>
                                function
                                <span>(</span>
                                <span>req</span>
                                <span>, </span>
                                <span>res</span>
                                <span>) </span>
                                <span>{'{'}</span><br />
                                <span> res.writeHead</span> <span>(</span>
                                <span>200</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span> res</span>
                                <span>.</span>
                                <span>end</span>
                                <span>(</span>
                                <span>' Salut tout le monde ! '</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span>{'}'}</span>
                                <span>)</span>
                                <span>;</span>
                            </kbd>
                        </code>
                    </pre>
                    <p>À l'appel de createServer(). La fonction en paramètre s'exécute dès qu'un visiteur se connecte à notre site.</p>

                    <p>La requête du visiteur (req) : cet objet contient toutes les informations sur ce que le visiteur a demandé. On y trouve le nom de la page appelée, les paramètres, les éventuels champs de formulaires remplis...
                        La réponse que vous devez renvoyer (res) : c'est cet objet qu'il faut remplir pour donner un retour au visiteur. Au final, res contiendra en général le code HTML de la page à renvoyer au visiteur.</p>

                    <pre>
                        <code>
                            <kbd>
                                <span>res.writeHead</span>
                                <span>(</span>
                                <span>200</span>
                                <span>)</span>
                                <span>;</span><br />
                                <span> res</span>
                                <span>.</span>
                                <span>end</span>
                                <span>(</span>
                                <span>' Salut tout le monde ! '</span>
                                <span>)</span>
                                <span>;</span><br />
                            </kbd>
                        </code>
                    </pre>
                    <p>On renvoie le code 200 dans l'en-tête de la réponse, qui signifie au navigateur "tout va bien" (on aurait par exemple répondu 404 si la page demandée n'existait pas). Il faut savoir qu'en plus du code HTML, le serveur renvoie en général tout un tas de paramètres en en-tête. Il faut connaître la norme HTTP qui indique comment clients et serveurs doivent communiquer pour bien l'utiliser. Voilà encore un exemple de la complexité dûe au fait que Node.js est bas niveau... Mais en même temps ça nous fait comprendre tout un tas de choses.

                        Ensuite, on termine la réponse <code>end()</code> en envoyant le message de notre choix au navigateur. Ici, on n'envoie même pas de HTML, juste du texte brut.</p>

                    <h2>NPM et Yarn</h2>
                    <h2>Express JS</h2>
                </div>
            </>
        )
    }
}
