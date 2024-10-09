import React from 'react'
import Menu from './components/navs/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Listings from '../src/pages/Listings'
import Blog from '../src/pages/Blog'
import HelmetWrapper from "./components/resusables/HelmetAsync";
import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import { ModalProvider } from './components/context/ModalContext'
import { ScrollToTop } from './components/resusables/ScrollToTop';
import ModalWrapper from "./components/context/ModalContextWrapper"
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/dash/dashBoard';
import BlogDetail from './components/cards/BlogDetail';
import PropertyDetail from './components/cards/propertyCard';

const App = () => {
  return (
    <ModalProvider>

    <HelmetWrapper>
    <BrowserRouter>
<ModalWrapper />
     <Menu />
    <ScrollToTop />
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/listings' element={<Listings/>} />
      <Route path="/property/:id" element={<PropertyDetail />} />
      <Route path='/blog' element={<Blog/>} />
      <Route path="/blog/:id" element={<BlogDetail/>} />
      <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      
    </Routes>
    </BrowserRouter>
    </HelmetWrapper>
    </ModalProvider>
  )
}

export default App