import 'firebase/compat/firestore';
import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjvBf5Qn-8wljVsgxfHOsQc-S1NQn1iAk',
  authDomain: 'linkedin-clone-ef369.firebaseapp.com',
  projectId: 'linkedin-clone-ef369',
  storageBucket: 'linkedin-clone-ef369.appspot.com',
  messagingSenderId: '289537603490',
  appId: '1:289537603490:web:f290130557cd299edee4fb',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(firebaseApp);
