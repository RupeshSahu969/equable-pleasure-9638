// import { useToast } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
// import { Navigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup,s } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyATn6xKT_r5TCsyEGKbbqGElBmyqgMYb1c",
    authDomain: "clockify-2e50d.firebaseapp.com",
    projectId: "clockify-2e50d",
    storageBucket: "clockify-2e50d.appspot.com",
    messagingSenderId: "708497831506",
    appId: "1:708497831506:web:73a709cfd855e3c8dad18b"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// const toast = useToast()

export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result._tokenResponse)
        console.log(result._tokenResponse.email)
        console.log(result._tokenResponse.firstName)
        console.log(result._tokenResponse.photoUrl)
        // window.location.href='http://localhost:3000'
    //   const name = result.user.displayName;
    //   const email = result.user.email;
    //   const profilePic = result.user.photoURL;
    // Navigate('/')

    // toast({
    //     description:"Log In Success",
    //     position:'bottom-right',
    //     isClosable: true,
    //     status:"success",
    //   })

    //   localStorage.setItem("name", name);
    //   localStorage.setItem("email", email);
    //   localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
      // toast({
      //   description:"An Unknown error occured",
      //   position:'bottom-right',
      //   isClosable: true,
      //   status:"error",
      // })
    });
};