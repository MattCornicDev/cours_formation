import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'

function HtmlCours() {
    return (
        <>
            <Navbar />

            <h1>Les bases de l'HTML</h1>

            <p>HyperText Markup Language (HTML) est un langage de balise qui permet de structurer une page web, ce n'est pas un langage de progammation. Le HTML utilise des balises pour encapsuler un text etc. Un élément est une partie d'une page web. Un élément est différent d'une balise. Si je veux écrire le texte suivant dans mon fichier HTML par ex: "Maguie est une fan du Sparta de Moscou", je devrais l'encapsuler dans une balise ouvrante et une autre fermante comme ceci : <br /> <pre><code>{'<p>Maguie est une fan du Sparta de Moscou</p>'}</code></pre> <br />L'élément c'est l'ensemble de la balise ouvrant à la balise fermante et le contenu. <br /> Les attributs contiennent des informations comlémentaire sur l'élément comme <code>class="maClass"</code> dans <pre><code>{'<p class="maClass">Maguie est une fan du Sparta de Moscou</p>'}</code></pre> <br />. Les éléments peuvent s'imbriquer comme ceci <pre><code>{'<p>Ici du text avec un text plus <strong>important</strong></p>'}</code></pre></p>

            <Footer />
        </>
    )
}

export default HtmlCours