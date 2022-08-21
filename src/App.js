import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import StarWars from './components/StarWars/StarWars';
import Dogs from './components/Dogs/Dogs';

function App() {
  return (
    <div className="App">
    
      <Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/starwars" element={<StarWars />}></Route>
        <Route path="/dogs" element={<Dogs />}></Route>
			</Routes>
    </div>
  );
}

export default App;
