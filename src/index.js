import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import FLogement from './pages/FLogement'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Erreur'
import createGlobalStyle from 'styled-components'
import './styles/index.css';
import logementsData from './datas/logements.json'
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
    }

    body {
      margin: 0px;
      padding: 0px;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil logements={logementsData} />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FLogement/:id" element={<FLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
