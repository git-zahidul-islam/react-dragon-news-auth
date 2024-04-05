import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("state change this",currentUser)
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[]) 
    // these value i will pass
    const authInfo = {
        user,
        createUser,
        logOut,
        logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * create system-----------------
 * step 1. create context- createContext()
 * step 2. wrap with provider
 * step 3. value pass
 * use system ------------------
 * step 1: AuthProvider er children kortai havai {jodi shob jaigai use kortai chai}. 
*/