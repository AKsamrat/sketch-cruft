// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUov6gNR-VC7Ki25melIH3wrYozAWysS8',
  authDomain: 'sketch-craft.firebaseapp.com',
  projectId: 'sketch-craft',
  storageBucket: 'sketch-craft.appspot.com',
  messagingSenderId: '614658242912',
  appId: '1:614658242912:web:3f6560efca3a329471c605',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
