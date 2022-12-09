import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'

const Sql = () => {
    return (
        <>

            <Navbar />

            <ol>
                <li>Installation de mysql</li>
                <li>lancer mysql: mysql -u root -p</li>
                <li>SHOW DATABASES permet de voir la liste de bases de données</li>
                <li>Pour utiliser une base de donnée "USE (et le nom de la base de donnée) ici USE testt pour aller dans la bdd testt</li>
                <li>Creer une table: CREATE TABLE commandes( taper entré pour entrer les champs</li>
                <img src={process.env.PUBLIC_URL + "/media/creation_table_sql.png"} alt="image de l'ecran du terminal" width="800px" />
            </ol>

            <Footer />
        </>
    )
}

export default Sql