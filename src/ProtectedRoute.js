import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "./firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";


const ProtectedRoute = ({component:Component, ...rest}) => {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
    const start = () => {
        const auth = getAuth();
    if(auth){
        setUser(auth);
    }
    }
    start();
    console.log(user);
    },[])

  return (
    <Route
    {...rest}
    render={(props)=>{
        if(user){
            return <Component />
        } else{
            return(
                <Redirect to='/login'/>
            )
        }
    }}
    />
  )
}

export default ProtectedRoute