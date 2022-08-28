//Número de página por defecto
let pageNumber = 0

//Arrays con los datos de la API

let listsNames;
let position1;
let position2;
let arrListNames = [];
let arrListOlder = [];
let arrListNewer = [];
let arrUpdated = [];



//Funcion para traer las listas de la API

async function getLists() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`) //Trae la info
    let data = await responselist.json()


//Métodos .maps para hacer los arrays con los diferentes datos
    listsNames = data.results.map((list) => {
        return list.list_name
    })
    listsNames.map((arr) => {
        arrListNames.push(arr)
    })

    let listsOlder = data.results.map((list) => {
        return list.oldest_published_date
    })

    listsOlder.map((arr) => {
        arrListOlder.push(arr)
    })

    let listsNewer = data.results.map((list) => {
        return list.newest_published_date
    })

    listsNewer.map((arr) => {
        arrListNewer.push(arr)
    })

    let updated = data.results.map((list) => {
        return list.updated
    })

    updated.map((arr) => {
        arrUpdated.push(arr)
    })

    //Array para la paginación de todas las tarjetas
    const pages = [[0, 12], [12, 24], [24, 36], [36, 48], [48, 59]]

    let changePage = pages[pageNumber]

    position1 = changePage[0]
    position2 = changePage[1]

    //Bucle "for" para iterar cada posición de los arrays en los distintos <div> y pintar sus datos

    for (let i = position1; i < position2; i++) {
        document.getElementById(`h3List${(i + 1) - position1}`).innerHTML = arrListNames[i];
        document.getElementById(`list${(i + 1) - position1}Oldest`).innerHTML = "Oldest: " + arrListOlder[i];
        document.getElementById(`list${(i + 1) - position1}Newest`).innerHTML = "Newest: " + arrListNewer[i];
        document.getElementById(`list${(i + 1) - position1}Updated`).innerHTML = "Updated: " + arrUpdated[i]
    }

}

getLists()

//Función para cambiar de página

function changePage() {

    const pages = [[0, 12], [12, 24], [24, 36], [36, 48], [48, 59]]

    let changePage = pages[pageNumber]
    position1 = changePage[0]

    position2 = changePage[1]

    //Bucle "for" para pintar los nuevos datos en la página

    for (let i = position1; i < position2; i++) {
        document.getElementById(`h3List${(i + 1) - position1}`).innerHTML = arrListNames[i];
        document.getElementById(`list${(i + 1) - position1}Oldest`).innerHTML = "Oldest: " + arrListOlder[i];
        document.getElementById(`list${(i + 1) - position1}Newest`).innerHTML = "Newest: " + arrListNewer[i];
        document.getElementById(`list${(i + 1) - position1}Updated`).innerHTML = "Updated: " + arrUpdated[i]
    }

}

//ADD TO FAVORITES

document.getElementById('favorites1').addEventListener('click', () => {


    let counterFav = 0 //Variable para saber si existe el libro ya

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = (document.getElementById(`h3Book1`).innerHTML).slice(3)

    counterFav = 0

    db.collection("favorites").get().then(querySnapshot => {

        querySnapshot.docs.map(doc => { //Mapeo de los documentos "favorites"

        if (bookName == doc.data().bookName && userId == doc.data().userId) { //Si el libro actual y el Id del usuario coinciden con el libro de la iteracion y con el Id del documento guardado, suma 1 a la variable
                counterFav++
            }
            
        })
        
        let favorites = { //Se crea el objeto "favorites"
        userId: userId,
        bookName: bookName,
        imgBook: document.getElementById(`imgBook1`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook1`).innerHTML,
        paragraph: document.getElementById(`pBook1`).innerHTML,
        amazonLink: document.getElementById(`amazon1`).innerHTML
    }

  if (counterFav == 0) { //Si la variable es 0, es decir, el usuario aun no ha guardado el libro, se añade a la colección el objeto

        db.collection("favorites")
            .add(favorites)
            .then()
            .catch((error) => console.error("Error adding document: ", error));
        Swal.fire({
            title: 'Book added to your favorites!',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
    }

    else {// Si no, salta un aviso
        Swal.fire({
            title: `This book is already on your favorites!`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

        
    })
})

//Mismo procedimiento para las otras tarjetas


document.getElementById('favorites2').addEventListener('click', () => {


  let counterFav = 0  


    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = (document.getElementById(`h3Book2`).innerHTML).slice(3)

    counterFav = 0

    db.collection("favorites").get().then(querySnapshot => {

        querySnapshot.docs.map(doc => {

            if (bookName == doc.data().bookName && userId == doc.data().userId) {
                counterFav++
            }
            
        })

         let favorites = {
        userId: userId,
        bookName: bookName,
        imgBook: document.getElementById(`imgBook2`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook2`).innerHTML,
        paragraph: document.getElementById(`pBook2`).innerHTML,
        amazonLink: document.getElementById(`amazon2`).innerHTML
    }

  if (counterFav == 0) {

        db.collection("favorites")
            .add(favorites)
            .then()
            .catch((error) => console.error("Error adding document: ", error));
        Swal.fire({
            title: 'Book added to your favorites!',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
    }

    else {
        Swal.fire({
            title: `This book is already on your favorites!`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

        
    })



})

document.getElementById('favorites3').addEventListener('click', () => {

  let counterFav = 0  

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = (document.getElementById(`h3Book3`).innerHTML).slice(3)

    counterFav = 0

    db.collection("favorites").get().then(querySnapshot => {

        querySnapshot.docs.map(doc => {

            if (bookName == doc.data().bookName && userId == doc.data().userId) {
                counterFav++
            }
            
        })

         let favorites = {
        userId: userId,
        bookName: bookName,
        imgBook: document.getElementById(`imgBook3`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook3`).innerHTML,
        paragraph: document.getElementById(`pBook3`).innerHTML,
        amazonLink: document.getElementById(`amazon3`).innerHTML
    }

  if (counterFav == 0) {

        db.collection("favorites")
            .add(favorites)
            .then()
            .catch((error) => console.error("Error adding document: ", error));
        Swal.fire({
            title: 'Book added to your favorites!',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
    }

    else {
        Swal.fire({
            title: `This book is already on your favorites!`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

        
    })

})

document.getElementById('favorites4').addEventListener('click', () => {

   let counterFav = 0  

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = (document.getElementById(`h3Book4`).innerHTML).slice(3)

counterFav = 0

    db.collection("favorites").get().then(querySnapshot => {

        querySnapshot.docs.map(doc => {

            if (bookName == doc.data().bookName && userId == doc.data().userId) {
                counterFav++
            }
            
        })

         let favorites = {
        userId: userId,
        bookName: bookName,
        imgBook: document.getElementById(`imgBook4`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook4`).innerHTML,
        paragraph: document.getElementById(`pBook4`).innerHTML,
        amazonLink: document.getElementById(`amazon4`).innerHTML
    }


  if (counterFav == 0) {


        db.collection("favorites")
            .add(favorites)
            .then()
            .catch((error) => console.error("Error adding document: ", error));
        Swal.fire({
            title: 'Book added to your favorites!',
            icon: 'success',
            confirmButtonText: 'Cool'
            })
    }

    else {
        Swal.fire({
            title: `This book is already on your favorites!`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

        
    })

})



// FAVORITES VIEW
let favoriteNumber = 0

document.getElementById('favoriteView').addEventListener('click', () => {



    favoriteNumber = 0 //Variable para el número de página

    async function getData() {

        //Arrays de datos
        let arrBookNames = [];
        let arrPictures = [];
        let arrWeeks = [];
        let arrParagraph = [];
        let arrAmazon = [];

        let userId


        await db.collection("users").get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                if (inputEmail == doc.data().email) {
                    nickname = doc.data().nickname
                    userId = doc.data().id
                }
            })
        })

        //Traemos todos los favoritos que coincidan con userId
        await db.collection("favorites").get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {

                if (userId == doc.data().userId) {
                    arrAmazon.push(doc.data().amazonLink);
                    arrParagraph.push(doc.data().paragraph)
                    arrWeeks.push(doc.data().weeksOnList)
                    arrPictures.push(doc.data().imgBook)
                    arrBookNames.push(doc.data().bookName)

                }

            })
        })

        //Pintado de tarjetas
        const books = [[0, 4], [4, 8], [8, 12], [12, 15], [15, 18], [18, 21], [21, 24]]
        let changeBook = books[favoriteNumber]
        let bookPos1 = changeBook[0]
        let bookPos2 = changeBook[1]

        for (let i = bookPos1; i < bookPos2; i++) {
            if (arrBookNames[i] != undefined) {// Si no es undefined, pintamos los datos
                document.getElementById(`h3Book${(i + 1) - bookPos1}`).innerHTML = arrBookNames[i]
                document.getElementById(`imgBook${(i + 1) - bookPos1}`).innerHTML = arrPictures[i]
                document.getElementById(`weeksBook${(i + 1) - bookPos1}`).innerHTML = "Weeks on list: " + arrWeeks[i]
                document.getElementById(`pBook${(i + 1) - bookPos1}`).innerHTML = arrParagraph[i]
                document.getElementById(`amazon${(i + 1) - bookPos1}`).innerHTML = arrAmazon[i]
            }
            else { //Si lo es, borramos la tarjeta de la view
                document.getElementById(`book${(i + 1)}`).classList.remove('book')
                document.getElementById(`book${(i + 1)}`).classList.add('hide')
            }

        }
        if (arrBookNames.length <= 4) {// Si hay menos de 4 favoritos, borramos el boton "next"
            document.getElementById('nextButtonFavorites').classList.remove('showButton')
            document.getElementById('nextButtonFavorites').classList.add('hide')
        }
        if (arrBookNames.length == 0) { //Si no hay favoritos, nos traemos la imagen del gato
            if (document.getElementById('catFavorite').classList.contains('hide')) {
                document.getElementById('catFavorite').classList.remove('hide')
                document.getElementById('catFavorite').classList.add('catFavorite')
            }
            document.getElementById('catFavorite').innerHTML = `<img id="catFavoriteImg" class="catFavorite" width="600" height="500" style="position: absolute; top: 250px; right: 30%" src="https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/02b740b969f26acdd7158bbdd92110ce.jpg">`

        }
    }
    getData()

    //Borramos todas las tarjetas de listas

    document.getElementById('list1').classList.remove('list')
    document.getElementById('list1').classList.add('hide')
    document.getElementById('list2').classList.remove('list')
    document.getElementById('list2').classList.add('hide')
    document.getElementById('list3').classList.remove('list')
    document.getElementById('list3').classList.add('hide')
    document.getElementById('list4').classList.remove('list')
    document.getElementById('list4').classList.add('hide')
    document.getElementById('list5').classList.remove('list')
    document.getElementById('list5').classList.add('hide')
    document.getElementById('list6').classList.remove('list')
    document.getElementById('list6').classList.add('hide')
    document.getElementById('list7').classList.remove('list')
    document.getElementById('list7').classList.add('hide')
    document.getElementById('list8').classList.remove('list')
    document.getElementById('list8').classList.add('hide')
    document.getElementById('list9').classList.remove('list')
    document.getElementById('list9').classList.add('hide')
    document.getElementById('list10').classList.remove('list')
    document.getElementById('list10').classList.add('hide')
    document.getElementById('list11').classList.remove('list')
    document.getElementById('list11').classList.add('hide')
    document.getElementById('list12').classList.remove('list')
    document.getElementById('list12').classList.add('hide')
    document.getElementById('book1').classList.remove('hide')
    document.getElementById('book1').classList.add('book')
    document.getElementById('book2').classList.remove('hide')
    document.getElementById('book2').classList.add('book')
    document.getElementById('book3').classList.remove('hide')
    document.getElementById('book3').classList.add('book')
    document.getElementById('book4').classList.remove('hide')
    document.getElementById('book4').classList.add('book')
    document.getElementById('h3Book1').classList.remove('hide')
    document.getElementById('h3Book2').classList.remove('hide')
    document.getElementById('h3Book3').classList.remove('hide')
    document.getElementById('h3Book4').classList.remove('hide')
    document.getElementById('imgBook1').classList.remove('hide')
    document.getElementById('imgBook2').classList.remove('hide')
    document.getElementById('imgBook3').classList.remove('hide')
    document.getElementById('imgBook4').classList.remove('hide')
    document.getElementById('weeksBook1').classList.remove('hide')
    document.getElementById('weeksBook2').classList.remove('hide')
    document.getElementById('weeksBook3').classList.remove('hide')
    document.getElementById('weeksBook4').classList.remove('hide')
    document.getElementById('pBook1').classList.remove('hide')
    document.getElementById('pBook2').classList.remove('hide')
    document.getElementById('pBook3').classList.remove('hide')
    document.getElementById('pBook4').classList.remove('hide')
    document.getElementById('nextButton').classList.remove('showButton')
    document.getElementById('nextButton').classList.add('hide')


    if (favoriteNumber != 4) {
        document.getElementById('nextButtonFavorites').classList.remove('hide')
    }
    if (favoriteNumber != 0) {
        document.getElementById('previousButtonFavorites').classList.remove('hide')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('showButton')
    document.getElementById('nextButtonBooks').classList.add('hide')
    document.getElementById('previousButtonBooks').classList.remove('showButton')
    document.getElementById('previousButtonBooks').classList.add('hide')
    document.getElementById('favorites1').classList.remove('favorites')
    document.getElementById('favorites2').classList.remove('favorites')
    document.getElementById('favorites3').classList.remove('favorites')
    document.getElementById('favorites4').classList.remove('favorites')
    document.getElementById('favorites1').classList.add('hide')
    document.getElementById('favorites2').classList.add('hide')
    document.getElementById('favorites3').classList.add('hide')
    document.getElementById('favorites4').classList.add('hide')


})

//ALERTS

