

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();// db representa mi BBDD

const createUser = (user) => {
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