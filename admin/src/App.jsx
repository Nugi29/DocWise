import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar.jsx';



const App = () => {

  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;