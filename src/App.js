import React from 'react';
import './App.css';
import Home from './Com/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Monprofil from './Com/Monprofil/Monprofil';
import Test from "./Com/Test";
import Testque from "./Com/Testque";
import Chapitre1 from './Com/Home/Chapitre1/Chapitre1';
import Chapitre2 from './Com/Home/Chapitre2/Chapitre2';

function App() {
  return (
     <Router>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/Monprofil' element={<Monprofil />} />
         <Route path='/Test' element={<Test />} />
         <Route path='/Testque' element={<Testque />} />
         <Route path='/Chapitre1' element={<Chapitre1 />} />
         <Route path='/Chapitre2' element={<Chapitre2 />} />
      </Routes>
     </Router>
  );
}

export default App;