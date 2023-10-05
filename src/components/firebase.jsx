// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACdX1CeNY3NGSOEEaR0E5CGCs-_yzztMY",
//   authDomain: "cryptotracker-74103.firebaseapp.com",
//   projectId: "cryptotracker-74103",
//   storageBucket: "cryptotracker-74103.appspot.com",
//   messagingSenderId: "861073454945",
//   appId: "1:861073454945:web:4576662217163355837720"
// };

// // Initialize Firebase
// var db = initializeApp(firebaseConfig);
// export {db};

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACdX1CeNY3NGSOEEaR0E5CGCs-_yzztMY",
  authDomain: "cryptotracker-74103.firebaseapp.com",
  projectId: "cryptotracker-74103",
  storageBucket: "cryptotracker-74103.appspot.com",
  messagingSenderId: "861073454945",
  appId: "1:861073454945:web:4576662217163355837720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


