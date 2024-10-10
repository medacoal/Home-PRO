import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import { AuthProvider } from './components/context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer /> {/* Toast notifications */}
      <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
)
