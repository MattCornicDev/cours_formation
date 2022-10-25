import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import GitCours from './pages/GitCours';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/GitCours" exact element={<GitCours />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
