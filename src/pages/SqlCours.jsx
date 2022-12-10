import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'

const Sql = () => {
    return (
        <>

            <Navbar />

            <nav className='nav flex-column navbar-expand-md' >

                <a href="#Installer_Sql">Installer SQL</a>
                <a href="#create_bdd">Creer une Bdd et une table</a>
                <a href="#types">Types</a>


                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                </div>
            </nav >

            <div className="container">
                <h2 id='Installer_Sql'>Installation de mySql</h2>
                <p>Installer mySql via le site web et lancer <code>mysql: mysql -u root -p</code> dans le terminal. Pour voir les bases de données <code>SHOW DATABASES</code> Pour utiliser une base de donnée "USE (et le nom de la base de donnée) ici <code>USE testt</code> pour aller dans la bdd testt. Creer une table: <code>CREATE TABLE commandes</code>  taper "Entrer" pour entrer les champs</p>

                <img src={process.env.PUBLIC_URL + "/media/creation_table_sql.png"} alt="image de l'ecran du terminal" width="800px" />

                <p><code>SHOW TABLES </code>. Permet de voir les tables</p>
                <p><code>SELECT * FROM</code> commandes permet de selectionner tous ce qu'il ya dans notre table</p>

                <h2>Les types</h2>
                <p>VARCHAR(100) signifie 100 lettres. Au maximum le varchar prendra 255 caractères. <br />
                    INT pour les chiffres, int comme integer et c'est un tres gros chiffre. Pour un petit nombre comme pour l'age on peut utiliser TINYINT, il prendra un octet, SMALLINT prendra deux octets. MEDIUMINT trois octets. </p>
                <p>Pour du text on utilisera TEXT. Elle sert pour toute phrase de plus de 255 caractères.</p>

                <p>Le type date DATE 'AAAA-MM-JJ'</p>

                <p>DECIMAL, FLOAT, DOUBLE. Le DECIMAL vous permettra de preciser le nombre de chiffre avant et après la virgule. 3489,54 DECIMAL(4,2) </p>

                <p>Dans notre table nous avons intialiser des types comme INT ou VARCHAR </p>

                <p>Creons une table: CREATE TABLE ppl. <br />
                    <img src={process.env.PUBLIC_URL + '/media/creation_table_supp.png'} alt="table dans le terminal" width="800px" /> <br />

                    pour supprimer cette table on utilisera DROP, <code>DROP TABLE ppl</code>

                </p>

                <h2>Ajouter une colonne</h2>
                <p>Pour notre table commandes ajoutons un champ: <code>ALTER TABLE commandes ADD COLUMN nbr_commandes INT NULL;</code> Par defaut c'est NULL on peut donc ne rien mettre. <br />
                    pour voir les columns <code> SHOW COLUMNS FROM commandes;</code> Effacer cette columns <code>ALTER TABLE commandes DROP COLUMN nbr_commandes;</code> verifier <code>SHOW  COLUMNS FROM commandes;</code> </p>
                <p></p>
            </div>


            <Footer />
        </>
    )
}

export default Sql