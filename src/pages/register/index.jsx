import { useContext, useState } from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.jsx';
import { useAlert } from "../../hooks/useAlert"
import FloatingFormField from '../../components/FloatingFormField';
import Alert from '../../components/Alert'

import { emailValidator, userNameValidator, passwordValidator } from '../../utils/inputValidators';




function index() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, register } = useContext(AuthContext)
  const [inputValidity, setValidity] = useState({
    "email": true,
    "userName": true,
    "password": true,
  });
  const navigate = useNavigate();
  const [alert, showAlert,hideCurrentAlert] = useAlert();

 

  const onFormSubmit = (e) => {
    e.preventDefault();

    //reset isValid object to trues
    let temp = {};//just for perfomrance optimization inssted oc calling setState multipple times i batched it
    for (const key in inputValidity) {
      temp[key] = true;
    }
    setValidity(temp);

    if (!emailValidator(email)) {
      setValidity(prev => {
        return { ...prev, "email": false }
      });

      return;
    }
    if (!userNameValidator(userName)) {
      setValidity(prev => {
        return { ...prev, "userName": false }
      });

      return;

    }
    if (!passwordValidator(password)) {
      setValidity(prev => {
        return { ...prev, "password": false }
      });
      return;
    }

    const isRegistartionSuccess =  register({ userName, password });
    if(isRegistartionSuccess){
      navigate("/dashboard",{replace:true});
    }
    else{
      hideCurrentAlert();
      showAlert("Sorry Account Alredy Exists");
    }

  }

  return (
    isLoggedIn?<Navigate to = "/dashboard" replace = {true}/>:
    <section className='h-screen w-screen bg-background grid place-content-center '>
    <Alert message={alert.message} shouldShowAlert = {alert.isAlertShown} />
      <div className='px-16 py-8   rounded-lg bg-card '>
        <h2 className='text-4xl font-semibold text-white'>Create Your Account</h2>
        <form onSubmit={onFormSubmit} className="mt-8 space-y-4">

          <FloatingFormField
            type='email'
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={setEmail}
            isValid={inputValidity.email}
            errorMessage="Enter Valid Email"
          />

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
            Create My Account
          </button>
        </form>

        <Link to="/login" replace={true} className="mt-6 inline-block text-indigo-400">Aleredy Have Account? Login </Link>
      </div>
    </section>
  )
}

export default index