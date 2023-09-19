import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
// import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    //Email Password Authentication---------------------------------------------------------------

    //Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    //Login User
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Logout User
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    //Google Authentication------------------------------------------------------------------------

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //Github Authentication------------------------------------------------------------------------

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // setLoading(false);
            setUser(currentUser);

            //implement jwt & get and set token using axios

            if (currentUser) {
                axios.post('https://summer-school-camp-server-sage.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data);
                        localStorage.setItem('access-token', data.data)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }

        })
        return () => {
            return unsubscribe;
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        googleSignIn,
        githubSignIn,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;