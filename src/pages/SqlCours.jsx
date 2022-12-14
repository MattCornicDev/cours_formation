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
                <a href="#ajout_colonne">Ajout colonne</a>
                <a href="#les_types">Les types</a>
                <a href="#ajout_contenu">Ajout contenu</a>
                <a href="#concat_substring">Concat et substring</a>
                <a href="#exercice1">Exercice 1</a>
                <a href="#correction1">Correction Ex 1</a>
                <a href="#exercice2">Exercice 2</a>
                <a href="#exercice3">Exercice 3</a>
                <a href="#correction1">Correction Ex 1</a>


                <div className='d-inline'>
                    <img className='logo_donneur_ordre' src={process.env.PUBLIC_URL + "/Logo-GRETA-Grand-Hainaut-500.jpg"} alt="logo du greta" width="150px" /></div>
                <div className='d-inline'>
                    <img className='logo_partenaires' src={process.env.PUBLIC_URL + "/logo_partenaires.png"} alt="logo des partenaires financiers" width="150px" />
                </div>
            </nav >

            <div className="container">
                <h2 id='Installer_Sql'>Installation de mySql</h2>
                <p>Installer mySql via le site web et lancer <code>mysql: mysql -u root -p</code> dans le terminal. Pour voir les bases de données <code>SHOW DATABASES</code> Pour utiliser une base de donnée "USE (et le nom de la base de donnée) ici <code>USE testt</code> pour aller dans la bdd testt. Creer une table: <code>CREATE TABLE commandes</code>  taper "Entrer" pour entrer les champs</p>

                <img src={process.env.PUBLIC_URL + "/media/creation_table_sql.png"} alt="ecran du terminal" width="800px" />

                <p><code>SHOW TABLES </code>. Permet de voir les tables</p>
                <p><code>SELECT * FROM</code> commandes permet de selectionner tous ce qu'il ya dans notre table</p>

                <h2 id='les_types'>Les types</h2>
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

                <h2 id='ajout_colonne'>Ajouter une colonne</h2>
                <p>Pour notre table commandes ajoutons un champ: <code>ALTER TABLE commandes ADD COLUMN nbr_commandes INT NULL;</code> Par defaut c'est NULL on peut donc ne rien mettre. <br />
                    pour voir les columns <code> SHOW COLUMNS FROM commandes;</code> Effacer cette columns <code>ALTER TABLE commandes DROP COLUMN nbr_commandes;</code> verifier <code>SHOW  COLUMNS FROM commandes;</code> </p>

                <h2 id='ajout_contenu'>Ajouter du contenu</h2>

                <p>Effacer la table commande. Creer une table musiciens avec un id, un prenom, un nom</p>
                <p>Creer une table musiciens avec un id, un titre, une année de sortie et une colonne avis</p>

                <p>
                    <code>DROP TABLE commandes;</code><br />
                    <code>CREATE TABLE musiciens(<br />
                        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, <br />
                        prenom VARCHAR(100) NOT NULL, <br />
                        nom VARCHAR(100) NOT NULL <br />
                        );</code>
                </p>

                <p>
                    Creons la table musique <br />
                    <code>
                        CREATE TABLE musique ( <br />
                        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, <br />
                        titre VARCHAR(100) NOT NULL, <br />
                        annee_de_sortie INT NOT NULL, <br />
                        avis TEXT NOT NULL <br />
                        ); <br />
                    </code>
                </p>
                <p><code>SHOW TABLES;</code></p>
                <p><code>SHOW COLUMNS FROM musique;</code></p>

                <p>Inserons du contenu dans nos tables, <br />
                    <code>INSERT INTO musiciens(prenom, nom) VALUES ( <br />
                        'charles','aznavour' ) <br />
                    </code>
                </p>

                <p><code>SELECT * FROM musiciens</code></p>
                <p>
                    <code>
                        INSERT INTO musiciens (prenom, nom) VALUES <br />
                        ('phil','collins'), <br />
                        ('graham','drake'), <br />
                        ('marvin','gaye'), <br />
                        ('michael','jackson') <br />
                        ('ademo','nos'), <br />
                        ('withney','houston'), <br />
                        ('elie','booba'), <br />
                        ('playboi','carti'), <br />
                        ('jane','birkin') <br />
                    </code>
                </p> <br />

                <p><code>SELECT * FROM musiciens</code></p>

                <p>Ajoutons des musiques</p> <br />
                <code>INSERT INTO musique(titre,annee_de_sortie,avis) VALUES <br />
                    ('hier encore',1964,'super') <br />
                    ('against all odds',1981,'du lourd') <br />
                    ('started from the bottom',2013,'original') <br />
                    ('sexual healing',1982,erotique) <br />
                    ('billie jean',1982,'punchy') <br />
                    ('le monde ou rien',2015,'nostalgique') <br />
                    ('i will always love you',1992,'puissante et forte') <br />
                    ('china girl',1983,'elle ambiance beaucoup') <br />
                    ('92i veyron',2015,'sombre') <br />
                    ('location',2017,'flow incroyable') <br />
                    ('je taime moi non plus', 1969,'classique') <br />
                </code>

                <code>SELECT titre FROM musique; </code> <br />
                <code>SELECT annee_de_sortie FROM musique;</code> <br />
                <code>SELECT titre, annee_de_sortie FROM musique;</code> <br />
                <code>SELECT * FROM musique WHERE titre LIKE 's%';</code> <br />
                <code>SELECT * FROM musique WHERE titre NOT LIKE 's%';</code> <br />
                <code>SELECT * FROM musique WHERE titre LIKE 'location';</code> <br />
                <code>SELECT * FROM musique WHERE titre LIKE 's%' OR annee_de_sortie = 1982;</code> <br />
                <code>SELECT * FROM musique WHERE titre LIKE 'location' OR annee_de_sortie {'<'} 2015;</code> <br />
                <code>SELECT * FROM musique WHERE titre LIKE 'location' AND annee_de_sortie {'<'} 2015;</code> <br />
                <code>SELECT titre, annee_de_sortie FROM musique WHERE annee_de_sortie BETWEEN 1981 AND 2013;</code>
                <br />
                <code>SELECT titre, annee_de_sortie FROM musique WHERE annee_de_sortie IN (1982,2013,2015)</code> <br />
                <code>SELECT titre, annee_de_sortie FROM musique WHERE annee_de_sortie NOT IN (1982,2013,2015)</code> <br />
                <code>SELECT titre, annee_de_sortie FROM musique WHERE annee_de_sortie {'<>'} 2015</code>
                <br />
                <code>SELECT * FROM musique WHERE titre IN ('location','je taime moi non plus')</code> <br /><br />

                <h2 id='concat_substring'>CONCAT & SUBSTRING</h2>
                <p><code>SELECT CONCAT(prenom,',',nom) FROM musiciens;</code> </p>
                <p><code>SELECT CONCAT(prenom,'*',nom) AS "Nom Complet" FROM musiciens;</code> </p>

                <p>SELECT SUBSTRING(nom,1,2) AS "Sous Chaine" FROM musiciens;</p>
                <p>SELECT CONCAT(prenom,nom) AS "Nom Complet", CONCAT(SUBSTRING(prenom,1,1),nom) AS "Nouveau Nom", prenom, nom FROM musiciens;</p>

                <p>Avec le select on peut afficher des choses qui ne sont pas dans le tableau <br /><code>SELECT 5*3 AS multiplication,* FROM musiciens</code></p> <br />
                <br />


                <h2 id='exercice1'>EXERCICE 1</h2> <br />

                <p>
                    CREER UNE TABLE table1 AVEC id ,prenom,   nom, month1,month2,month3,month4,month5 COMME COLONNES; <br />
                    <br />

                    AJOUTER 4 PERSONNES DANS CETTE TABLE AVEC 4 NOMBRES (1 POUR CHAQUE MOIS) QUI CORRESPONDENT AUX ECOUTES SUR CHAQUE MOIS. <br /><br />

                    RENVOYER CES INFORMATIONS : <br />
                    -UNE COLONNE AVEC LES INITIALES DE CHAQUE PERSONNE QUI AURA POUR TITRE <br /> « INITIALES » <br />
                    -UNE COLONNE AVEC prenom et nom separés par une virgule de titre « Nom Complet » <br />
                    -UNE COLONNE AVEC LE SCORE de chaque MOIS (month1,month2,….) <br />
                    -COLONNE AVEC LE SCORE TOTAL DES 5 MOIS QUI AURA POUR TITRE « score total » <br />
                    -COLONNE AVEC LE SCORE MOYEN POUR CHAQUE UTILISATEUR SOUS LE NOM « score <br /> moyen » ; <br />
                    <br />


                    <h2 id='exercice2'>EXERCICE 2</h2> <br />

                    **** SUM() PERMET DE SOMMER DES ENTIERS <br />
                    CREER UNE TABLE  AVEC    nom,prenom,numero_de_candidat, nombre de musiques <br /> ecoutees sur un mois. Vous allez ajouter 4 lignes pour un meme utilisateur (avec un nombre de musiques ecoutees differentes a chaque fois ). <br /><br />

                    RETOURNER CES INFORMATIONS : <br />
                    -LES UNIQUES NOMS DE CHAQUE JOUEUR (sans les doublons) <br /><br />

                    -LES 3 MEILLEURS JOUEURS AVEC LEUR SCORE TOTAL ET LEUR SCORE MOYEN EN LES CLASSANT SUR LEUR SCORE MOYEN DU MEILLEUR AU PIRE <br />

                    -LE MEILLEUR SCORE DE CHAQUE UTILISATEUR EN LES CLASSANT PAR RAPPORT A LEUR SCORE TOTAL DU MEILLEUR AU PIRE <br /><br />

                    <h2 id='exercice3'>EXERCICE 3</h2> <br />

                    CREER UNE TABLE ppl2 AVEC NOMS DU jeu_music (id,prenom,nom) <br />

                    SELECTIONNER : <br />

                    JOINTURE AVEC LES NOMS DE LA TABLE jeu_music  et les noms de la table ppl2 TOUT en AFFICHANT UNE nouvelle colonne NBr_ecoutes_moyen (AVG() EN MYSQL) <br />

                </p>

                <h2 id='correction1'>Correction Exercice 1</h2>
                <p>
                    <pre>
                        <code>
                            CREATE TABLE table1 ( <br />
                            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, <br />
                            prenom VARCHAR(100) NOT NULL, <br />
                            nom VARCHAR(100) NOT NULL, <br />
                            month1 INT NOT NULL, <br />
                            month2 INT NOT NULL, <br />
                            month3 INT NOT NULL, <br />
                            month4 INT NOT NULL, <br />
                            month5 INT NOT NULL, <br />
                            ); <br />
                        </code>
                    </pre>
                    <br />
                    Ajouter 4 personnes
                    <pre>
                        <code>
                            INSERT INTO table1 (prenom, nom, month1, month2, month3, month4, month5) VALUES <br />
                            ("rarib","laamimat",200, 120, 320, 400, 540), <br />
                            ("j-c","x",100, 110, 220, 100, 440), <br />
                            ("sabrina","y",300, 200, 420, 450, 510), <br />
                            ("kylian","mbappe",140, 120, 120, 100, 140); <br />
                        </code>
                    </pre>
                    <br />
                    <p><code>SELECT * FROM table1;</code></p>

                    <pre>
                        <code>
                            SELECT CONCAT(SUBSTRING(prenom,1,1),SUBSTRING(nom,1,1)) AS initiales, CONCAT(prenom,',',nom) AS "Nom Complet", <br />
                            month1,month2,month3,month4,month5,(month1 + month2 + month3 + month4 + month5) AS "Score Total", <br />
                            (month1 + month2 + month3 + month4 + month5)/5 AS "Score Moyen" <br />
                            FROM table1; <br />
                        </code>
                    </pre>


                </p>

            </div>


            <Footer />
        </>
    )
}

export default Sql