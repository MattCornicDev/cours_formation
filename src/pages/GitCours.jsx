import React, { Component } from 'react'
import Navbar from '../components/navigation/Navbar'
import TableNode from '../components/tableMatieres/TableNode'

export default class gitCours extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                </div>
                <div className='container'>

                    <h1>GIT</h1>
                    <div className='table-des-matieres'>
                        <ul>
                            <li><a href='#installation'>Installation</a></li>
                            <li><a href='#commande_de_base'>Commande de base</a></li>
                        </ul>
                    </div>
                    <h2>Introduction</h2>
                    <p>git un outil de versionning. Désormais inutile de copier coller votre projet pour faire des modifications dans la crainte de saboter tout votre travail. Git permet d'ajouter, de modifier, d'effacer et surtout de revenir en arrière sans rien perdre de votre progression.</p>

                    <h2 id='installation'>Installation</h2>
                    <p>installer git via le site <a href='https://git-scm.com/'>officiel ici</a></p>

                    <h2 id='commande_de_base'>Commande de base</h2>
                    <p>Pour initialiser un projet</p>
                    <pre className='code_entre'>
                        <code>
                            <kbd>git init</kbd>
                        </code>
                    </pre>
                    <p>Pour configurer git</p>
                    <pre>
                        <code>
                            <kbd>git config --global user.email "votreEmail@gmail.com</kbd><br />
                            <kbd>git config --global user.name "votreNom"</kbd>
                        </code>
                    </pre>

                    <p>Pour connaitre l'état de votre configuration</p>
                    <code><kbd>git config --global color.ui true</kbd></code>

                    <p>Connaitre l'état de votre versionning</p>
                    <pre><code><kbd>git status</kbd></code></pre>

                    <p>Ajout des fichiers</p>
                    <pre>
                        <code><kbd>git add <code>&lt;fichier&gt; //ajoute le fichier</code></kbd></code><br />
                        <code><kbd>git add <code>&lt;dossier&gt; //ajoute le dossier</code></kbd></code><br />
                        <code><kbd>git *.html ; //ajoute le fichier</kbd></code><br />
                        <code><kbd>git add --all ou . //ajoute le fichier</kbd></code><br />
                    </pre>

                    <p>commit</p>
                    <pre>
                        <code>
                            <kbd>git commit -m "Message du commit</kbd>
                        </code>
                    </pre>

                    <p>log nous permet de retourner les informations sur les commits du projet</p>
                    <pre>
                        <code><kbd>git log //Récupère et affiche les derniers commit</kbd></code>
                    </pre>

                    <p>Options utiles</p>
                    <code>--online</code>, affiche l'historique avec pour chaques commits une ligne<br />
                    <code>-n &lt;nombre&gt;, affiche le nombre de commit que vous souhaitez</code><br />
                    <code>-p &lt;fichier&gt;, permet de voir l'historique des commits concernant un fichier en particulier</code><br />
                    <code>--author &lt;motif&gt;, historique en fonction du nom de l'auteur</code>

                    <p>La commande diff</p>
                    <code>
                        <kbd>git diff</kbd><br />
                        <kbd>git diff &lt;fichier&gt;</kbd>
                    </code><br />

                    <p>Comparer des commits ensemble</p>
                    <code>
                        <kbd>git diff &lt;commit&gt; // compare l'état actuel au commit &lt;commit&gt;</kbd><br />
                        <kbd>git diff &lt;commit&gt;..&lt;commit&gt; // compare les fichiers entre deux commits</kbd>
                    </code>



                </div>
            </>

        )
    }
}
