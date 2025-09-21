import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home.jsx';
import MyMatches from './components/MyMatches.jsx';
import MatchPage from './components/MatchPage.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-mentors" element={<MyMatches />} />
        <Route path="/my-mentors/:id" element={<MatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
