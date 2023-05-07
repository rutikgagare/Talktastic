import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWrtKcO1yOzoABMuWqknQdd3yi_y9RVxI",
  authDomain: "chatapp-9e5ec.firebaseapp.com",
  projectId: "chatapp-9e5ec",
  storageBucket: "chatapp-9e5ec.appspot.com",
  messagingSenderId: "181911633280",
  appId: "1:181911633280:web:70e37253b6207d57455565",
  measurementId: "G-K49XP4GHGS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
