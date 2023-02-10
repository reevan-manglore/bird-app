import { createContext,useState,useEffect } from "react";
import {useLocalStorage } from "../hooks/useLocalStorage";


const AuthContext = createContext({});


function AuthProvider({children}){
    const [isLoggedIn,setLoginStatus] = useState(false);
    const [userName,setUserName] = useState("");
    const [registerdUsers,storeRegisterdUsers] = useLocalStorage({key:"registerdUsers",initialValue:[]});
    const [previouslyLoggedInUser,storepreviouslyLoggedInUser] = useLocalStorage({key:"previouslyLoggedInUser",initialValue:null});
    

    useEffect(()=>{
        if(previouslyLoggedInUser === null)return;
        setLoginStatus(true);
        setUserName(previouslyLoggedInUser["userName"]);
    },[]);

   

    function register({userName,password}){
        const userAleredyExists =   registerdUsers.some(ele=>ele.userName === userName && ele.password === password);
        if(userAleredyExists) return false;
        storeRegisterdUsers(prev=>[...prev,{userName,password}]);
        setLoginStatus(true);
        setUserName(userName);
        storepreviouslyLoggedInUser({"userName":userName,"password":password});
        return true;
    }

    function login({userName,password}){
        const isUserRegisterd =   registerdUsers.some(ele=>ele.userName === userName && ele.password === password);
        if(!isUserRegisterd) return false;
        setLoginStatus(true);
        setUserName(userName);
        storepreviouslyLoggedInUser({"userName":userName,"password":password});
        return true;

    }
    function logout(){
        setLoginStatus(false);
        setUserName("");
        storepreviouslyLoggedInUser(null);
    }
    return(
        <AuthContext.Provider value={{isLoggedIn,userName,register,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}


export {AuthContext,AuthProvider};