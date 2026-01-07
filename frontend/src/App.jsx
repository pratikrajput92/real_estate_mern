// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import PropertyDetails from './Pages/PropertyDetails';
import Properties from './Pages/Properties';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import Dashboard from './Pages/admin/Dashboard';
import AdminProperty from './Pages/admin/AdminProperty';
import AddProperty from './Pages/admin/AddProperty';
import Layout from './components/admin2/Layout';
import PublicLayout from './components/admin2/PublicLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/property/:id' element={<PropertyDetails />}/>
        </Route>

        {/* YHA ADMIN ROUTES BANAE HA */}
        <Route path='/admin' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='Properties' element={<AdminProperty/>}/>
          <Route path='add-property' element={<AddProperty/>}/>
        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App;


