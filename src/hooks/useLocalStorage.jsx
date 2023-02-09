import {useState,useEffect} from 'react'

function getSavedValue({key,initialValue }){
    const savedValue = localStorage.getItem(key);
   
    if(savedValue)return JSON.parse(savedValue);
    return initialValue;
}


function useLocalStorage({key,initialValue}) {
  const [value,setValue] = useState(()=>getSavedValue({key,initialValue}));
  
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
  },[value]);
  return [value,setValue];
}

export { useLocalStorage};