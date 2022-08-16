

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// db representa mi BBDD



const createUser = (user) => {
    user = {
    email : signInEmail.value,
    password: signInPassword.value
    }
    db.collection("users")
        .add(user)
        .then((docRef) => console.log("Document written with ID: ", docRef.id))
        .catch((error) => console.error("Error adding document: ", error));
};


const createFavorite = (favorite) => {
    db.collection("favorites")
        .add(favorite)
        .then((docRef) => console.log("Document written with ID: ", docRef.id))
        .catch((error) => console.error("Error adding document: ", error));
};

document.getElementById('signInForm').addEventListener('submit', (event) => {
  event.preventDefault();
  createUser()
})