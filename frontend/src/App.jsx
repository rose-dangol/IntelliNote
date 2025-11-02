import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Router } from 'react-router-dom'

import PrivateRoutes from './routes/PrivateRoutes';

import Auth from './pages/Auth/Auth';
import LandingPage from './pages/LandingPage/LandingPage'
import LoginNotebook from './components/LoginNotebook/LoginNotebook';
import HomePage from './pages/HomePage/HomePage';
import Accordion from './pages/Accordion/Accordion';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import SearchPage from './pages/SearchPage/SearchPage';
import UserProfile from './pages/UserProfile/UserProfile';
import SavedNotes from './pages/SavedNotes/SavedNotes';
import AdminManageUsers from './pages/Admin/AdminManageUsers/AdminManageUsers';
import AdminAddData from './pages/Admin/AddData/AdminAddData';
import AdminProfile from './pages/Admin/AdminProfile/AdminProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route element={<PrivateRoutes/>}>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/notebook' element={<LoginNotebook/>}/>
        <Route path='/mynotes' element={<Accordion/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/savednotes' element={<SavedNotes/>}/>
        <Route path='/admin/users' element={<AdminManageUsers/>}/>
        <Route path='/admin/add-data' element={<AdminAddData/>}/>
        <Route path='/admin/profile' element={<AdminProfile/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
