import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGN0YfkVwAU57RAxFLo8YYDXiBF6jIsZU",
  authDomain: "expo-tp3.firebaseapp.com",
  projectId: "expo-tp3",
  storageBucket: "expo-tp3.appspot.com",
  messagingSenderId: "823745801404",
  appId: "1:823745801404:web:fa191ebed4368d0d2e74b9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
