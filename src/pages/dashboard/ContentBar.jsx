import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ContentBar() {
  const {logout}  = useContext(AuthContext);
  return (
    <main className='px-3 py-6 bg-background grid place-content-center h-screen'>
      <h1 className='text-6xl text-white'>Dashboard Page</h1>
      <button type='button' className='text-white mt-4 px-4 py-2 rounded-sm bg-primary' onClick={()=>showAlert(`User Aleredy Exits `)}>Click ME</button>
      <button type='button' className='text-white mt-2 px-4 py-2 rounded-sm bg-red-500' onClick={()=>logout()}>Logout</button>
    </main>
  )
}

export default ContentBar