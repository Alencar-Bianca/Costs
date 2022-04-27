import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newProject';
import Container from './components/layout/container';
import NavBar from './components/layout/navBar';
import Footer from './components/layout/footer';
import Project from './components/pages/project';


function App() {
  return (
    <Router>
      <NavBar/>

      <Container customClass="min_height">
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/project" element={<Project />} > </Route>
          <Route path="/company" element={<Company />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
          <Route path="/newproject" element={<NewProject />} > </Route>
       </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
