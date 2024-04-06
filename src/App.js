
import  Navbar from './components/BaraNavigare'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
