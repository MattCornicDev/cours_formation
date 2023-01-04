import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'

const ReactCours2 = () => {
    return (
        <>
            <Navbar />

            <Container>
                <h1>ReactCours2</h1>

                <nav className='nav flex-column navbar-expand-md' >

                    <a href="#introduction">Inntroduction</a>
                    <a href="#bases">Les bases de react</a>
                    <a href="#concepts-avances">Les concepts avancés</a>
                    <a href="#framework">Utilisations de Frameworks avec React </a>
                    <a href="#concepts-avances">Les concepts avancés</a>
                    <a href="#pratique">Pratique avec React.js</a>


                    <div className='d-inline'>
                        <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                    <div className='d-inline'>
                        <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                    </div>
                </nav >

                <div>
                    <h2 id='introduction'>Introduction à React.js</h2>

                    <ul>
                        <li>Qu'est-ce que React.js et pourquoi devrions-nous l'utiliser?</li>

                        <p>
                            React.js est une bibliothèque JavaScript open-source développée par Facebook qui est utilisée pour construire des interfaces utilisateur (IU) de manière efficace. Il permet aux développeurs de créer des applications Web à l'aide de composants réutilisables qui représentent des parties de l'IU.

                            Il y a plusieurs raisons pour lesquelles vous devriez utiliser React.js:

                            Il est facile à apprendre et à utiliser: React.js utilise une syntaxe facile à comprendre et à utiliser qui est similaire à celle de JavaScript. Cela signifie que même si vous êtes débutant en développement Web, vous pourrez facilement apprendre à utiliser React.js.

                            Il est performant: React.js utilise une technique appelée "reconnaissance de modification" qui permet de mettre à jour uniquement les parties de l'IU qui ont été modifiées, ce qui améliore considérablement les performances de l'application.

                            Il est facile à maintenir: Comme les composants de React.js sont réutilisables, il est facile de maintenir et de mettre à jour une application construite avec React.js.

                            Il est utilisé par de nombreuses grandes entreprises: De nombreuses grandes entreprises utilisent déjà React.js, notamment Facebook, Netflix, Airbnb et Dropbox. Cela signifie qu'il y a une grande communauté de développeurs qui sont expérimentés dans l'utilisation de React.js et qui sont prêts à partager leur connaissance et leurs meilleures pratiques.</p>

                        <li>Comment React.js s'intègre-t-il dans le développement web?</li>

                        <p>
                            React.js s'intègre dans le développement Web en tant que bibliothèque JavaScript qui peut être utilisée pour créer des interfaces utilisateur pour les applications Web.

                            Voici comment cela fonctionne en général:

                            Tout d'abord, vous créez des composants React.js qui représentent des parties de l'interface utilisateur de votre application, comme un bouton ou une boîte de dialogue.

                            Ensuite, vous utilisez ces composants pour construire l'interface utilisateur de votre application en les emboîtant les uns dans les autres de manière à créer une hiérarchie de composants.

                            Lorsque les données de votre application changent, React.js met à jour automatiquement l'interface utilisateur en modifiant uniquement les composants qui ont été affectés par ces changements de données.

                            Enfin, vous pouvez utiliser React.js avec d'autres bibliothèques ou frameworks JavaScript pour ajouter des fonctionnalités supplémentaires à votre application, comme la gestion des routes ou la communication avec un serveur.

                            En utilisant React.js de cette manière, vous pouvez construire des applications Web efficaces et faciles à maintenir qui offrent une expérience utilisateur fluide.</p>

                        <li>Configuration de l'environnement de développement React.js</li>

                        <p>
                            Voici comment configurer votre environnement de développement React.js:

                            Installez Node.js: React.js est basé sur Node.js, alors assurez-vous de l'installer sur votre ordinateur. Vous pouvez télécharger Node.js à partir du site Web officiel (https://nodejs.org/).

                            Créez un nouveau répertoire pour votre projet: Ouvrez votre terminal et naviguez jusqu'au répertoire où vous souhaitez créer votre projet.

                            Initialisez un nouveau projet npm: Saisissez la commande suivante pour initialiser un nouveau projet npm et suivez les instructions à l'écran:
                        </p>

                        <pre>
                            <code>
                                npm init
                            </code>
                        </pre>

                        <p>
                            Installez React.js et les dépendances nécessaires: Saisissez la commande suivante pour installer React.js et les dépendances nécessaires (React DOM et Babel) dans votre projet:
                        </p>

                        <pre>
                            <code>
                                npm install --save react react-dom @babel/core @babel/preset-env @babel/preset-react
                            </code>
                        </pre>

                        <p>
                            Créez un fichier HTML de base: Créez un fichier HTML de base dans votre répertoire de projet qui inclura une balise script pour inclure votre code JavaScript. Voici un exemple de fichier HTML de base:
                        </p>

                        <pre>
                            <code>
                                {/*
                                < !DOCTYPE html>
                                <html>
                                    <head>
                                        <meta charset="utf-8">
                                            <title>My React App</title>
                                    </head>
                                    <body>
                                        <div id="root"></div>
                                        <script src="index.js"></script>
                                    </body>
                                </html>
    */}
                            </code>
                        </pre>

                        <p>
                            Créez un fichier JavaScript: Créez un fichier JavaScript dans votre répertoire de projet qui contiendra votre code React.js. Vous pouvez appeler ce fichier index.js ou tout autre nom que vous préférez.

                            Configurez Babel: Babel est un outil qui vous permet de transformer votre code JavaScript utilisant les dernières fonctionnalités de JavaScript (comme les classes ou les fonctions fléchées) en un code compatible avec tous les navigateurs. Pour configurer Babel, créez un fichier .babelrc dans votre répertoire de projet et ajoutez les lignes suivantes:
                        </p>

                        <pre>
                            <code>
                                {/*
                                {
                                    "presets": ["@babel/preset-env", "@babel/preset-react"]
}
*/}
                            </code>
                        </pre>

                        <p>
                            Créez un script npm pour compiler votre code: Ouvrez votre fichier package.json et ajoutez un script npm qui compile votre code en utilisant Babel. Voici un exemple de script npm qui compile un fichier appelé index.js en un fichier appelé bundle.js:
                        </p>

                        <pre>
                            <code>
                                {/*
                                "scripts": {
                                */}
                            </code>
                        </pre>
                    </ul>

                    <h2 id='bases'>Les bases de React.js</h2>

                    <ul>
                        <li>Les composants de base de React.js</li>
                        <li>La gestion de l'état et des données avec React.js</li>
                        <li>L'utilisation de la syntaxe JSX dans React.js</li>
                        <li>L'utilisation de props et de context dans React.js</li>
                    </ul>

                    <h2 id='concepts-avances'>Les concepts avancés de React.js</h2>

                    <ul>
                        <li>L'utilisation de la bibliothèque Redux pour la gestion de l'état global</li>
                        <li>L'intégration de React.js avec des API externes</li>
                        <li>La création de routes avec React Router</li>
                        <li>La création de formulaires avec React.js
                        </li>
                    </ul>

                    <h2 id='framework'>Utilisation de frameworks populaires avec React.js</h2>

                    <ul>
                        <li>Bootstrap avec React.js pour la création de maquettes rapides</li>
                        <li>Material-UI avec React.js pour la création d'interfaces utilisateur attrayantes</li>
                    </ul>

                    <h2 id='pratique'>Pratique avec React.js</h2>

                    <ul>
                        <li>Création d'une application de gestion de tâches avec React.js et Redux</li>
                        <li>Création d'une application de réseau social avec React.js et Firebase</li>
                        <li>Création d'une application de commerce électronique avec React.js et Stripe</li>
                    </ul>




                </div>

                <Footer />

            </Container>

        </>

    )
}

export default ReactCours2