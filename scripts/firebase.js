
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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

// SIGN UP 
document.getElementById('signUpForm').addEventListener('submit', (event) => {
  event.preventDefault();

  let signUpEmail = document.getElementById('signUpEmail').value
  let signUpPassword = document.getElementById('signUpPassword').value
  let confirmPassword = document.getElementById('confirmPassword').value

  if (signUpPassword === confirmPassword) {
    firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
      .then(function (result) {
        console.log(result.user.uid);
        createUser({
          id: result.user.uid,
          email: result.user.email,
          nickname: document.getElementById('nickname').value
        });
        document.getElementById('signUpContainer').classList.remove('signUpContainer')
        document.getElementById('signUpContainer').classList.add('hide')
        document.getElementById('list1').classList.remove('hide')
        document.getElementById('list1').classList.add('list')
        document.getElementById('list2').classList.remove('hide')
        document.getElementById('list2').classList.add('list')
        document.getElementById('list3').classList.remove('hide')
        document.getElementById('list3').classList.add('list')
        document.getElementById('list4').classList.remove('hide')
        document.getElementById('list4').classList.add('list')
        document.getElementById('list5').classList.remove('hide')
        document.getElementById('list5').classList.add('list')
        document.getElementById('list6').classList.remove('hide')
        document.getElementById('list6').classList.add('list')
        document.getElementById('list7').classList.remove('hide')
        document.getElementById('list7').classList.add('list')
        document.getElementById('list8').classList.remove('hide')
        document.getElementById('list8').classList.add('list')
        document.getElementById('list9').classList.remove('hide')
        document.getElementById('list9').classList.add('list')
        document.getElementById('list10').classList.remove('hide')
        document.getElementById('list10').classList.add('list')
        document.getElementById('list11').classList.remove('hide')
        document.getElementById('list11').classList.add('list')
        document.getElementById('list12').classList.remove('hide')
        document.getElementById('list12').classList.add('list')
        if (pageNumber != 4) {
          document.getElementById('nextButton').classList.remove('hideButton')
          document.getElementById('nextButton').classList.add('showButton')
        }
        if (pageNumber != 0) {
          document.getElementById('previousButton').classList.remove('hideButton')
          document.getElementById('previousButton').classList.add('showButton')
        }
        document.getElementById('formContainer').classList.remove('formContainer')
        document.getElementById('formContainer').classList.add('hide')

        document.getElementById('welcomeSection').classList.remove('hide')
        document.getElementById('welcomeSection').classList.add('welcomeSection')

        let newParagraph = document.createElement('p')
        welcomeSection.appendChild(newParagraph)
        let message = document.createTextNode(`Welcome ${document.getElementById('nickname').value}!`);
        newParagraph.appendChild(message)

      }).catch(function (error) {
        console.log(error);
      });

  } else {
    alert("las contraseñas deben coincidir")
  }


})

// SIGN IN

document.getElementById('formContainer').addEventListener('submit', (event) => {
  event.preventDefault()

  let inputEmail = document.getElementById('inputEmail').value
  let inputPassword = document.getElementById('inputPassword').value

  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword)
    .then(function (result) {
      console.log(result.user.uid)
    })

let nickname;

db.collection("users").get().then(querySnapshot => {
      querySnapshot.docs.map(doc => {
        if (inputEmail == doc.data().email) {
          nickname = doc.data().nickname
        }
        console.log(nickname);

        let newParagraph = document.createElement('p')
        welcomeSection.appendChild(newParagraph)
        if (nickname != undefined) {
        let message = document.createTextNode(`Welcome ${nickname}!`);
        newParagraph.appendChild(message)
        }
      })
    });

  document.getElementById('formContainer').classList.remove('formContainer')
  document.getElementById('formContainer').classList.add('hide')

  document.getElementById('welcomeSection').classList.remove('hide')
  document.getElementById('welcomeSection').classList.add('welcomeSection')



})

