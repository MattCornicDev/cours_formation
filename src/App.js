import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import GitCours from './pages/GitCours';
import NodeCours from './pages/NodeCours';
import ReactCours from './pages/ReactCours';
import './App.css'
import SqlCours from './pages/SqlCours';
import ExercicesNode from './pages/ExercicesNode';
import ApiRestFull from './pages/ApiRestFull';
import ProgrammationCours from "./pages/ProgrammationCours";
import JsCours from './pages/JsCours';
import HtmlCours from './pages/HtmlCours';
import ReactCours2 from './pages/ReactCours2';


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
          <Route path='/ExercicesNode' exact element={<ExercicesNode />} />
          <Route path='/ApiRestFull' exact element={<ApiRestFull />} />
          <Route path='/ProgrammationCours' exact element={<ProgrammationCours />} />
          <Route path='/jsCours' exact element={<JsCours />} />
          <Route path='/HtmlCours' exact element={<HtmlCours />} />
          <Route path='ReactCours2' exact element={<ReactCours2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
