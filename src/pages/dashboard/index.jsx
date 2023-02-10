import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useAlert } from "../../hooks/useAlert"
import Alert from '../../components/Alert'

function index() {
  const [alert, showAlert] = useAlert();
  const {logout}  = useContext(AuthContext);
  
  return (
    <section className='bg-background grid place-content-center h-screen'>
      { <Alert message={alert.message} shouldShowAlert = {alert.isAlertShown} />}
      <h1 className='text-6xl text-white'>Dashboard Page</h1>
      <button type='button' className='text-white mt-4 px-4 py-2 rounded-sm bg-primary' onClick={()=>showAlert(`User Aleredy Exits `)}>Click ME</button>
      <button type='button' className='text-white mt-2 px-4 py-2 rounded-sm bg-red-300' onClick={()=>logout()}>Logout</button>
    </section>
  )
}

export default index