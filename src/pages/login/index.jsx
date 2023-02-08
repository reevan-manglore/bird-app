import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { userNameValidator,passwordValidator } from '../../utils/inputValidators';
import FloatingFormField from '../../components/FloatingFormField';

function index() {
 
  const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const [inputValidity, setValidity] = useState({
      "userName": true,
      "password": true,
    });
  
  
    const onFormSubmit = (e) => {
      e.preventDefault();
  
      //reset isValid object to trues
      const temp = {};//just for perfomrance optimization inssted oc calling setState multipple times i batched it
      for (let key in inputValidity) {
        temp[key] = true;
      }
      setValidity(temp);

      if (!userNameValidator(userName)) {
        setValidity(prev=>{
          return {...prev, "userName": false }
        });
        return;
      }
      if (!passwordValidator(password)) {
        setValidity(prev=>{
          return {...prev, "password": false }
        });
        return;
      }
    }
  
    return (
      <section className='h-screen w-screen bg-background grid place-content-center '>
        <div className='px-16 py-8   rounded-lg bg-card '>
          <h2 className='text-4xl font-semibold text-white'>Login To Your Account</h2>
          <form onSubmit={onFormSubmit} className="mt-8 space-y-4">
  
            <FloatingFormField
              type='text'
              name="userName"
              placeholder="User Name"
              value={userName}
              onChange={setUserName}
              isValid={inputValidity.userName}
              errorMessage="User Name Can Only Have Characters,Numbers and Underscores"
            />
  
            <FloatingFormField
              type='password'
              name="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
              isValid={inputValidity.password}
              errorMessage="password should be atleast 6 characters long"
            />
  
            <button type='submit'
              className='bg-primary text-white rounded-full py-2 px-16 font-semibold block mx-auto active:scale-90 transition-transform '
            >
              Login To My Account
            </button>
          </form>
  
          <Link to="/register" replace={true} className="mt-6 inline-block text-indigo-400">Dont Have Account? Register </Link>
        </div>
      </section>
    );
}

export default index