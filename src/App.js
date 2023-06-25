import React from "react"
import './App.css';
import { BrowserRouter as Router,Link, Routes,Route } from 'react-router-dom';
import PatientDirectoryComponent from './components/PatientDirectoryComponent/PatientDirectoryComponent';
import PatientRegistractionComponent from './components/PatientRegistractionComponent/PatientRegistractionComponent';
import PatientDeletionComponent from './components/PatientDeletionComponent/PatientDeletionComponent';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <Router>
      <div className='container'>
        <HeaderComponent/>
      
      <nav className='nav-menu'>
        <Link to='/'>List of Patients</Link>
        <Link to='/admin/add'>Admit Patients</Link>
        <Link to='/admin/delete'>Discharge Patients</Link>
      </nav>
      <Routes>
        <Route exact path ='/' element={<PatientDirectoryComponent/>}></Route>
        <Route path ='/admin/add' element={<PatientRegistractionComponent/>}></Route>
        <Route path ='/admin/delete' element={<PatientDeletionComponent/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
