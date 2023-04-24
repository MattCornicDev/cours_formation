import React from 'react'
import './cssCours.css'

function CssCours() {
    return (
        <>
            <h1>Cours</h1>

            <h3>Astuce</h3>
            <p>Le font-size html est égale à 16px de base dans les navigateurs. Donc 1 Rem = 16px.</p>
            <p>62.5% de 16px = 10px donc le font-size de notre balise html nous allons la mettre à 62.5% ainsi les navigateurs seront à 10px chaque fois que je mettrais 1rem et 20px pour 2rem. <br />
                Pour les medias-query il suffit de mettre le font-size à un pourcentage ex: font-size : 50% pour qu'à partir d'une certaine taille la police soit divisé par deux.</p>
        </>
    )
}

export default CssCours