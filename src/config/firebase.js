import firebase from 'firebase'; 

const firebaseCredentials = {
    apiKey: "AIzaSyCB9127rzCO2-_faUKn0_Gl2YnHa_kAgiI",
    authDomain: "hackathon-here-laboratoriacdmx.firebaseapp.com",
    databaseURL: "https://hackathon-here-laboratoriacdmx.firebaseio.com",
    projectId: "hackathon-here-laboratoriacdmx",
    storageBucket: "hackathon-here-laboratoriacdmx.appspot.com",
    messagingSenderId: "906777205290"
};

firebase.initializeApp(firebaseCredentials);
export const auth = firebase.auth();

export default firebase;

export const initSesion = (email, password) => {
	auth.signInWithEmailAndPassword(email, password)
		.then((res) => { 
			console.log('logueado ' + res);
			return})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
    
};

export const logout = () => {
	auth.signOut().then(() => {
		console.log('Desconectado')
		return
	})
	.catch((error) => console.log(`Error: ${error.code}: ${error.message}`));	
};