import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const firebaseConfig = {
// 	apiKey: 'AIzaSyB-pDjGUcEBVO7tS2XwEyrnr5HUOXSPpzM',
// 	authDomain: 'react-app-cursos-6625f.firebaseapp.com',
// 	projectId: 'react-app-cursos-6625f',
// 	storageBucket: 'react-app-cursos-6625f.appspot.com',
// 	messagingSenderId: '746320917273',
// 	appId: '1:746320917273:web:a6ec2152d162d8a3ebcb88',
// };

// const firebaseConfigTesting = {
	// apiKey: "AIzaSyBVtzvmRVbVfwco1-9-4Ky1Kn11wPiUYbo",
	// authDomain: "fir-demo-56c62.firebaseapp.com",
	// databaseURL: "https://fir-demo-56c62.firebaseio.com",
	// projectId: "fir-demo-56c62",
	// storageBucket: "fir-demo-56c62.appspot.com",
	// messagingSenderId: "644174088796",
	// appId: "1:644174088796:web:9678a3fc378f7bae2ff499"
// };

// if (process.env.NODE_ENV === 'test') {
// 	// testing
// 	firebase.initializeApp(firebaseConfigTesting);
// } else {
// 	// dev/prod
// 	firebase.initializeApp(firebaseConfig);
// }

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DATABASEURL,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
