import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import { Container } from 'react-bootstrap'

export default function ReactCours() {
    return (
        <>

            <Navbar />

            <Container>

                <nav className='nav flex-column navbar-expand-md' >

                    <a href="#reactjs">React JS</a>
                    <a href="#app&index">App.js et index.js</a>
                    <a href="#types">Types</a>


                    <div className='d-inline'>
                        <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                    <div className='d-inline'>
                        <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                    </div>
                </nav >


                <h1 id='#reactjs'>React JS</h1>

                <p>Un site web standard suit un modèle <strong>Multi-Page Application</strong> Lorsque l'on demande une page on fait une requête HTTP au serveur, le serveur renvoie alors page demandé. Le serveur renvoie une reponse pour chaque requête faite <br />
                    <strong>Single Page Application</strong> SPA. Dans une app SPA il y a une  diminution des charges soumises au serveur, l'utilisateur ne charge la page qu'une seule fois. Une fois la page chargé il n'y a pas de rechargement chaque fois que vous sollicité une page, elles sont mises en cache sur le navigateur et ne nécessitent plus d’interaction avec le serveur pour charger le contenu statique. Séparation des interfaces, L’interface client en étant une application à part entière, permet de découpler le code « front » du code « back » permettant une meilleur lisibilité du code ainsi qu'une meilleur répartition des rôles.
                </p>

                <p>Néanmoins comme tout langage, tout framework, toute librairie, il existe quelque defaut à React. La lenteur du chargement intitial de la page, Un référencement ralentit. Le rendu étant JavaScript les robots de google detectent une page vide lors de leur premier passage sur la page</p>

                <p>Server Side Rendering est une méthode servant à générer un server node coté server en utilisant React, Le module va en effet permettre de coupler les avantages des MPA et des SPA.  Le contenu de la première page va alors être joué côté serveur, permettant d’obtenir le contenu statique de la page dès la récupération du document HTML. Ensuite, une fois le Javascript chargé, react reprend son fonctionnement initial qui est la génération des pages côté client appelé « Client Side Rendering ».
                </p>

                <p>
                    React Server Components, React vient d’introduire une nouvelle technologie, les « React Server Component ». Contrairement au SSR qui va simplement générer le HTML de chaque composant de la page à leur état initial, les RSC vont directement exécuter l’intégralité du code d’un composant React côté serveur, sans passer par le client avant de lui transmettre le résultat sous la forme d’un pseudo JSON.
                </p>

                <p>L’avantage initial des « React Server Components » est la diminution des packets Javascript, envoyés au client. Les composants côtés serveur ainsi que leur dépendance, n’étant pas transmises.</p>

                <p>Créer un projet <code>yarn create react-app my-app</code></p>
                <p>Le dossier src</p>
                <p>Effacer le contenu du dossier src, dans le nouveau src </p>

                <ol>
                    <li>créer un index.js</li>
                    <li>importer React et ReactDom</li>
                    <li>Recuperer l'id root du index.html</li>
                    <li><code>ReactDom.render({'<'}App{' />'}, document.getElelementById('root')</code></li>
                    <li>La version 18 <code>const root = ReactDOM.createRoot(document.getElementById('root'));<br />
                        root.render({'<'}App {'/>'});</code></li>
                    <li>importer le composant App du fichier app<code>Import App from "./app"</code></li>
                </ol>



                <h3 id='#app&index'>App.js et index.js</h3>

                <p>Dans le fichier src créer le fichier App.js</p>

                <ol>
                    <li>Initialiser avec rafce pour generer le code de base</li>
                    <li>"Importer react-icons via npm"</li>
                </ol>
                <ol>
                    <li>Dans le src créer un dossier components et dans celui-ci créer des dossiers nommés : article, brand, cta, feature, navbar</li>
                    <li>dans le dossier article créer deux fichiers Article.jsx et article.css</li>
                    <li>faite un rafce pour générer le code de base et importer le fichier css</li>
                    <li>Faite pareil avec les autres dossiers</li>
                </ol>

                <p>Dans le fichier App.js il faudrait importer tous les fichiers jsx de nos components mais nous allons alléger et factoriser plutôt que que de tout mettre dans le fichier app, le code pour le mettre dans un fichier index.js creer dans le dossier components. Dans ce fichier exporter les fichiers components. <br /> <code>export {'{'}default as Article{'}'} from './article/Article</code><br />
                    <code>export {'{'}default as Brand{'}'} from './brand/Brand</code><br />
                    ...</p>

                <p>Dans le  src créer un dossier nommé containers dedans créer des dossier nomme blog, features, footer, header, possibility, whatGPT3, dans chacun des ces dossiers créer 2 fichiers jsx et css et comme pour les components exporter ces fichiers via un index.js</p>

                <p>Dans le dossier App.js importer les components et les containers : <br />
                    <code>import {'{'}Article, Brand, CTA, Feature, Navbar{'}'} from './components'</code> <br />
                    <code>import {'{'}Blog, Features, Footer, Header, Possibility, WhatGPT3{'}'} from './containers'</code></p>

                <p>Créer un fichier App.css pour le css de l'ensemble de l'app, dans ce fichier par exemple entrez-y ces quelques ligne de css </p>
                <pre>
                    <code>
                        * {'{'} <br />
                        box-sizing: border-box; <br />
                        padding: 0px; <br />
                        margin: 0px; <br />
                        scroll-behavior: smooth; <br />
                        {'}'} <br /><br />
                        body {'{'} <br />
                        background: var(--color-bg)
                    </code>
                </pre>
                <p>Dans un fichier nommé index.css dans le dossier source entrer ceci :</p>
                <pre>
                    <code>

                        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap'); <br />

                        :root {'{'} <br />
                        --font-family: 'Manrope', sans-serif; <br /><br />

                        --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);<br />
                        --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);<br /><br />

                        --color-bg: #040C18;<br />
                        --color-footer : #031B34;<br />
                        --color-blog: #042c54;<br />
                        --color-text: #81AFDD;<br />
                        --color-subtext: #FF8A71;<br />
                        {'}'}
                    </code>
                </pre>
                <p>Dans <code>index.js</code> importer le fichier <code>index.css</code><br />
                    <code>import './index.css</code></p>

                <p>Dans le fichier App.css introduisez le gradient pour cela faites-vous aidez par des sites qui vous machent le travaille, comme <a href="https://angrytools.com/">Angry Tools</a></p>
                <pre>
                    <code>
                        .gradient__bg {'{'} <br />
                    /* ff 3.6+ */ <br />
                        background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);<br /><br />

    /* safari 5.1+,chrome 10+ */ <br />
                        background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);<br /><br />

    /* opera 11.10+ */ <br />
                        background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%); <br /><br />

    /* ie 10+ */ <br />
                        background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%); <br /><br />

    /* global 92%+ browsers support */ <br />
                        background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

                        {'}'}
                    </code>
                </pre>

                <p>Ajouter le gradient text à la suite</p>
                <pre>
                    <code>
                        .gradient__text {'{'} <br />
                        background:var(--gradient-text); <br />
                        background-clip: text; <br />
                        -webkit-background-clop: text; <br />
                        -webkit-text-fill-color: transparent; <br />
                        {'}'} <br />
                        <br />
                        .section__padding {'{'} <br />
                        padding: 4rem 6rem;<br />
                        {'}'} <br /><br />
                        .section__margin {'{'} <br />
                        margin: 4rem 6rem; <br />
                        {'}'} <br />
                    </code>
                </pre>

                <h3>34'26</h3>

                <Footer />

            </Container>



        </>

    )
}
