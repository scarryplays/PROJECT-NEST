import {  createContext, useContext } from "react";

export const AuthContext = createContext();



 export const AuthProvider=({children})=>{

 const storeTokenInls = (serverToken) => {
    return localStorage.setItem("token", serverToken);
 };

 const contextValue = {
    storeTokenInls,
 };

 return (
    <AuthContext.Provider value={contextValue}>
       {children}
    </AuthContext.Provider>
 );
}



export const useAuth = ()=>{
  const authContectValue=useContext(AuthContext)
 if(!authContectValue){
    throw new Error("useAuth used outside of the provider")
 }
  
  
  
    return authContectValue
}