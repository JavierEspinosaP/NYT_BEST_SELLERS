
let pageNumber = 0

let listsNames;
let position1;
let position2;
let arrListNames = [];
let arrListOlder = [];
let arrListNewer = [];
let arrUpdated = [];




async function getLists() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
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

    const pages = [[0, 12], [12, 24], [24, 36], [36, 48], [48, 59]]

    let changePage = pages[pageNumber]

    position1 = changePage[0]
    position2 = changePage[1]

    for (let i = position1; i < position2; i++) {
        document.getElementById(`h3List${(i + 1) - position1}`).innerHTML = arrListNames[i];
        document.getElementById(`list${(i + 1) - position1}Oldest`).innerHTML = "Oldest: " + arrListOlder[i];
        document.getElementById(`list${(i + 1) - position1}Newest`).innerHTML = "Newest: " + arrListNewer[i];
        document.getElementById(`list${(i + 1) - position1}Updated`).innerHTML = "Updated: " + arrUpdated[i]
    }

}

getLists()

function changePage() {

    const pages = [[0, 12], [12, 24], [24, 36], [36, 48], [48, 59]]

    let changePage = pages[pageNumber]
    position1 = changePage[0]

    position2 = changePage[1]

    for (let i = position1; i < position2; i++) {
        document.getElementById(`h3List${(i + 1) - position1}`).innerHTML = arrListNames[i];
        document.getElementById(`list${(i + 1) - position1}Oldest`).innerHTML = "Oldest: " + arrListOlder[i];
        document.getElementById(`list${(i + 1) - position1}Newest`).innerHTML = "Newest: " + arrListNewer[i];
        document.getElementById(`list${(i + 1) - position1}Updated`).innerHTML = "Updated: " + arrUpdated[i]
    }

}

//ADD TO FAVORITES

document.getElementById('favorites1').addEventListener('click', () => {

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = document.getElementById(`h3Book1`).innerHTML

    let favorites = {
        userId: userId,
        bookName: bookName.slice(3),
        imgBook: document.getElementById(`imgBook1`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook1`).innerHTML,
        paragraph: document.getElementById(`pBook1`).innerHTML,
        amazonLink: document.getElementById(`amazon1`).innerHTML
    }

    if (userId != undefined) {
        db.collection("favorites")
            .add(favorites)
            .then((docRef) => console.log("Document written with ID: ", docRef.id))
            .catch((error) => console.error("Error adding document: ", error));
    }


})

document.getElementById('favorites2').addEventListener('click', () => {

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = document.getElementById(`h3Book2`).innerHTML

    let favorites = {
        userId: userId,
        bookName: bookName.slice(3),
        imgBook: document.getElementById(`imgBook2`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook2`).innerHTML,
        paragraph: document.getElementById(`pBook2`).innerHTML,
        amazonLink: document.getElementById(`amazon2`).innerHTML
    }
    if (userId != undefined) {
        db.collection("favorites")
            .add(favorites)
            .then((docRef) => console.log("Document written with ID: ", docRef.id))
            .catch((error) => console.error("Error adding document: ", error));
    }

})

document.getElementById('favorites3').addEventListener('click', () => {

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = document.getElementById(`h3Book3`).innerHTML

    let favorites = {
        userId: userId,
        bookName: bookName.slice(3),
        imgBook: document.getElementById(`imgBook3`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook3`).innerHTML,
        paragraph: document.getElementById(`pBook3`).innerHTML,
        amazonLink: document.getElementById(`amazon3`).innerHTML
    }

    if (userId != undefined) {
        db.collection("favorites")
            .add(favorites)
            .then((docRef) => console.log("Document written with ID: ", docRef.id))
            .catch((error) => console.error("Error adding document: ", error));
    }

})

document.getElementById('favorites4').addEventListener('click', () => {

    db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })

    let bookName = document.getElementById(`h3Book4`).innerHTML

    let favorites = {
        userId: userId,
        bookName: bookName.slice(3),
        imgBook: document.getElementById(`imgBook4`).innerHTML,
        weeksOnList: document.getElementById(`weeksBook4`).innerHTML,
        paragraph: document.getElementById(`pBook4`).innerHTML,
        amazonLink: document.getElementById(`amazon4`).innerHTML
    }


    if (userId != undefined) {
        db.collection("favorites")
            .add(favorites)
            .then((docRef) => console.log("Document written with ID: ", docRef.id))
            .catch((error) => console.error("Error adding document: ", error));
    }

})  

// FAVORITES VIEW
let favoriteNumber = 0

document.getElementById('favoriteView').addEventListener('click', () =>{

async function getData(){
    

    let arrBookNames = [];
    let arrPictures = [];
    let arrWeeks = [];
    let arrParagraph = [];
    let arrAmazon = [];


await db.collection("users").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (inputEmail == doc.data().email) {
                nickname = doc.data().nickname
                userId = doc.data().id
            }
        })
    })


await db.collection("favorites").get().then(querySnapshot => {
        querySnapshot.docs.map(doc => {
            if (userId = doc.data().userId) {
             arrAmazon.push(doc.data().amazonLink); 
             arrParagraph.push(doc.data().paragraph)  
             arrWeeks.push(doc.data().weeksOnList)
             arrPictures.push(doc.data().imgBook) 
             arrBookNames.push(doc.data().bookName) 
             
            }
            
        })
    })


    const books = [[0,4],[4,8],[8,12],[12,15], [15,18], [18,21], [21,24]]
    let changeBook = books[favoriteNumber]
    let bookPos1 = changeBook[0]
    let bookPos2 = changeBook[1]
    
    for (let i = bookPos1; i < bookPos2; i++) {
        document.getElementById(`h3Book${(i+1)-bookPos1}`).innerHTML = arrBookNames[i]
        document.getElementById(`imgBook${(i+1)-bookPos1}`).innerHTML = arrPictures[i] 
        document.getElementById(`weeksBook${(i+1)-bookPos1}`).innerHTML = "Weeks on list: " + arrWeeks[i]
        document.getElementById(`pBook${(i+1)-bookPos1}`).innerHTML = arrParagraph[i]
        document.getElementById(`amazon${(i+1)-bookPos1}`).innerHTML = `<a href='${arrAmazon[i]}' target="_blank">Link to Amazon</a>`
        document.getElementById(`favorites${(i+1)-bookPos1}`).innerHTML = `<p>Add to favorites</p>`      
        }
} 
getData()
    console.log(favoriteNumber);


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


    if (favoriteNumber!=4) {
        document.getElementById('nextButtonFavorites').classList.remove('hide')
    }
    if (favoriteNumber!=0) {
        document.getElementById('previousButtonFavorites').classList.remove('hide')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    

})

