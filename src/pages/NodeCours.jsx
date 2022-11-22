import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'
import Iframe from 'react-iframe'
import './nodeCours.css';



function NodeCours() {

    return (
        <>
            <Navbar />
            <nav className='nav flex-column'>

                <a href="#creer_un_erveur_http">Serveur HTTP</a>
                <a href="#npm_yarn">ExpressJS</a>
                <a href="#templates">Templates</a>
                <a href="#middlewares">Les middlewares</a>
                <a href="#methode_post">Methode post</a>
                <a href="#mongoose">Mongoose</a>
                <a href="#ejs">EJS</a>
                <a href="#collection">Collections</a>
                <a href="#routes_dynamiques">Routes dynamiques</a>
                <a href="#bdd_terminal">Interagir avec la BDD via le terminal</a>
                <a href="#supprimer">Supprimer et Ajouter des données</a>
                <a href="#modifier">Modifier des données</a>


                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src="Logo-GRETA-Grand-Hainaut-500.jpg" alt="logo du greta" width="100px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src="logo_partenaires.png" alt="logo des partenaires financiers" width="100px" />
                </div>
            </nav>

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


                <h2 id='creer_un_erveur_http'>Créer un serveur http</h2>
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


                <h2 id='npm_yarn'>NPM et Yarn</h2>

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

                <h3 id='routes_dynamiques'>Routes dynamiques</h3>

                <p>Les routes dynamiques permettent d'ajouter des paramètres à notre URL</p>
                <img src="code_avec_express_page_avec_parametre.png" alt="code avec express page avec parametre" className='image-code' />

                <h2 id='templates'>Les templates</h2>

                <p>Jusqu'ici on utilisait le JavaScript pour retourner du code HTML, express nous permet d'utiliser des templates pour resoudre ce probblème. Cela nous permettra d'insérer du contenu variable dans du code HTML.</p>

                <p>Il existe une panel de langage de templates comme twig et EJS, En général ils gèrent tous l'essentiel, à savoir, les variables, les conditions, les boucles, etc.</p>

                <p>Le principe est simple depuis votre fichier JavaScript ici server.js, vous appelez le template de votre choix en lui transmettant les variables dont il a besoin pour construire la page.</p>

                <h2 id='ejs'>Le moteur de template EJS</h2>

                <p>EJS signifie Embedded JavaScript. Pour l'installer rien de plus simple il suffit de faire un <code>npm install ejs</code> ou <code>yarn add ejs</code></p>

                <p>Désormais inutile d'écrire du HTML dans le JavaScript, on va déléguer la gestion de la vue à notre moteur template</p>

                <img src="route_home_ejs.png" alt="route home ejs" className='image-code' />

                <p>Modifier la route pour les articles</p>

                <img src="route_page_ejs.png" alt="Route de la page avec EJS" className='image-code' />

                <p>Et du coté html créer une page page-article.ejs dans un dossier views et lancer l'appli à l'adresse localhost:8080 /</p>

                <img src="exemple_ejs.png" alt="EJS coté html" className='image-code' />

                <h2 id='middlewares'>Les middlewares <a href="https://expressjs.com/en/guide/using-middleware.html">(Cliquez ici pour lire la doc)</a></h2>

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

                <h2 id='methode_post'>Méthode Post</h2>

                <p>Créer un formulaire html</p>

                <img src="formulaire_POST.png" alt="formulaire html" className='image-code' />

                <p>lancez un serveur</p>
                <img src="1_methode_POST.png" alt="code lancement serveur" className='image-code' />

                <p>Ajouter une route get pour la page qu'on appellera message</p>
                <img src="2_methode_POST.png" alt="code de la route message" className='image-code' />



                <p>la methode post </p>
                <img src="methode_POST.png" alt="methode post express" className='image-code' />
                <img src="packageJson_methode_POST.png" alt="formulaire html" className='image-code' />

                <h3 id='mongoose'>Mongoose</h3>

                <p>Mongoose est un module qui va nous permettre d'interagir avec notre base de données mongoDB</p>
                <p>cree un nouveau dossier</p>
                <p>dans ce dossier initialiser les modules ou packets avec <code>npm init</code></p>
                <p>installer les modules <code>npm i express mongoose </code></p>
                <p>Créer un nouveau fichier server.js qui va nous permettre d'interagir avec notre base de donnée</p>
                <p>On fait un require des modules </p>
                <pre><code>
                    <code>const express = require('express')</code><br />
                    <code>const mongoose = require('mongoose')</code><br />
                    <code>const app = express()</code><br /><br />
                    <code>app.listen(3000, () {'=>'} {'{'} <br />
                        console.log("server is running on the port 3000") {'}'} )</code>
                </code></pre>

                <p>documentation mongoose pour bien démarrer <a href="https://mongoosejs.com/docs/index.html">doc</a></p>

                <p>On peut interagir avec notre base de donnée via le terminal mais ici nous utiliserons Atlas. Pour cela allez sur <a href="https://www.mongodb.com/cloud/atlas/register">mongo Atlas</a> et créer un compte</p>

                <p>Dans database access crée un nouvel utilisateur, entrer un nom d'utilisateur et un mot de passe en mode mode passe, noter bien ce mot de passe et selectionner "lire et ecrire dans n'importe qu'elle base de donnée" et faite add</p>
                <p>Une fois cet utilisateur crée aller dans "Network access" et "ADD IP Address" et cliquer sur "Allow Access From AnyWhere" pour que n'importe qu'elle utilisateur ait access à notre API</p>

                <h2 id='collection'>Créer un schema</h2>

                <p>Crée un dossier nommé models, dans ce dossier créer un fichier js nommé User.js </p>
                <pre>
                    <code>
                        <code>const mongoose = require('mongoose');</code><br /><br />

                        <code>const userSchema = mongoose.Schema({'{'}</code><br />
                        <code>username: {'{'} type: String, required: true {'}'},</code><br />
                        <code>password: {'{'} type: String, required: true {'}'},</code><br />
                        {'}'});<br /><br />

                        <code>module.exports = mongoose.model('User', userSchema);</code>
                    </code>
                </pre>

                <p>Nous créons un schéma de données qui contient les champs souhaités pour chaque Objet, On indique leur type ainsi que leur caractère. Pour cela, on utilise la méthode Schema de Mongoose. l'Id est automatiquement généré par Mongoose ;</p>

                <p>Pour finir, nous exportons ce schéma en tant que modèle Mongoose appelé « User », Ainsi il est disponible pour notre application.</p>

                <h4 id='bdd_terminal'>Utiliser le terminal pour interagir avec la base de donnée</h4>

                <p>dans le terminal entrer <code>mongosh</code> si vous tapez <code>help</code> vous aurez les principales ligne de commande mongoDB ex: <br />
                    <code>show databases</code> ou <code>show dbs</code> vous permet de voir les bases de données, vous trouverez par défaut trois bases de données </p>

                <h4>Creer une base de donnée</h4>

                <p>pour creer une base de donnée utiliser la commande <code>use</code> ainsi créons la base de donnée légumes avec <code>use legumesDB</code> la console vous renvoie <code>switched to db legumesDB</code> il indique qu'on a bougé vers la data base legumesDB <br /> Une base de donnée n'est réellement créer que lorsqu'elle reçoit du contenu. </p>

                <h4>Creer une collection</h4>

                <p>pour créer une collection on tape <code>db.legumes.insertOne()</code> db pour la base de donnée <code>legumes</code> est le nom de la collection et <code>insertOne</code> pour inserer dans la collection et à l'intérieur des parentheses on insert des objets JavaScript donc on utilise des accolades <code>db.legumes.insertOne({'{'}_id: 3, name: "khizo", price: 4{'}'})</code>. Si on ne met pas de _id mongo nous en créer un <code>db.legumes.insertOne({'{'}name: "poireau", price: 20{'}'})</code> si vous cliquez sur entrer vous aurez en resultat <code> <br />{'{'} <br />

                    acknowledged: true,<br />
                    insertedId: ObjectId("637280c684905edfd1546417") <br />
                    {'}'}</code> <br />
                    cette reponse nous dit qu'il a bien insert un objet et qu'il a un ID automatique </p>
                <p>Une autre façon de créer une collection c'est d'utiliser la methode <code>db.createCollection("nomDeLaCollection")</code> et comme avec la création de la base de donnée, une collection n'est vraiment crée que lorsqu'elle reçoit du contenu</p>

                <h4>La requete find()</h4>

                <p>Recherchons notre objet dans la base de donnée avec la commande <code>db.legumes.find()</code> la méthode find() sans rien en paramètre nous renverra tous les objets de la collection</p>
                <p><code>show collections</code> affiche la collection </p>

                <p>Pour insérer de nouvelle collection <code>db.legumes.insertOne()</code></p>
                <p>Pour rechercher un objet en particulier via leur critère <code>db.legumes.findOne({'{'}name: "carotte"{'}'})</code></p>

                <p>Requete pour selectionner un objet dont la valeur est superieur à... avec <code>gt</code> ""gt" comme "great than" <code>db.legumes.find({'{'}price : {'{'}$gt : 20 {'}}'})</code></p>

                <p>Requete pour selectionner un objet dont la valeur est inferieur à... avec <code>lt</code> ""lt" comme ""less than" <code>db.legumes.find({'{'}price : {'{'}$lt : 20 {'}}'})</code> on peut ajouter un deuxieme parametre qu'on appelera la projection <code>db.legumes.find({'{'}price : {'{'}$lt : 20 {'}'}{'}'}, {'{'}name: 1{'}'})</code> ainsi on nous renvoie uniquement la name. Je peux ajouter de ne pas afficher l'id, (dans mongoDB l'id commence par un underscore _id) <code>db.legumes.find({'{'}price : {'{'}$lt : 20 {'}'}{'}'}, {'{'}name: 1, _id: 0{'}'})</code></p>



                <h4>La requete update()</h4>

                <p>Pour changer un element <code> db.legumes.updateOne({'{'}name : "aubergine" {'}'}, {'{'}$set: {'{'}name: "tomate"{'}'}{'}'}) </code> le premier parametre sera le critere de selection et en deuxieme parametre on entrera la valeur à changer</p>

                <p>Pour changer un element name et son prix <code> db.legumes.updateOne({'{'}name : "courgette" {'}'}, {'{'}$set: {'{'}name: "epinards", price: 43{'}'}{'}'}) </code> le premier parametre sera le critere de selection et en deuxieme parametre on entrera la valeur à changer</p>


                <h4>La requete delete()</h4>

                <p>Comment supprimer un élément ? avec <code>deleteOne()</code> entrons dans notre terminal <code>db.legumes.deleteOne({'{'}price: 34 {'}'})</code></p>
                <p>supprimer par rapport à l'id <code>db.legumes.deleteOne({'{'}_id: 3{'}'})</code></p>

                <h4>Insertion d'objets</h4>

                <pre>
                    <code>
                        db.legumes.insertOne(
                        {'{'}
                        _id: 1,
                        name: "dattes",
                        price: 15,
                        origine: [
                        {'{'} <br />
                        pays: "Espagne",
                        region: "Andalousie",
                        temps: 35
                        {'}'},<br />
                        {'{'}
                        pays: "Maroc",
                        region: "Casablanca",
                        temps: 40
                        {'}'},<br />
                        {'{'}
                        pays: "Portugal",
                        region: "Porto",
                        temp: 30
                        {'}'}

                        ] <br />
                        {'}'})
                    </code>
                </pre>

                <h4>Operateur de requete</h4>

                <p>Comparaison</p>
                <p>Les opérateurs suivants peuvent être utilisés dans les requêtes pour comparer des valeurs :</p>
                <ul>
                    <li>$eq: Les valeurs sont égales</li>
                    <li>$ne: Les valeurs ne sont pas égales</li>
                    <li>$gt: La valeur est supérieure à une autre valeur</li>
                    <li>$gte: La valeur est supérieure ou égale à une autre valeur</li>
                    <li>$lt: La valeur est inférieure à une autre valeur</li>
                    <li>$lte: La valeur est inférieure ou égale à une autre valeur</li>
                    <li>$in: la valeur correspond dans un tableau</li>
                </ul>
                <p>Logique</p>
                <p>Les opérateurs suivants peuvent logiquement comparer plusieurs requêtes.</p>
                <ul>
                    <li>$and: renvoie les documents où les deux requêtes correspondent</li>
                    <li>$or: renvoie les documents où l'une ou l'autre des requêtes correspond</li>
                    <li>$nor: renvoie les documents où les deux requêtes ne correspondent pas</li>
                    <li>$not: renvoie les documents où la requête ne correspond pas</li>
                </ul>
                <p>Evaluation</p>
                <p>Les opérateurs suivants aident à évaluer les documents.</p>
                <ul>
                    <li>$regex: Autorise l'utilisation d'expressions régulières lors de l'évaluation des valeurs de champ</li>
                    <li>$text: Effectue une recherche de texte</li>
                    <li>$where: Utilise une expression JavaScript pour faire correspondre les documents</li>
                </ul>

                <h4>Operateur de mise à jour</h4>

                <p>Des champs</p>
                <p>Les opérateurs suivants peuvent être utilisés pour mettre à jour les champs :</p>

                <ul>
                    <li>$currentDate: Définit la valeur du champ à la date actuelle</li>
                    <li>$inc: Incrémente la valeur du champ</li>
                    <li>$rename: Renomme le champ</li>
                    <li>$set: Définit la valeur d'un champ</li>
                    <li>$unset: Supprime le champ du document</li>
                </ul>

                <p>Déployer</p>

                <p>Les opérateurs suivants facilitent la mise à jour des tableaux.</p>

                <ul>
                    <li>$addToSet: Ajoute des éléments distincts à un tableau</li>
                    <li>$pop: Supprime le premier ou le dernier élément d'un tableau</li>
                    <li>$pull: Supprime tous les éléments d'un tableau qui correspondent à la requête</li>
                    <li>$push: Ajoute un élément à un tableau</li>
                </ul>

                <h3>Mongoose</h3>

                <p>Mongoose est un module qui va nous permettre d'interagir avec notre base de données mongoDB de maniere simple, mongose est à mongoDB ce que Jquery est à JavaScript</p>

                <p>créer un nouveau dossier</p>
                <p>dans ce dossier initialiser les modules ou packets avec <code>npm init</code></p>
                <p>installer les modules <code>npm i express mongoose </code></p>
                <p>Créer un nouveau fichier server.js qui va nous permettre d'interagir avec notre base de donnée</p>
                <p>On fait un require des modules </p>
                <pre><code>
                    <code>const express = require('express')</code><br />
                    <code>const mongoose = require('mongoose')</code><br />
                    <code>const app = express()</code><br /><br />
                    <code>app.listen(3000, () {'=>'} {'{'} <br />
                        console.log("server is running on the port 3000") {'}'} )</code>
                </code></pre>

                <p>documentation mongoose pour bien démarrer <a href="https://mongoosejs.com/docs/index.html">doc</a></p>

                <p>Nous allons interagir avec notre base de donnée via le terminal</p>









                <pre>
                    <code>
                        const express = require('express') <br />
                        const mongoose = require('mongoose') <br />
                        const app = express() <br /><br />

                        main().catch(err {'=>'} console.log(err)); <br /><br />

                        async function main() {'{'} <br />
                        await mongoose.connect('mongodb://localhost:27017/dbMovie');<br />
                        {'}'} <br /><br />

                        const moviesSchema = new mongoose.Schema({'{'} <br />
                        name: String,<br />
                        year: Number,<br />
                        actors: String <br />
                        {'}'});<br />
                        const Movies = mongoose.model('Movies', moviesSchema);<br /><br />

                        const PulpFiction = new Movies({'{'} <br />
                        name: "Pulp Fiction",<br />
                        year: 1997,<br />
                        actors: "Samuel Lee Jackson" <br />
                        {'}'}) <br />
                        PulpFiction.save() <br /><br />

                        app.listen(3000, () {'=> {'} <br />
                        console.log('serveur lancé sur le port 3000') <br />
                        {'}'}) <br />
                    </code>
                </pre>

                <p>Si on actualise, mongo enregistre à nouveau la collection. il faut commenter <code>PulpeFiction.save()</code>. Si on veut enregistrer la nouvelle collection Interstellar par exemple il faudra ajouter <code>Insterstellar.save()</code><br /></p>

                <pre>
                    <code>
                        const Interstellar = new Movies ({'{'} <br />
                        name: "Interstellar", <br />
                        year: 2013, <br />
                        actors: "macCaunaugey" <br />
                        {'}'}) <br />
                        //PulpeFiction.save(); <br />
                        Interstellar.save();
                    </code>
                </pre>

                <p>Si on veut incorporer plusieurs objets à la fois nous utiliseront la methode <code>insertMany</code>. Ajoutons deux objets, deux films</p>
                <pre>
                    <code>
                        const Avengers = new Movies ({'{'} <br />
                        name: "Avengers", <br />
                        year: 2016, <br />
                        actors: "Dauney JR" <br />
                        {'}'}) <br /><br />

                        const Jayce = new Movies ({'{'} <br />
                        name: "Jayce et les conquerants de la lumière", <br />
                        year: 1983, <br />
                        actors: "Jayce" <br />
                        {'}'}) <br />
                        //PulpeFiction.save(); <br />
                        //Interstellar.save(); <br />
                        Movies.insertMany([Avengers, Jayce]) <br />
                    </code>
                </pre>

                <h4>Faire des requetes à partir de notre fichier .js</h4>

                <p>Au lieu de faire un <code>find()</code> dans notre terminal on va le faire dans notre code </p>

                <pre>
                    <code>
                        Movies.find({'{'}{'}'}, (err, movies) {'=>    {'} <br />
                        if(err){'{'} <br />
                        console.log(err) <br />
                        {'}'}else {'{'} <br />
                        console.log(movies); <br />
                        {'}'} <br />
                        {'}'}) <br />
                    </code>
                </pre>
                <p>Si on lance le server on nous affiche les collections dans le terminal sous la forme d'un tableau</p>
                <p>Si je console.log movies de 0 il ne m'affichera que l'élément premier de ce tableau</p>

                <pre>
                    <code>
                        Movies.find({'{'}{'}'}, (err, movies) {'=>    {'} <br />
                        if(err){'{'} <br />
                        console.log(err) <br />
                        {'}'}else {'{'} <br />
                        console.log(movies[0]); <br />
                        {'}'} <br />
                        {'}'}) <br />
                    </code>
                </pre>

                <p>Ajoutons la liste des acteurs des films de la collection avec une boucle</p>
                <pre>
                    <code>
                        Movies.find({'{'} {'}'}, (err, movies) {'=> {'} <br />
                        if (err) {'{'} <br />
                        console.log(err) <br />
                        {'}'} else {'{'} <br />
                        for (let i = 0; i {'<'} movies.length; i++) {'{'} <br />
                        console.log(movies[i].actors); <br />
                        {'}'} <br />
                        {'}'} <br />
                        {'}'}) <br />
                    </code>
                </pre>

                <p>Enlevons la boucle et recherchons uniquement l'objet Avengers</p>

                <pre>
                    <code>
                        Movies.find({'{'}name: "Avengers"{'}'}, (err, movies) {'=> {'} <br />
                        if (err) {'{'} <br />
                        console.log(err) <br />
                        {'}'} else {'{'} <br />
                        console.log(movies)
                        {'}'} <br />
                        {'}'}) <br />
                    </code>
                </pre>

                <h4 id='supprimer'>Supprimer et ajouter des données</h4>

                <p>Ajoutons un nouvel objet</p>

                <pre>
                    <code>
                        const Avengers1 = new Movies ({'{'} <br />
                        name: "Avengers", <br />
                        year: 2016, <br />
                        actors: "Dauney JR" <br />
                        {'}'}) <br /><br />
                    </code>
                    <code>
                        const Avengers2 = new Movies ({'{'} <br />
                        name: "Avengers", <br />
                        year: 2018, <br />
                        actors: "Dauney JR" <br />
                        {'}'}) <br /><br />
                    </code>
                    <code>
                        const Avengers3 = new Movies ({'{'} <br />
                        name: "Avengers", <br />
                        year: 2020, <br />
                        actors: "Dauney JR" <br />
                        {'}'}) <br /><br />
                    </code>
                    <code>
                        const Avengers4 = new Movies ({'{'} <br />
                        name: "Avengers", <br />
                        year: 2022, <br />
                        actors: "Dauney JR" <br />
                        {'}'}) <br /><br />
                    </code>

                    <code>Movies.insertMany([Avengers1, Avengers2, Avengers3, Avengers4])</code>
                </pre>

                <p>Pour effacer un objet on utilisera la methode <code>deleteMany()</code> <code>Movie.deleteMany()</code> cette methode prend deux parametres, dans la premiere on selectionne tous les objets ou document qui contiennent Avengers, le deuxieme parametre est une fonction callback pour tester les erreurs </p>

                <pre>
                    <code>
                        Movies.deleteMany({'{'}name: "Avengers"{'}'}, (err) {'=> {'} <br />
                        if(err) {'{'} <br />
                        console.log(err); <br />
                        {'}'} else {'{'} <br />
                        console.log("tout a fonctionné"); <br />
                        {'}'} <br />
                        {'}'}) <br />
                    </code>
                </pre>
                <p>commentons les find() qui suivent </p>

                <h4 id='modifier'>Modifier des données</h4>

                <p>Ajoutons trois objets</p>
                <pre>
                    <code>
                        const Scarface = new Movies ({'{'} <br />
                        name: "Scarface", <br />
                        year: 1983, <br />
                        actors: "Al-pacino" <br />
                        {'}'}) <br /><br />
                    </code>
                    <code>
                        const StarWars = new Movies ({'{'} <br />
                        name: "StarWars", <br />
                        year: 1983, <br />
                        actors: "Darth Vador" <br />
                        {'}'}) <br /><br />
                    </code>
                    <code>
                        const Avatar = new Movies ({'{'} <br />
                        name: "Avatar", <br />
                        year: 2015, <br />
                        actors: "Coluche" <br />
                        {'}'}) <br /><br />
                    </code>
                </pre>
                <p>Modifions Jayce, pour cela utilisons la methode </p>
                <pre>
                    <code>Movies.updateOne({'{'}name: "Jayce et les conquerants de la lumière"{'}'}, {'{'}name: "dents de la mer"{'}'}, (err){' => {'} <br />
                        if(err) {'{'} <br />
                        console.log(err); <br />
                        {'}'} else {'{'} <br />
                        console.log("mise à jour effectuée"); <br />
                        {'}'} <br />
                        {'}'} )</code>
                </pre>



                <p>Exercice</p>
                <ul>
                    <li>Créer une base de donneé nommée groupWebDevDB</li>
                    <li>Créer une collection nommée prenom</li>
                    <li>Créer une seconde collection appelée nom</li>
                    <li>Créer une troisieme collection appelée "age"</li>
                    <li>Créer une quatrieme collection appelée "ville"</li>
                    <li>Creer une cinquieme collection appelée "codePostal"</li>
                </ul>


















                <p>---------------------------------------</p>

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


                <div>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default NodeCours;
