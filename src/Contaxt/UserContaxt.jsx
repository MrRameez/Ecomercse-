import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";


export const UserContaxt = createContext()


function UserContaxtProvider({children}) {
    const [user, setUser] = useState({
        isLogin: false,
        email: ""
    });
    useEffect(() =>{
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    isLogin: true,
                    email: user.email,
                });
                console.log("user hai");
                
            } else{
                setUser({
                    isLogin:false,
                    email: "",
                })
                console.log("user nahi hai");
                
            }
        })
        return subscribe;
    },[])

    return(
        <UserContaxt.Provider value={{ user, setUser}}>
            {children}
        </UserContaxt.Provider>
    )
}
export default UserContaxtProvider