import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import {Container} from 'react-bootstrap'

export default function React_cours() {
    return (
        <>
            
            <Navbar />
               
            <Container>
                
           
                <h1>React JS</h1>

                <h2>Créer un projet</h2>
                <h3>Le dossier src</h3>
                <p>Effacer le contenu du dossier src, dans le nouveau rsc </p>
                    
                    <ol>
                        <li>créer un index.js</li>
                        <li>importer React et ReactDom</li>
                        <li>Recuperer l'id root du index.html</li>
                        <li><code>ReactDom.render(App, document.getElelementById('root')</code></li>
                        <li>Import App from "./App"</li>
                    </ol>
                    
               

                <h3>App.js et index.js</h3>

                <p>Dans le fichier src créer le fichier App.js</p>

                <ol>
                    <li>Initialiser avec rafce pour generer du code</li>
                    <li>Importer react-icons via npm</li>
                </ol>
                <ol>
                    <li>Dans le components creer un dossier nommé article, brand, cta, feature, navbar</li>
                    <li>dans le dossier article créer deux fichiers Article.jsx et article.css</li>
                    <li>faite un rafce pour generer le code de base et importer le fichier css</li>
                    <li>Faite pareil avec les autres dossiers</li>
                </ol>

                <p>Dans le ficheir App.js il faudrait importer tous les fichiers jsx de nos components mais nous allons alleger le code pour le mettre dans un fichier index.js creer dans le dossier components. Dans ce fichier exporter les fichiers components 'export default as Article from './article/Article'</p>

                <p>Dans le  src creer un dossier nommé containers dedans creer des dossier nomme blog, features, footer, header, possibility, whatGPT3, dans chacun des ces dossiers créer 2 fichiers jsx et css comme pour les components exporter ces fichiers via un index.js</p>

                <p>Dans le dossier App.js importer les components et les conteners : import Footer, Blog, Possibility... from './containers</p>
                <p>import CTA, Brand... from './components</p>


                

            
            <Footer />


            </Container>
            
            

            </>

    )
}
