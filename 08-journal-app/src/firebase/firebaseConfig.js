import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB-pDjGUcEBVO7tS2XwEyrnr5HUOXSPpzM',
	authDomain: 'react-app-cursos-6625f.firebaseapp.com',
	projectId: 'react-app-cursos-6625f',
	storageBucket: 'react-app-cursos-6625f.appspot.com',
	messagingSenderId: '746320917273',
	appId: '1:746320917273:web:a6ec2152d162d8a3ebcb88',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
