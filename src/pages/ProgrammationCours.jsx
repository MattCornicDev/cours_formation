import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navigation/Navbar'

function ProgrammationCours() {
    return (
        <>
            <Navbar />
            <h1>LA PROGRAMMATION</h1>

            <h2>Le C++</h2>

            <p>Le C++ permet de concevoir des applications lourdes, concevoir des Système d'Exploitation. Inventé dans les années 80 le C++ est un langage compilé. </p>

            <h2>Les paradigmes</h2>

            <p>programmation procédurale, la programmation orientée objet et la programmation générique, la programmation fonctionnelle, la programmation imperative, la programmation récursive, la programmation dynamique, la programmation itérative.</p>

            <h2>Un IDE ?</h2>

            <p>signifie Integrated Development Environment <br /> quelques IDE bien connu : Visual Studio Code, Visual Studio, Notepad++, Eclipse, QT...</p>

            <h2>Les Boucles</h2>

            <p>Une boucle est une structure de contrôle destinée à exécuter une portion de code plusieurs fois, jusqu'à ce qu'une condition spécifique soit remplie. Les programmeurs utilisent des boucles pour faire <strong>itérer</strong> sur les valeurs, réutiliser la même opération sur plusieurs objets et bien d'autres choses.

                Les boucles sont pris en charge par tous les langages de programmation modernes, bien que leur mise en œuvre et de la syntaxe peuvent différer. Deux des types les plus courants de boucles sont la boucle <strong>while</strong> et la boucle <strong>for</strong>.
            </p>
            <p>La boucle For:</p>

            <pre>
                <code>
                    FOR I = 1 À N <br />
                    -- faire quelque chose <br />
                    NEXT I
                </code>
            </pre>

            <p>La boucle While:</p>

            <pre>
                <code>
                    WHILE (condition booléenne) THEN <br />
                    -- faire quelque chose <br />
                    LOOP
                </code>
            </pre>
            <p>Source : TechTerms, Wikipédia (Licence)</p>

            <h2>Les conditions</h2>

            <p>En programmation, les expressions conditionnelles sont caractéristiques d'un langage de programmation, qui effectuent différents calculs ou des actions en fonction de si une condition booléenne spécifiée est évaluée à vrai (true) ou non (false).

                La construction if-then-else est commun dans de nombreux langages de programmation. Bien que la syntaxe varie en fonction du langage, la structure de base (en pseudocode) ressemble à ceci:</p>

            <pre>
                <code>
                    If (boolean condition) Then <br />
                    -- faire quelque chose <br />
                    Else <br />
                    -- faire quelque chose <br />
                    End If <br />
                </code>
            </pre>

            <p>Quand un programme trouve un if, il attend une condition booléenne - par exemple, x> 0, ce qui signifie "la variable x contient un nombre qui est supérieur à zéro" - et évalue cette condition. Si la condition est vraie, les instructions qui suivent le "Then" sont exécutées. Dans le cas contraire, l'exécution se poursuit dans la branche suivante - soit dans le bloc "Else" (optionel), ou s'il n'y a pas d'autre branche, après la fin If.</p>
            <p>Source: Wikipédia</p>
            <Footer />
        </>
    )
}

export default ProgrammationCours