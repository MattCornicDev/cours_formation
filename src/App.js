import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GitCours from './pages/GitCours';
import NodeCours from './pages/NodeCours';
import ReactCours from './pages/ReactCours';
import './App.css'
import SqlCours from './pages/SqlCours';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/GitCours" exact element={<GitCours />} />
          <Route path='/NodeCours' exact element={<NodeCours />} />
          <Route path='/ReactCours' exact element={<ReactCours />} />
          <Route path='/SqlCours' exact element={<SqlCours />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
