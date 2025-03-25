// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCtWD-rcFoQRveBfYF-2MA-8O_ybHv4VE8",
  authDomain: "facehi-375f9.firebaseapp.com",
  projectId: "facehi-375f9",
  storageBucket: "facehi-375f9.appspot.com",
  messagingSenderId: "540761559590",
  appId: "1:540761559590:web:4499d823d2a43d95738ce7",
  measurementId: "G-5ME2C3VCQ1"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
