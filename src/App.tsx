import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlipBook from './components/FlipBook/FlipBook';
import './App.css';

function App() {
  return (
    <Router basename="/hingskatalog">
      <Routes>
        <Route path="/" element={<FlipBook />} />
      </Routes>
    </Router>
  );
}

export default App;