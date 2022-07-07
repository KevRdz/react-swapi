import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import StarshipList from './StarshipList';
import StarshipDetails from './StarshipDetails';

function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<StarshipList />}/>
          <Route path="/details" element={<StarshipDetails />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
