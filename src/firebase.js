import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection,getDocs,query,where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL84mvbIpd14vtkgaqXUxfV-Px2qUPQPc",
  authDomain: "farmer-app-f159f.firebaseapp.com",
  projectId: "farmer-app-f159f",
  storageBucket: "farmer-app-f159f.appspot.com",
  messagingSenderId: "334928964938",
  appId: "1:334928964938:web:b95ecf1ead7713be3825b3",
  measurementId: "G-V7E5LJFVQD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db,collection,getDocs,query,where };