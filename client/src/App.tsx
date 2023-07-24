import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Misdemeanours from "./components/misdemeanours";
import Confession from "./components/confessions";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="header">
        <nav>
          <h1>Fakelandia Justice Department</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="misdemeanours">Misdemeanours</Link>
            </li>
            <li>
              <Link to="confession">Confess To Us</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="misdemeanours" element={<Misdemeanours />} />
        <Route path="confession" element={<Confession />} />
      </Routes>
    </Router>
  );
}

export default App;
