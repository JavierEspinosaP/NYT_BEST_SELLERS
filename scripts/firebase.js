
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider() //SIGN IN WITH GOOGLE

const createUser = (user) => {

  db.collection("users")
    .add(user)
    .then()
    .catch((error) => console.error("Error adding document: ", error));
};


const createFavorite = (favorite) => {
  db.collection("favorites")
    .add(favorite)
    .then()
    .catch((error) => console.error("Error adding document: ", error));
};

let filePath

document.getElementById('signUpImage').addEventListener('change', (event) => {

  filePath = event.target.files[0]

})



// SIGN UP 
document.getElementById('signUpForm').addEventListener('submit', (event) => {
  event.preventDefault();

  //Selectores de los inputs del registo

  let signUpEmail = document.getElementById('signUpEmail').value
  let signUpPassword = document.getElementById('signUpPassword').value
  let confirmPassword = document.getElementById('confirmPassword').value


//Guardado de la imagen

  const storageRef = firebase.storage().ref('UserImages/' + signUpEmail + '.jpg')
  storageRef.put(filePath)





// Si ambas contraseñas coinciden en el formulario, se comprueba si cumplen la Regex, si es así, se crea el usuario
  if (signUpPassword === confirmPassword) {

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signUpEmail) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(signUpPassword)){
      firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
      .then(function (result) {


        let imgUrl
        storageRef.getDownloadURL().then(function (url) {
          imgUrl = url

          createUser(
            {
              id: result.user.uid,
              email: result.user.email,
              nickname: document.getElementById('nickname').value,
              URLImage: imgUrl
            });
        })


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

        document.getElementById('small3').classList.remove('hide')
        document.getElementById('small3').classList.add('small3')


        //Se trae la sección "Welcome" y se pinta el nombre de usuario, salta una alerta de "Usuario registrado"
        let newParagraph = document.createElement('p')
        welcomeSection.appendChild(newParagraph)
        let message = document.createTextNode(`Welcome ${document.getElementById('nickname').value}!`);
        newParagraph.appendChild(message)
        Swal.fire({
          title: `User registered!`,
          icon: 'success',
          confirmButtonText: 'Cool!'
        })

        //Método para traer la URL de la imagen correspondiente al usuario

        db.collection("users").get().then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            let nickname
            let URLImage
            if (signUpEmail == doc.data().email) {
              nickname = doc.data().nickname
              userId = doc.data().id
              URLImage = doc.data().URLImage
            }
            if (nickname != undefined) {
              welcomeSection.innerHTML = (`
            <img id="currentUserImg" width="50" height="50" style="border-radius:50%; position: absolute; top: 5px; right: 150px" src="${URLImage}">
            <p>Welcome ${nickname}!</p>`);

              document.getElementById('favoriteView').classList.remove('hide')
              document.getElementById('favoriteView').classList.add('favoriteView')
              document.getElementById('small1').classList.remove('small1')
              document.getElementById('small1').classList.add('hide')

              document.getElementById('small2').classList.remove('small2')
              document.getElementById('small2').classList.add('hide')

            }
          })
        })
      })

    } else { //Si no pasa la Regex, salta un aviso
      Swal.fire({
        title: `Passwords must contain an uppercase letter, a lowercase letter and a number!`,
        icon: 'error',
        confirmButtonText: 'Ok...'
      })
    }
    
  } else {// Si no coinciden las contraseñas, salta un aviso
    Swal.fire({
      title: `Passwords dont match!`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
})

// SIGN IN
let userId;

let signInContainer = document.getElementById('formContainer')

let inputEmail;

let inputPassword;



document.getElementById('formContainer').addEventListener('submit', (event) => {
  event.preventDefault()


  //Selectores de los inputs del Login

  inputEmail = document.getElementById('inputEmail').value
  inputPassword = document.getElementById('inputPassword').value

//Autenticación de credenciales
  firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword)
    .then(userCredentials => {
      if (userCredentials.operationType === "signIn") {
        db.collection("users").get().then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            let nickname
            let URLImage
            if (inputEmail == doc.data().email) {
              nickname = doc.data().nickname
              userId = doc.data().id
              URLImage = doc.data().URLImage
            }
            if (nickname != undefined) {
              welcomeSection.innerHTML = (`
              <img id="currentUserImg" width="50" height="50" style="border-radius:50%; position: absolute; top: 5px; right: 130px" src="${URLImage}">
              <p>Welcome ${nickname}!</p>`);
            }
            document.getElementById('welcomeSection').classList.remove('hide')
            document.getElementById('welcomeSection').classList.add('welcomeSection')
          })
        });

        document.getElementById('small3').classList.remove('hide')
        document.getElementById('small3').classList.add('small3')

        document.getElementById('favoriteView').classList.remove('hide')
        document.getElementById('favoriteView').classList.add('favoriteView')

        document.getElementById('formContainer').classList.remove('formContainer')
        document.getElementById('formContainer').classList.add('hide')



        document.getElementById('small1').classList.remove('small1')
        document.getElementById('small1').classList.add('hide')

        document.getElementById('small2').classList.remove('small2')
        document.getElementById('small2').classList.add('hide')
        document.getElementById('googleContainer2').classList.remove('googleContainer2')
        document.getElementById('googleContainer2').classList.add('hide')

      }


    }
    )

})

//LOG OUT

document.getElementById('small3').addEventListener('click', (event) => {
  event.preventDefault();
  firebase.auth().signOut() //Método para desloguearse
    .then(() => {

      document.getElementById('formContainer').classList.remove('hide')
      document.getElementById('formContainer').classList.add('formContainer')
      document.getElementById('welcomeSection').classList.remove('welcomeSection')
      document.getElementById('welcomeSection').classList.add('hide')
      document.getElementById('small3').classList.remove('small3')
      document.getElementById('small3').classList.add('hide')
      document.getElementById('favoriteView').classList.remove('favoriteView')
      document.getElementById('favoriteView').classList.add('hide')
      if (document.getElementById('book1').classList.contains('book')) {
        bookNumber = 0
        arrRanking = [];
        arrBookNames = [];
        arrPictures = [];
        arrWeeks = [];
        arrParagraph = [];
        arrAmazon = [];
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
        document.getElementById('book1').classList.remove('book')
        document.getElementById('book1').classList.add('hide')
        document.getElementById('book2').classList.remove('book')
        document.getElementById('book2').classList.add('hide')
        document.getElementById('book3').classList.remove('book')
        document.getElementById('book3').classList.add('hide')
        document.getElementById('book4').classList.remove('book')
        document.getElementById('book4').classList.add('hide')
        if (pageNumber != 4) {
          document.getElementById('nextButton').classList.remove('hideButton')
          document.getElementById('nextButton').classList.add('showButton')
        }
        if (pageNumber != 0) {
          document.getElementById('previousButton').classList.remove('hideButton')
          document.getElementById('previousButton').classList.add('showButton')
        }
        document.getElementById('comeBackButton').classList.add('hide')
        document.getElementById('nextButtonBooks').classList.add('hide')
        document.getElementById('previousButtonBooks').classList.add('hide')


        document.getElementById('signUpContainer').classList.remove('signUpContainer')
        document.getElementById('signUpContainer').classList.add('hide')




      }

      document.getElementById('small1').classList.remove('hide')
      document.getElementById('small1').classList.add('showButton')
      document.getElementById('small2').classList.remove('hide')
      document.getElementById('small2').classList.add('showButton')


    })
  Swal.fire({
    title: `You're logout!`,
    icon: 'success',
    confirmButtonText: 'Thanks'
  })
})

//SIGN IN WITH GOOGLE

document.getElementById('googleContainer').addEventListener('click', (event) => {
  event.preventDefault();

  var provider = new firebase.auth.GoogleAuthProvider(); //Método para loguearse con Google
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function (result) {

    let user = result.user;
    let newUser = {
      email: user.email,
      id: user.uid,
      nickname: user.displayName
    }

    db.collection("users")
      .where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size == 0) {
          db.collection("users")
            .add(newUser)
        }

        welcomeSection.innerHTML = (`<p>Welcome ${user.displayName}!</p>`);
        document.getElementById('welcomeSection').classList.remove('hide')
        document.getElementById('welcomeSection').classList.add('welcomeSection')

        document.getElementById('small3').classList.remove('hide')
        document.getElementById('small3').classList.add('small3')

        document.getElementById('formContainer').classList.remove('formContainer')
        document.getElementById('formContainer').classList.add('hide')

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

        document.getElementById('signUpContainer').classList.remove('signUpContainer')
        document.getElementById('signUpContainer').classList.add('hide')

      })


  })
  document.getElementById('favoriteView').classList.remove('hide')
  document.getElementById('favoriteView').classList.add('favoriteView')
})

// Sign In con Google desde la página principal

document.getElementById('googleContainer2').addEventListener('click', (event) => {
  event.preventDefault();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function (result) {

    let user = result.user;
    let newUser = {
      email: user.email,
      id: user.uid,
      nickname: user.displayName
    }

    db.collection("users")
      .where("email", "==", user.email)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size == 0) {
          db.collection("users")
            .add(newUser)
        }

        welcomeSection.innerHTML = (`<p>Welcome ${user.displayName}!</p>`);
        document.getElementById('welcomeSection').classList.remove('hide')
        document.getElementById('welcomeSection').classList.add('welcomeSection')

        document.getElementById('small3').classList.remove('hide')
        document.getElementById('small3').classList.add('small3')

        document.getElementById('formContainer').classList.remove('formContainer')
        document.getElementById('formContainer').classList.add('hide')

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

        document.getElementById('signUpContainer').classList.remove('signUpContainer')
        document.getElementById('signUpContainer').classList.add('hide')

      })
    document.getElementById('favoriteView').classList.remove('hide')
    document.getElementById('favoriteView').classList.add('favoriteView')
  })
})


