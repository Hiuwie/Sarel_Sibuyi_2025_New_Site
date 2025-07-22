import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwYmIYh5ZJsX5joNvY74TMHDcKw6e6_kU",
    authDomain: "login-with-email-5e214.firebaseapp.com",
    projectId: "login-with-email-5e214",
    storageBucket: "login-with-email-5e214.firebasestorage.app",
    messagingSenderId: "218976633269",
    appId: "1:218976633269:web:9e2d5831470ab12c3559fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth
export const auth = getAuth(app);