import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import your LandingPage component
import BuyPage from './pages/BuyPage'; // Import your BuyPage component
import SellPage from './pages/SellPage'; // Import your SellPage component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="App-link">Home</Link> | {" "}
            <Link to="/buy" className="App-link">Buy</Link> | {" "}
            <Link to="/sell" className="App-link">Sell</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
