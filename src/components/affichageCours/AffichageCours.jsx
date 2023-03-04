import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './affichageCours.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class AffichageCours extends Component {
    render() {
        return (

            <div>
                <Link to="/gitCours">
                    <h3 className="badge bg-warning m-1">
                        Cours Git</h3>
                </Link>
                <Link to="/nodeCours">
                    <h3 className="badge bg-warning m-1">
                        Cours node JS</h3>
                </Link>
                <Link to="/ReactCours">
                    <h3 className="badge bg-warning m-1">
                        Cours React JS</h3>
                </Link>
                <Link to="/SqlCours">
                    <h3 className='badge bg-warning m-1'>
                        Cours SQL
                    </h3>
                </Link>
                <Link to="/ExercicesNode">
                    <h3 className='badge bg-warning m-1'>
                        Exercices NodeJS
                    </h3>
                </Link>
                <Link to="/ApiRestFull">
                    <h3 className='badge bg-warning m-1'>
                        Api RestFull
                    </h3>
                </Link>
                <Link to="/ProgrammationCours">
                    <h3 className='badge bg-warning m-1'>
                        Programmation
                    </h3>
                </Link>
                <Link to="/jsCours">
                    <h3 className='badge bg-warning m-1'>
                        JavaScript Cours
                    </h3>
                </Link>
                <Link to="/HtmlCours">
                    <h3 className='badge bg-warning m-1'>
                        Html Cours
                    </h3>
                </Link>
                <Link to="/ReactCoursTheorique">
                    <h3 className="badge bg-warning m-1">
                        React Cours theorique
                    </h3>
                </Link>
            </div>



            /*
        <Container>
            <Row xs={1} md={2} sm={1} lg={4} >
                <Link to="/gitCours">
                    <Col>
                        <Tilt>
                            <Card>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/git.svg.png"} alt="logo git" />
                                <Card.Body>
                                    <Card.Title>GIT</Card.Title>
                                    <Card.Text>Aide mémoire des commandes git les plus utilisés ou les plus intéressantes.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Col>
                </Link>

                <Link to="/nodeCours">
                    <Col>
                        <Tilt>
                            <Card>
                                <Card.Img src={process.env.PUBLIC_URL + '/Node.js_logo.svg.png'} alt="logo node JS" />
                                <Card.Body>
                                    <Card.Title>NODE JS</Card.Title>
                                    <Card.Text>Environnement d'exécution nodeJS.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Col>
                </Link>
                <Col>
                    <Tilt>
                        <Card>
                            <Card.Img src={process.env.PUBLIC_URL + "/html.svg.png"} alt="logo html" />
                            <Card.Body>
                                <h5 className="card-title">HTML</h5>
                                <p className="card-text">cours HTML.</p>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>
                <Col>
                    <Tilt>
                        <Card>
                            <Card.Img src={process.env.PUBLIC_URL + "/bootstrap_logo.svg.png"} alt="logo bootstrap" />
                            <Card.Body>
                                <h5 className="card-title">BOOTSTRAP</h5>
                                <p className="card-text">Cours bootstrap bientôt.</p>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Col>
                <Link to="/react_cours">
                    <Col>
                        <Tilt>
                            <Card>
                                <Card.Img src={process.env.PUBLIC_URL + "logo192.png"} alt="logo bootstrap" />
                                <Card.Body>
                                    <h5 className="card-title">ReactJS</h5>
                                    <p className="card-text">Cours React.</p>
                                </Card.Body>
                            </Card>
                        </Tilt>
                    </Col>
                </Link>
            </Row>
        </Container>
*/

        )
    }
}
