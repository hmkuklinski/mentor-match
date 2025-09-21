import './App.css';
import {Routes, Route} from "react-router-dom";
import {useState} from 'react';
import Home from './components/Home.jsx';
import MyMatches from './components/MyMatches.jsx';
import MatchPage from './components/MatchPage.jsx';
import SwipeSection from './components/SwipeSection.jsx';

function App() {
  const [matches, setMatches] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-mentors" element={<MyMatches />} />
        <Route path="/my-mentors/:id" element={<MatchPage />} />
        <Route path="/find-matches" element={<SwipeSection matches={matches} setMatches={setMatches}/>} />
      </Routes>
    </div>
  );
}

export default App;
