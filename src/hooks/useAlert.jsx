import { useState,useEffect,useRef } from "react";


function useAlert(){
    const [alert,setAlert] = useState({
        isAlertShown:false,
        message:"",
    });
    const timeoutRef = useRef(null);
    useEffect(()=>{
        if(timeoutRef.current!=null){
            clearTimeout(timeoutRef.current);
        }
        if(alert.isAlertShown !=false){//update timeout  only if message changes not isAlertShown changes
            timeoutRef.current  = setTimeout(()=>{
                setAlert((_)=>({isAlertShown:false,message:""}));
                timeoutRef.current = null;
            },3000);
        }
    },[alert]);
    const showAlert = (message)=>setAlert((_)=>({isAlertShown:true,message}));
    const hideCurrentAlert = ()=>setAlert((_)=>({isAlertShown:false,message:""}));
    return [alert,showAlert,hideCurrentAlert];
}

export {useAlert};