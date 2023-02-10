import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricelist from "./components/Pricelist/Pricelist";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Header />} />
      <Route exact path="/Price" element={<Pricelist />} />
      <Route exact path="/request__form" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
