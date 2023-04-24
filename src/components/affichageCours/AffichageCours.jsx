import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import './affichageCours.css';


function AffichageCours() {
    return (
        <div className='container'>
            <div className="card">
                <Link to="/gitCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/git.svg.png"} alt="GIT" />
                    <div className="infos">
                        <h3 className="title">Git</h3>
                        <p>Ce cours sur Git et GitHub est une introduction complète à la gestion de version et la collaboration de projets. Il couvre les concepts fondamentaux de Git et l'utilisation de GitHub pour héberger des projets et travailler en équipe</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/nodeCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/Node.js_logo.svg.png"} alt="Node" />
                    <div className="infos">
                        <h3 className="">Node</h3>
                        <p>Node.js est une plateforme open-source permettant d'exécuter des applications JavaScript côté serveur. Ce cours couvre les bases de la programmation en Node.js, y compris l'utilisation de modules, la gestion d'événements et la création de serveurs web</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ReactCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/media/reactjs.png"} alt="React" />
                    <div className="infos">
                        <h3 className="">React JS</h3>
                        <p>React.js est une bibliothèque JavaScript open-source pour la construction d'interfaces utilisateur. Ce cours couvre les concepts fondamentaux de React.js, y compris la création de composants, la gestion d'état et l'utilisation de JSX pour définir des interfaces utilisateur</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/SqlCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/media/sql-logo.jpg"} alt="SQL" />
                    <div className="infos">
                        <h3 className="">SQL</h3>
                        <p>SQL (Structured Query Language) est un langage de programmation utilisé pour la gestion de bases de données relationnelles. Ce cours couvre les concepts fondamentaux de SQL, y compris les requêtes SELECT, INSERT, UPDATE et DELETE, ainsi que la gestion des tables et des contraintes.</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ExercicesNode" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/Node.js_logo.svg.png"} alt="NodeJS" />
                    <div className="infos">
                        <h3 className="">Exercices Node JS</h3>
                        <p>La pratique de la programmation est essentielle pour améliorer ses compétences en codage. Les exercices en programmation aident à renforcer la compréhension des concepts et à résoudre des problèmes complexes.</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ApiRestFull" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/media/api.png"} alt="Api" />
                    <div className="infos">
                        <h3 className="">Api RestFull</h3>
                        <p>Les API RESTful (Representational State Transfer) sont des architectures de services web basées sur le protocole HTTP. Ce cours couvre les principes de base des API RESTful, y compris la définition des ressources, les méthodes HTTP et les réponses JSON. Il couvre également la mise en œuvre de bonnes pratiques telles que la gestion des erreurs et la sécurité.</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ProgrammationCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/media/programming.jpg"} alt="Programmation" />
                    <div className="infos">
                        <h3 className="">Programmation</h3>
                        <p>La programmation est un ensemble de compétences permettant de créer des logiciels, des applications et des sites web. Ce cours couvre les concepts fondamentaux de la programmation, y compris la syntaxe, les structures de contrôle, les fonctions et les algorithmes. Il explore également les différents langages de programmation tels que Python, Java, C++ et Ruby, ainsi que les bonnes pratiques de développement logiciel telles que les tests unitaires et la gestion de versions.</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/jsCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/media/javascript.jpg"} alt="JavaScript" />
                    <div className="infos">
                        <h3 className="">JavaScript Cours</h3>
                        <p>JavaScript est un langage de programmation populaire utilisé pour la création d'applications web et mobiles. Ce cours couvre les bases de la programmation JavaScript, y compris les variables, les fonctions, les boucles et les conditions. Il explore également les concepts avancés tels que la manipulation du DOM, la programmation orientée objet et l'utilisation de bibliothèques et frameworks tels que React.</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/HtmlCours" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/html.svg.png"} alt="Html" />
                    <div className="infos">
                        <h3 className="">Html Cours</h3>
                        <p>HTML (Hypertext Markup Language) est un langage de balisage utilisé pour structurer le contenu des pages web. Ce cours couvre les éléments de base de HTML, y compris les balises, les attributs, les listes et les tableaux. Il explore également les nouvelles fonctionnalités de HTML5, telles que les formulaires améliorés, les éléments multimédias et les APIs</p>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/ReactCoursTheorique" style={{ textDecoration: 'none' }}>
                    <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="React" />
                    <div className="infos">
                        <h3 className="">React Cours theorique</h3>
                        <p>Comprendre React JS pour développer des applications web dynamiques et interactives. Concepts clés : composants, états, propriétés et cycles de vie</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default AffichageCours
