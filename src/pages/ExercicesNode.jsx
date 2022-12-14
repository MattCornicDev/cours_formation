import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'

const ExercicesNode = () => {
    return (
        <>
            <Navbar />
            <nav className='nav flex-column navbar-expand-md' >

                <a href="#exercice1">Exercice 1 carrelage</a>
                <a href="#correction1">Correction Exercice 1</a>



                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                </div>
            </nav >
            <h1>EXERCICES</h1>

            <h2 id='exercice1'>Exercices CARRELAGE</h2>

            <p>Info relative au calcul du nombre de carreaux :</p>

            <p>Carreaux 15 x 15 cm : il vous faut 45 carreaux au m²</p>

            <ol>
                <li>Créez un fichier calculCarrelage.html dans un nouveau dossier carrelage que vous allez créer au préalable.</li>
                <li>Cette page html aura pour titre ‘’Calcul Carrelage’’.</li>
                <li>Ajoutez un formulaire HTML, ce dernier enverra via une méthode post, une requête vers notre server. Ce formulaire aura 1 input ;<br /> il contiendra la surface de notre pièce que l’on veut carreler.
                </li>
                <li>Ajoutez un bouton “Renvoyer le nombre de carreaux nécessaires”</li>
                <li>Ajouter les méthodes GET et POST nécessaires dans un fichier principal server.js (toujours dans le dossier carrelage).
                </li>
                <li>Utiliser la méthode sendFile() par la méthode GET afin d’envoyer en réponse au client la page calculCarrelage.html dans la route ‘’/’’ (home).
                </li>
                <li>Dans le fichier server.js , effectuez le calcul adéquat en prenant compte de l’info écrite en rouge en haut.
                </li>
                <li> Écrivez le bon code afin de renvoyer au client une phrase de ce genre : "Il vous faudra xcarreaux pour une surface de y m2 ! " .
                </li>
            </ol>
            <p>x représente le nombre de carreaux calculés grâce à l’info en rouge. <br />
                y représente la surface que le client rentre dans l’input du formulaire.
            </p>

            <h2 id="correction1">Correction Exercice 1</h2>
            <Footer />
        </>
    )
}

export default ExercicesNode