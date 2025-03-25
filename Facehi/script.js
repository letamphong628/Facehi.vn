import { auth, provider, db, storage } from "./firebase.js";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const imageInput = document.getElementById("image-input");
const sendBtn = document.getElementById("send-btn");

let currentUser = null;

// Đăng nhập Google
loginBtn.addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        currentUser = result.user;
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
    }
});

// Đăng xuất
logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
});

// Theo dõi trạng thái người dùng
onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        loginBtn.style.display = "none";
        logoutBtn.style
