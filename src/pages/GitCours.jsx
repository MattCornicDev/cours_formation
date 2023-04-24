import React, { Component } from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer';
import './gitCours.css';


export default class gitCours extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div className="table-des-matieres">
                    <div className='d-inline'>
                        <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                    <div className='d-inline'>
                        <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                    </div>
                </div>

                <div className='container-cours'>
                    <h2>Commandes Git de base :</h2>
                    <ul>
                        <li><code>git init</code> - initialise un dépôt Git dans un nouveau répertoire local</li>
                        <li><code>git add &lt;fichier&gt;</code> - ajoute un fichier à la zone de staging</li>
                        <p>Ajouter un "." pour signifier l'ensemble du fichier courant</p>

                        <li><code>git commit -m "Le message correspondant au commit"</code> - enregistre les modifications apportées au dépôt</li>

                        <li><code>git status</code> - affiche l'état actuel de la branche</li>
                        <li><code>git branch</code> - affiche toutes les branches locales</li>
                        <li><code>git checkout &lt;nom-de-branche&gt;</code> - bascule sur la branche spécifiée</li>
                        <li><code>git merge &lt;nom-de-branche&gt;</code> - fusionne une branche dans la branche actuelle</li>
                        <li><code>git push</code> - pousse les modifications locales vers le dépôt distant</li>
                        <li><code>git pull</code> - récupère les modifications du dépôt distant</li>
                    </ul>
                    <h2>Commandes GitHub de base :</h2>
                    <ul>
                        <li><code>git clone &lt;lien-du-dépôt&gt;</code> - clone un dépôt GitHub existant sur votre machine locale</li>
                        <li><code>git remote add origin &lt;lien-du-dépôt&gt;</code> - ajoute un lien distant vers le dépôt GitHub</li>
                        <li><code>git push -u origin &lt;nom-de-branche&gt;</code> - pousse une branche locale vers le dépôt distant</li>
                        <li><code>git pull origin &lt;nom-de-branche&gt;</code> - récupère les modifications du dépôt distant pour une branche spécifique</li>
                        <li><code>git branch -a</code> - affiche toutes les branches locales et distantes</li>
                        <li><code>git merge origin/&lt;nom-de-branche&gt;</code> - fusionne une branche distante dans la branche locale actuelle</li>
                        <li><code>git fetch</code> - récupère toutes les modifications du dépôt distant</li>
                        <li><code>git tag &lt;nom-de-tag&gt;</code> - crée une étiquette pour une version spécifique</li>
                        <li><code>git push --tags</code> - pousse les étiquettes vers le dépôt distant.</li>
                    </ul>

                    <div>
                        <Footer />
                    </div>

                </div>


            </>




        )
    }
}
