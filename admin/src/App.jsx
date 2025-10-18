import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext.jsx';
import { ToastContainer, toast } from 'react-toastify';



const App = () => {

  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div>
      <ToastContainer />
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;