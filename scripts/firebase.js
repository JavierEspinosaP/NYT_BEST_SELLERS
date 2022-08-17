

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
const db = firebase.firestore();// db representa mi BBDD






document.getElementById('signUpGoogle').addEventListener('click',()=>{

})

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

  

document.getElementById('signInForm').addEventListener('submit', (event) => {
  event.preventDefault();
  

let email = document.getElementById('signUpEmail').value
let password = document.getElementById('signUpPassword').value
let confirmPassword = document.getElementById('confirmPassword').value

if (password === confirmPassword) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(result) {
    console.log(result.user.uid);
  createUser({
    id:result.user.uid,
    email:result.user.email
  });
  
  }).catch(function(error) {
    console.log(error);
  });

} else {
  alert("las contraseñas deben coincidir")
}


  })
