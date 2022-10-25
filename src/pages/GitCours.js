import React, { Component } from 'react'

export default class gitCours extends Component {
    render() {
        return (
            <div className='container'>
                <h1>GIT</h1>
                <div className='table-des-matieres'>
                    <ul>
                        <li><a href='#installation'>Installation</a></li>
                    </ul>
                </div>
                <h2>Introduction</h2>
                <p>git un outil de versionning. Désormais inutile de copier coller votre projet pour faire des modifications dans la crainte de saboter tout votre travail. Git permet d'ajouter, de modifier, d'effacer et surtout de revenir en arrière sans rien perdre de votre progression.</p>

                <h2 id='installation'>Installation</h2>
                <p>installer git via le site <a href='https://git-scm.com/'>officiel ici</a></p>
            </div>

        )
    }
}
