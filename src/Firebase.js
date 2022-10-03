import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9chzhkiWObKLJNvmehjKm_TTMJvrx4dE",
  authDomain: "simple-form-9b47b.firebaseapp.com",
  projectId: "simple-form-9b47b",
  storageBucket: "simple-form-9b47b.appspot.com",
  messagingSenderId: "304389226377",
  appId: "1:304389226377:web:23d116e3941bf4e1e2ab58",
  measurementId: "G-BNGDSWW8LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authorization
export const auth = getAuth(app)
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();


// Signup Using Email/Password
export const registerUser = async (registerEmail, registerPassword)=>{
  try{
    const user =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    alert("You are registered")
    // navigate("/login")
    console.log(user)
  }
  catch(error){
      alert(error.message)
  }
}

// Login Using Email/Password
export const Login_user = async (loginEmail, loginPassword) => {
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    // navigate("/")
    console.log(user)
  } 
  catch (error) {
    alert("Please Enter Valid Credentials");
  }
};


//Google Auth
export const signInwithGoogle = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      console.log(result.user);

      // ...
    }).catch((error) => {
      console.log(error.message);
    });
}

//Facebook Auth
export const signInwithFacebook = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log("error");
    });
}

//Twitter Auth
export const signInwithGithub = () => {
  signInWithPopup(auth, providerGithub)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log("error");
    });
}


