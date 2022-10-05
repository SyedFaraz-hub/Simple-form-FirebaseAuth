import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9chzhkiWObKLJNvmehjKm_TTMJvrx4dE",
  authDomain: "simple-form-9b47b.firebaseapp.com",
  projectId: "simple-form-9b47b",
  storageBucket: "simple-form-9b47b.appspot.com",
  messagingSenderId: "304389226377",
  appId: "1:304389226377:web:23d116e3941bf4e1e2ab58",
  measurementId: "G-BNGDSWW8LY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authorization
export const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();

// Signup Using Email/Password
export const registerUser = async (registerEmail, registerPassword) => {
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    console.log(user);
    return "successful";
  } catch (error) {
    return "unsuccessful";
  }
};

// Login Using Email/Password
export const Login_user = async (loginEmail, loginPassword) => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (error) {
    //  console.log(error)
  }
};

//Google Auth
export const signInwithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, providerGoogle);
    return {
      username: result.user.displayName,
      photoURL: result.user.photoURL,
      status: "success"
    };
    //  console.log(user);
  } catch (error) {
    //  console.log(error)
  }

};

//Google Auth
export const signInwithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, providerFacebook);
    return {
      username: result.user.displayName,
      photoURL: result.user.photoURL,
      status: "success"
    };
    //  console.log(user);
  } catch (error) {
    //  console.log(error)
  }

};


//Google Auth
export const signInwithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, providerGithub);
    return {
      
      username: result.user.displayName,
      photoURL: result.user.photoURL,
      status: "success"
    };
    //  console.log(user);
  } catch (error) {
    //  console.log(error)
  }
};

