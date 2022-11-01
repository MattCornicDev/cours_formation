import React, { Component } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import Iframe from 'react-iframe'


export default class NodeCours extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <h1
                    >NODE JS</h1>

                    <h2>Qu'est ce que nodeJS</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="rayan_dahl.jpg" alt=" Rayan Dahl" className='img-thumbnail' />
                        </div>
                        <div className="col-md-8">
                            <p>créé par Ryan Dahl en 2009, NodeJS est une plateforme qui utilise le moteur JavaScript V8 de Chrome qui permet de développer des applications en utilisant du JavaScript coté server. Il est non bloquant et asynchrone. </p>
                        </div>
                    </div>

                    <h2>Installation de node JS</h2>
                    <p>Tout d'abord il faut installer node JS si ce n'est pas déja fait. Pour vérifier si node est installer dans votre systeme lancer la commande suivant <code>node -v</code> s'il le terminal vous renvoie une version de node existante alors c'est ok sinon installer node via le lien suivant dans le site officiel <a href="https://nodejs.org/en/">cliquez ici</a></p>


                    <h2>Créer un serveur http</h2>
                    <pre>
                        <code>

                            <span className='varColor'>const </span>
                            <span className='nomVar'>http </span>
                            <span>=</span>
                            <span> require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>;<br />
                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>=</span>
                            <span className='nomVar'> http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            function
                            <span>(</span>
                            <span>req</span>
                            <span>, </span>
                            <span>res</span>
                            <span>) </span>
                            <span>{'{'}</span><br />
                            <span> res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span> res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>' Salut tout le monde ! '</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='nomVar'>server</span>
                            <span>.</span>
                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>

                        </code>
                    </pre>
                    <p>Ce code crée un petit server lancé sur le port 8080 et qui dit bonjour, ici quelque soit la page demandée</p>
                    <p>require fait un appel à une bibliothèque de Node.js, ici la bibliothèque "http" qui nous permet de créer un serveur web. Il existe des tonnes de bibliothèques comme celle-là, la plupart pouvant être téléchargées avec NPM, le gestionnaire de paquets de Node.js

                        La variable http représente un objet JavaScript qui va nous permettre de lancer un serveur web. C'est justement ce qu'on fait avec :</p>

                    <p>tout d'abord on importe http de la bibliothèque nodeJS cela nous permet de créer un server web</p>
                    <pre>
                        <code>

                            <span className='varColor'>const </span>
                            <span className='nomVar'>http </span>
                            <span>=</span>
                            <span> require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>;<br />

                        </code>
                    </pre>
                    <p>http est un objet js qui nous permettra de lancer un server web</p>
                    <pre>
                        <code>

                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>=</span>
                            <span className='nomVar'> http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span>)</span>

                        </code>
                    </pre>
                    <p>On appelle la fonction <code>createServer()</code> contenue dans l'objet http et on enregistre ce serveur dans la variable server. La fonction createServer prendra un paramètre ce paramètre est une fonction c'est ce qu'on appelle une fonction callback !</p>

                    <pre>
                        <code>

                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>=</span>
                            <span className='nomVar'> http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span className=''>function</span>
                            <span>(</span>
                            <span>req</span>
                            <span>, </span>
                            <span>res</span>
                            <span>) </span>
                            <span>{'{'}</span><br />
                            <span> res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span> res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>' Salut tout le monde ! '</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span>

                        </code>
                    </pre>
                    <p>À l'appel de createServer(). La fonction en paramètre s'exécute dès qu'un visiteur se connecte à notre site.</p>

                    <p>La requête du visiteur (req) : cet objet contient toutes les informations sur ce que le visiteur a demandé. On y trouve le nom de la page appelée, les paramètres, les éventuels champs de formulaires remplis...
                        La réponse que vous devez renvoyer (res) : c'est cet objet qu'il faut remplir pour donner un retour au visiteur. Au final, res contiendra en général le code HTML de la page à renvoyer au visiteur.</p>

                    <pre>
                        <code>

                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span> res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>' Salut tout le monde ! '</span>
                            <span>)</span>
                            <span>;</span><br />

                        </code>
                    </pre>
                    <p>On renvoie le code 200 dans l'en-tête de la réponse, qui signifie au navigateur "tout va bien" (on aurait par exemple répondu 404 si la page demandée n'existait pas). Il faut savoir qu'en plus du code HTML, le serveur renvoie en général tout un tas de paramètres en en-tête. Il faut connaître la norme HTTP qui indique comment clients et serveurs doivent communiquer pour bien l'utiliser. Voilà encore un exemple de la complexité dûe au fait que Node.js est bas niveau... Mais en même temps ça nous fait comprendre tout un tas de choses.

                        Ensuite, on termine la réponse <code>end()</code> en envoyant le message de notre choix au navigateur. Ici, on n'envoie même pas de HTML, juste du texte brut.</p>

                    <p>Le serveur est lancé et "écoute" sur le port 8080 avec l'instruction :</p>

                    <pre>
                        <code>

                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>

                        </code>
                    </pre>
                    <p>Attention certain port sont reservé car ils sont utilisé par le systeme comme le port 80</p>

                    <h2>Lancer le server http</h2>
                    <p>dans votre terminal lancer la commande suivante :</p>
                    <pre>
                        <code>
                            node server.js
                        </code>
                    </pre>
                    <p>Maintenant ouvrez votre navigateur et entrer dans la barre d'adresse l'adresse suivante http://localhost:8080</p>
                    <img src="nav_nodeServer.png" alt="Affichage du navigateur" width="600px" className='img-navigateur' />
                    <p>Et <code><kbd>Ctrl + C</kbd></code> pour arrêter le server</p>

                    <h3>La norme HTTP</h3>
                    <p>Le serveur indiquer le type de données qu'il s'apprête à envoyer au client. Eh oui, un serveur peut renvoyer différents types de données :</p>

                    <p> Du texte brut : text/plain, du HTML : text/html, du CSS : text/css, une image JPEG : image/jpeg, une vidéo MPEG4 : video/mp4, un fichier ZIP : application/zip etc.
                    </p>

                    <p>Plus haut nous avion indiqué le code de réponse 200 qui signifie "OK, pas d'erreur". Rajoutons maintenant un paramètre qui indique le type MIME de la réponse pour HTML </p>
                    <pre>
                        <code>

                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>,</span>
                            <span>{'{'}</span>
                            <span>"Content-Type"</span>
                            <span>:</span>
                            <span>"text/html"</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span>

                        </code>
                    </pre>

                    <p>renvoyons du HTML dans la réponse.</p>

                    <pre>
                        <code>
                            <span>res</span>
                            <span>.</span>
                            <span>end</span>
                            <span>(</span>
                            <span>'</span>
                            <span>{'<p>'}</span>
                            <span>Ici c'est paris en <strong>HTML</strong> !</span>
                            <span>{'</p>'}</span>
                            <span>'</span>
                            <span>)</span>
                            <span>;</span>
                        </code>
                    </pre>

                    <pre>
                        <code>
                            <span className='varColor'>const </span>
                            <span className='nomVar'>http</span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>= </span>
                            <span className='nomVar'>http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span>function</span>
                            <span>(</span>
                            <span>req</span>
                            <span>,</span>
                            <span></span>
                            <span>res</span>
                            <span>)</span>
                            <span>{'{'}</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>,</span>
                            <span>{'{'}</span>
                            <span>"Content-Type": "text/html"</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span>end</span>
                            <span>(</span>
                            <span>'{'<p>'}Ici c\'est {'<strong>'}HTML{'</strong>'} !{'</p>'}'</span>
                            <span>)</span>
                            <span>;</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='nomVar'>server</span>
                            <span>.</span>
                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>
                        </code>
                    </pre>
                    <p>Lancer l'app avec <code>node server.js</code> et dans le navigateur http://localhost:8080</p>

                    <p>Et le server vous retourne le page HTML et interprète le code</p>
                    <img src="retour-server.png" alt="retourne la page html demandé" width="600px" className='img-navigateur' />

                    <p>integrons maintenant plus de html</p>

                    <pre>
                        <code>
                            <span className='varColor'>const </span>
                            <span className='nomVar'>http</span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>= </span>
                            <span className='nomVar'>http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span>function</span>
                            <span>(</span>
                            <span>req</span>
                            <span>,</span>
                            <span></span>
                            <span>res</span>
                            <span>)</span>
                            <span>{'{'}</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>,</span>
                            <span>{'{'}</span>
                            <span>"Content-Type": "text/html"</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>write</span>
                            <span>(</span>
                            <span>'{'<!DOCTYPE html>'}'+</span><br />
                            <span>'   {'<html>'}'+</span><br />
                            <span>'    {'<head>'}'+</span><br />
                            <span>'     {'<meta charset="utf-8" />'}'+</span><br />
                            <span>'     {'<title>Ma page Node.js !</title>'}'+</span><br />
                            <span>'    {'</head>'}'+</span><br />
                            <span>'     {'<body>'}'+</span><br />
                            <span>'         {'<p>Voici un paragraphe <strong>HTML</strong> !</p>'}'+</span><br />
                            <span>'      {'</body>'}'+</span><br />
                            <span>'     {'</html>'}'</span><br />
                            <span>)</span>
                            <span>;</span><br />
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='nomVar'>server</span>
                            <span>.</span>
                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>
                        </code>
                    </pre>

                    <p>Il faut reconnaitre que coder du html de cette façon est plus que laborieux par consequent nous allons utiliser un système de template. Jusqu'ici quelque soit la page demandé dans l'url vous obtiendrez toujours la même chose. localhost:8080/ ou localhost:8080/accueil nous obtenons la même chose.</p>

                    <p>Voyons maintenant comment récupérer :

                        Le nom de la page demandée (/accueil, /accueil.html, /page/autrepage...)
                        Les paramètres qui circulent dans l'URL (ex : http://localhost:8080/contact?nom=dupont&prenom=robert).</p>

                    <p>La page que le visiteur demande</p>
                    <p>Pour cela node met a disposition un nouveau module nommée "url".</p>
                    <p>Il faut donc l'inclure et la mettre dans une variable</p>

                    <pre>
                        <code>

                            <span className='varColor'>const </span>
                            <span className='nomVar'>url</span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'url'</span>
                            <span>)</span>
                            <span>;</span>

                        </code>
                    </pre>

                    <p>Ensuite, "parsez" la requête du visiteur pour obtenir le nom de la page demandée :</p>

                    <pre>
                        <code>

                            <span className='nomVar'>url</span>
                            <span>.</span>
                            <span className='nomFonct'>parse</span>
                            <span>(</span>
                            <span>req</span>
                            <span>.</span>
                            <span>url</span>
                            <span>)</span>
                            <span>.</span>
                            <span className='nomFonct'>pathname;</span>

                        </code>
                    </pre>

                    <p>le code complet</p>

                    <pre>
                        <code>
                            <span className='varColor'>const </span>
                            <span className='nomVar'>http</span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>
                            <span>;</span><br />

                            <span className='varColor'>const </span>
                            <span className='nomVar'>url </span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'url'</span>
                            <span>)</span>
                            <span>;</span>
                            <br /><br />

                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>= </span>
                            <span className='nomVar'>http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span>function</span>
                            <span>(</span>
                            <span>req</span>
                            <span>,</span>
                            <span></span>
                            <span>res</span>
                            <span>)</span>
                            <span>{'{'}</span><br />
                            <span className='varColor'>const </span>
                            <span className='nomVar'>page </span>
                            <span>= </span>
                            <span className='nomVar'>url</span>
                            <span>.</span>
                            <span className='nomFonct'>parse</span>
                            <span>(</span>
                            <span>req</span>
                            <span>.</span>
                            <span className='nomVar'>url</span>
                            <span>)</span>
                            <span>.</span>
                            <span className='nomFonct'>pathname</span>
                            <span>;</span><br />
                            <span>console</span>
                            <span>.</span>
                            <span className='nomFonct'>log</span>
                            <span>(</span>
                            <span className='nomVar'>page</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>,</span>
                            <span>{'{'}</span>
                            <span>"Content-Type": "text/plain"</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>write</span>
                            <span>(</span>
                            <span>'Salut à tous'</span>
                            <span></span>
                            <span>)</span>
                            <span>;</span><br />

                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='nomFonct'>server</span>
                            <span>.</span>
                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>
                        </code>
                    </pre>

                    <p>Si vous executez la commande <code>node sever</code> et charger la page localhost:8080 vous aurez un '/' pour réponse et si vous ajouter des noms de page de votre imagination la console vous renverra le nom de la page en question. ex: localhost:8080/accueil la console vous renverra <code>/accueil</code> </p>

                    <pre>
                        <code>
                            <span className='varColor'>const </span>
                            <span className='nomVar'>http</span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'http'</span>
                            <span>)</span>
                            <span>;</span><br />

                            <span className='varColor'>const </span>
                            <span className='nomVar'>url </span>
                            <span> = </span>
                            <span>require</span>
                            <span>(</span>
                            <span className='nomVar'>'url'</span>
                            <span>)</span>
                            <span>;</span>
                            <br /><br />

                            <span className='varColor'>const </span>
                            <span className='nomVar'>server </span>
                            <span>= </span>
                            <span className='nomVar'>http</span>
                            <span>.</span>
                            <span className='nomFonct'>createServer</span>
                            <span>(</span>
                            <span>function</span>
                            <span>(</span>
                            <span>req</span>
                            <span>,</span>
                            <span></span>
                            <span>res</span>
                            <span>)</span>
                            <span>{'{'}</span><br />
                            <span className='varColor'>const </span>
                            <span className='nomVar'>page </span>
                            <span>= </span>
                            <span className='nomVar'>url</span>
                            <span>.</span>
                            <span className='nomFonct'>parse</span>
                            <span>(</span>
                            <span>req</span>
                            <span>.</span>
                            <span className='nomVar'>url</span>
                            <span>)</span>
                            <span>.</span>
                            <span className='nomFonct'>pathname</span>
                            <span>;</span><br />
                            <span>console</span>
                            <span>.</span>
                            <span className='nomFonct'>log</span>
                            <span>(</span>
                            <span className='nomVar'>page</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>res</span>
                            <span>.</span>
                            <span className='nomFonct'>writeHead</span>
                            <span>(</span>
                            <span>200</span>
                            <span>,</span>
                            <span>{'{'}</span>
                            <span>"Content-Type": "text/plain"</span>
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />

                            <span className='ifColor'>  if</span>
                            <span>(</span>
                            <span className='nomVar'>page </span>
                            <span>== </span>
                            <span>'/'</span>
                            <span>) </span>
                            <span>{'{'}</span><br />
                            <span>  res</span>
                            <span>.</span>
                            <span className='nomFonction'>write</span>
                            <span>(</span>
                            <span>'Ici c\'est page accueil'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span><br />
                            <span className='ifColor'>  else if </span>
                            <span>(</span>
                            <span className='nomVar'>page </span>
                            <span>== </span>
                            <span>'/article'</span>
                            <span>) </span>
                            <span>{'{'} </span>
                            <span>res</span>
                            <span>.</span>
                            <span className='nomVar'>write</span>
                            <span>(</span>
                            <span>'Ici c\'est la page article'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'} </span><br />
                            <span className='ifColor'>  else if</span>
                            <span>(</span>
                            <span className='nomVar'>page </span>
                            <span>== </span>
                            <span>'/contact'</span>
                            <span>) </span>
                            <span>{'{'} </span><br />
                            <span>  res</span>
                            <span>.</span>
                            <span className='nomFonct'>write</span>
                            <span>(</span>
                            <span>'Ici c\'est la page contact'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'} </span><br />
                            <span className='ifColor'>  else</span>
                            <span>{'{'} </span><br />
                            <span>  res</span>
                            <span>.</span>
                            <span className='nomFonct'>write</span>
                            <span>(</span>
                            <span>'page not found'</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'} </span><br />

                            <span>  res</span>
                            <span>.</span>
                            <span className='nomFonct'>end</span>
                            <span>(</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span>{'}'}</span>
                            <span>)</span>
                            <span>;</span><br />
                            <span className='nomVar'>server</span>
                            <span>.</span>
                            <span className='nomFonct'>listen</span>
                            <span>(</span>
                            <span>8080</span>
                            <span>)</span>
                            <span>;</span>
                        </code>
                    </pre>


                    <h2>NPM et Yarn</h2>

                    <p>Node Package Manager est un gestionnaire de paquets permettant d'importer des modules afin d'améliorer le code</p>

                    <h2>Express JS <a href="https://expressjs.com/en/api.html">(Cliquez ici pour lire la doc)</a></h2>

                    <p>Express est mini framework qui permet d'alléger le code notamment les routes une fonctionnalité essentielle d'Express qui permet de gérer efficacement les URL et les vues "views" qui elles, permettent un accès aux systèmes de templates comme EJS</p>

                    <p>pour installer express on utilisera encore npm</p>
                    <code>npm install</code> ou <code>yarn add express</code>

                    <p>Ouvrez votre IDE et entrer le code suivant</p>

                    <img src="/code_avec_express.png" alt="code des routes avec express" className='image-code' />

                    <p>Importer Express avec la méthode require et créez un objet app en appelant la fonction express().

                        Indiquer les URL pour les routes à laquelle votre application doit répondre. Une fonction de callback est appelée quand quelqu'un demande cette route.

                        Le code est beaucoup plus pratique que ce que nous avons fait plus haut avec les condition "if" imbriqués. On peut écrire autant de routes de cette façon qu'on le souhaite :</p>

                    <img src="/code_avec_express_plusieurs_routes.png" alt="code exemple avec express plusieurs routes" className='image-code' />

                    <p>Autrement si aucune route ne correspond creer une page Not Found</p>

                    <img src="code_avec_express_page_introuvable.png" alt="code express page introuvable" className='image-code' />

                    <h3>Routes dynamiques</h3>

                    <p>Les routes dynamiques permettent d'ajouter des paramètres à notre URL</p>
                    <img src="code_avec_express_page_avec_parametre.png" alt="code avec express page avec parametre" className='image-code' />

                    <h2>Les templates</h2>

                    <p>Jusqu'ici on utilisait le JavaScript pour retourner du code HTML, express nous permet d'utiliser des templates pour resoudre ce probblème. Cela nous permettra d'insérer du contenu variable dans du code HTML.</p>

                    <p>Il existe une panel de langage de templates comme twig et EJS, En général ils gèrent tous l'essentiel, à savoir, les variables, les conditions, les boucles, etc.</p>

                    <p>Le principe est simple depuis votre fichier JavaScript ici server.js, vous appelez le template de votre choix en lui transmettant les variables dont il a besoin pour construire la page.</p>

                    <h2>Le moteur de template EJS</h2>

                    <p>EJS signifie Embedded JavaScript. Pour l'installer rien de plus simple il suffit de faire un <code>npm install ejs</code> ou <code>yarn add ejs</code></p>

                    <p>Désormais inutile d'écrire du HTML dans le JavaScript, on va déléguer la gestion de la vue à notre moteur template</p>

                    <img src="route_home_ejs.png" alt="route home ejs" className='image-code' />

                    <p>Modifier la route pour les articles</p>

                    <img src="route_page_ejs.png" alt="Route de la page avec EJS" className='image-code' />

                    <p>Et du coté html créer une page page-article.ejs dans un dossier views et lancer l'appli à l'adresse localhost:8080 /</p>

                    <img src="exemple_ejs.png" alt="EJS coté html" className='image-code' />

                    <h2>Les middlewares <a href="https://expressjs.com/en/guide/using-middleware.html">(Cliquez ici pour lire la doc)</a></h2>

                    <p>La base d'express sont les middleweares. il s'agit de morceaux d'application qui proposent des micro fonctionnalité. Il est possible de ne charge uniquement les middleweares dont on a besoin. Pour les utiliser il suffit d'appeler la méthode app.use() après l'installation du middleware dont on a besoin via NPM. L'ordre d'appel des middlewares est très important.</p>

                    <p>(Express est livré avec une quinzaine de middleweares) sans ceux proposer par d'autres dev via NPM.</p>

                    <ul>
                        <li>compression : permet la compression gzip de la page pour un envoi plus rapide au navigateur</li>
                        <li>cookie-parser : permet de manipuler les cookies</li>
                        <li>cookie-session : permet de gérer des informations de session durant la visite d'un visiteur</li>
                        <li>serve-static : permet de renvoyer des fichiers statiques contenus dans un dossier images, fichiers à télécharger...</li>
                        <li>serve- favicon : permet de renvoyer la favicon du site</li>
                        <li>csrf : fournit une protection contre les failles CSRF</li>
                        <li>...</li>
                    </ul>

                    <p>Tous les middleweares offrent vraiment des micro-fonctionnalités. Il y a des tous petit comme "serve-favicon" par exemple</p>
                    <p>Ces middlewares offrent interconnectés et peuvent communiquer entre eux. Express ne fait qu'ajouter les routes et les vues par-dessus l'ensemble.</p>
                    <p>Tous ces middlewares communiquent entre eux en se renvoyant jusqu'à 4 paramètres :</p>
                    <ul>
                        <li><kbd>err</kbd> : les erreurs</li>
                        <li><kbd>req</kbd> : la requête du visiteur</li>
                        <li><kbd>res</kbd> : la réponse à renvoyer (la page HTML et les informations d'en-tête)</li>
                        <li><kbd>next</kbd> : un callback vers la prochaine fonction à appeler</li>
                    </ul>

                    <h2>socket.io</h2>

                    <p>Socket.io est une bibliothèque importante, elle permet de faire très simplement de la communication synchrone. Comme une messagerie instantanée. Elle permet un échange bilatéral synchrone entre le client et le serveur</p>

                    <p>Installer socket.io <code>npm i socket.io</code> ou <code>yarn add socket.io</code> </p>

                    <p>il faut se charger de deux fichiers simultanément. Le fichier serveur "app.js" ou "server.js" tout dépend comment vous l'avez nommé et le fichier client "index.html". Le premier fichier centralise et gère les connexions des différents clients connectés au site et le second fichier html lui se connecte au serveur et affiche les résultats dans le navigateur.</p>

                    <p>Executer ce code dans le fichier index.html</p>

                    <img src="/connexion_socket_io_html.png" alt="connexion socket.io coté html" className='image-code' />


                    <p>Executez ce code dans le fichier app.js</p>

                    <img src="/connexion_socket_io.png" alt="Code pour la connexion entre l'ordinateur et socket.io" className='image-code' />

                    <p>Aller à l'adresse <a href="http://localhost:8080">http://localhost:8080</a> le server vous renvoie "Communication établie avec socket.io" et la console vous informe que "Un client est connecté". Ceci indique tout à fonctionné</p>









                    <h2>Exercice</h2>

                    <Iframe width='100%' height='300px' scrolling="no" title="Untitled" src="https://codepen.io/mattcornicdev/embed/preview/YzLqxGX?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                        See the Pen <a href="https://codepen.io/mattcornicdev/pen/YzLqxGX">
                            Untitled</a> by MattCornicDev (<a href="https://codepen.io/mattcornicdev">@mattcornicdev</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </Iframe>



                </div>
                <div>
                    <Footer />
                </div>
            </>
        )
    }
}
