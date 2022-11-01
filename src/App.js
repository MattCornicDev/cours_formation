import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import GitCours from './pages/GitCours';
import NodeCours from './pages/NodeCours';
import React_cours from './pages/React_cours';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/GitCours" exact element={<GitCours />}/>
        <Route path='/NodeCours' exact element={<NodeCours />} />
        <Route path='/React_cours' exact element={<React_cours />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
