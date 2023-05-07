import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../Firebase/Firebase.init";



initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  let his = useHistory();
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
   return signInWithPopup(auth, googleProvider)
    
  };
  const RegisterWithEmail = () => {
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        
        console.log(result);
        hanldeUserInfoRegister(result.user.email)
        setUser(result.user);
        setName(user.name);
        updateDisplayName();
        signInusingEmailPassword();
        verifyEmail();
        setError("");
        
      })
      .catch((error) => {
        if ("Firebase: Error (auth/email-already-in-use)." === error.message)
          setError("User already exist,please login!");
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };

  const signInusingEmailPassword = () => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        
      })
      .catch((error) => {
        if ("Firebase: Error (auth/wrong-password)." === error.message)
          setError("Email/Password is incorrect!");
        // else setError(error.message);
      });
   
  };
 const historychange = () =>{
    his.push("/");
  }
  const handleLogOut = () => {
    setIsLoading(true);
    setUser({});
    setError("");
    setName("");
    setPassword("");
    signOut(auth).then((result) => {});
  };
  const updateDisplayName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      
    })
      .then((result) => {
        // setUser(result.user);
        // setName(user.name);
      })
      .catch((error) => {});
  };


  const hanldeUserInfoRegister = (email) => {
    fetch("https://creative-agency-server-9jtj.onrender.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };




  return {
    handleGoogleSignIn,
    handleLogOut,
    RegisterWithEmail,
    email,
    setEmail,
    password,
    setPassword,
    setName,
    user,
    setUser,
    error,
    setError,
    signInusingEmailPassword,
    name,
    historychange,
    isLoading,
  };
};

export default useFirebase;