import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDlyUKyB-QDNedKdVpiwitRKIUffGD7L7w",
  authDomain: "todoapp-7fc22.firebaseapp.com",
  databaseURL: "https://todoapp-7fc22.firebaseio.com",
  projectId: "todoapp-7fc22",
  storageBucket: "todoapp-7fc22.appspot.com",
  messagingSenderId: "632274155471"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Chinnpao',
		age: 22
	}
});

firebaseRef.update({
	isRunning: false,
	'app/name': 'Todo Application'
});

firebaseRef.child('user').update({
	age: 23
}).then(() => {
	console.log('Update success.');
}, (e) => {
	console.log('Update failed.');
});

// firebaseRef.child('app/version').remove();

firebaseRef.once('value').then((snapshot) => {	// firebaseRef.child('app').once('value').then((snapshot) => {
	console.log('Got entire database', snapshot.val());
}, (e) => {
	console.log('Unable to fetch value', e);
});

// firebaseRef.on('value', (snapshot) => {		// render everytime data values changed
// 	console.log('Got value', snapshot.val());
// });

// firebaseRef.off();	// turn off render from code below
