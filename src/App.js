import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newProject';
import Container from './components/layout/container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">company</Link>
        <Link to="/newproject">newproject</Link>
      </ul>

      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/company" element={<Company />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
          <Route path="/newproject" element={<NewProject />} > </Route>
       </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
