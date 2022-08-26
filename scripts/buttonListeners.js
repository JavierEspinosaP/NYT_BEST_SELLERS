firebase.firestore();

document.getElementById('nextButton').addEventListener('click', () => {
    pageNumber++
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('hideButton')
        document.getElementById('previousButton').classList.add('showButton')
    }
    if (pageNumber == 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
        document.getElementById('list12').classList.remove('showButton')
        document.getElementById('list12').classList.add('hideButton')
    }
    changePage()
})

document.getElementById('previousButton').addEventListener('click', () => {
    pageNumber--
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('hideButton')
        document.getElementById('nextButton').classList.add('showButton')
        document.getElementById('list12').classList.remove('hideButton')
    }
    if (pageNumber == 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    changePage()
})


let buttonNumber;
let bookNumber = 0


document.getElementById('small2').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('signUpContainer').classList.remove('hide')
    document.getElementById('signUpContainer').classList.add('signUpContainer')
    document.getElementById('book1').classList.remove('book')
    document.getElementById('book1').classList.add('hide')
    document.getElementById('book2').classList.remove('book')
    document.getElementById('book2').classList.add('hide')
    document.getElementById('book3').classList.remove('book')
    document.getElementById('book3').classList.add('hide')
    document.getElementById('book4').classList.remove('book')
    document.getElementById('book4').classList.add('hide')
    document.getElementById('nextButtonBooks').classList.remove('showButton')
    document.getElementById('nextButtonBooks').classList.add('hide')
    document.getElementById('previousButtonBooks').classList.remove('showButton')
    document.getElementById('previousButtonBooks').classList.add('hide')
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('comeBackButton').classList.remove('showButton')

})


        

document.getElementById('nextButtonFavorites').addEventListener('click', () => {


    async function getData() {

        let arrBookNames = [];
        let arrPictures = [];
        let arrWeeks = [];
        let arrParagraph = [];
        let arrAmazon = [];



        favoriteNumber++


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

            if (favoriteNumber != 0) {
                document.getElementById('previousButtonFavorites').classList.remove('hide')
                document.getElementById('previousButtonFavorites').classList.add('showButton')
            }

            if(arrBookNames.length/4 == favoriteNumber) {
                document.getElementById('nextButtonFavorites').classList.remove('showButton')
                document.getElementById('nextButtonFavorites').classList.add('hide')
            }

           
            

        })
    } getData()





    changeFavoriteBooks()

})

document.getElementById('previousButtonFavorites').addEventListener('click', () => {

    favoriteNumber--

    async function getData() {

        let arrBookNames = [];
        let arrPictures = [];
        let arrWeeks = [];
        let arrParagraph = [];
        let arrAmazon = [];



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

            if (favoriteNumber == 0) {
                document.getElementById('previousButtonFavorites').classList.remove('showButton')
                document.getElementById('previousButtonFavorites').classList.add('hide')
                document.getElementById('nextButtonFavorites').classList.remove('hide')
                document.getElementById('nextButtonFavorites').classList.add('showButton')
            } 
            if(arrBookNames.length/4 != favoriteNumber) {
                document.getElementById('nextButtonFavorites').classList.remove('hide')
                document.getElementById('nextButtonFavorites').classList.add('showButton')
            }

        })
    } getData()


          

    changeFavoriteBooks()
    })


async function getBooks() {

    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listsNames[buttonNumber]}.json?api-key=${key.api_key}`)
    let data = await responselist.json()
    let ranking = data.results.books.map((ranking) => {
        return ranking.rank
    })



    ranking.map((arr) => {
        arrRanking.push(arr)
    })

    let booksNames = data.results.books.map((book) => {
        return book.title
    })

    booksNames.map((arr) => {
        arrBookNames.push(arr)
    })

    let picture = data.results.books.map((pic) => {
        return pic.book_image
    })

    picture.map((arr) => {
        arrPictures.push(arr)
    })

    let weeksOnList = data.results.books.map((weeks) => {
        return weeks.weeks_on_list
    })

    weeksOnList.map((arr) => {
        arrWeeks.push(arr)
    })

    let paragraph = data.results.books.map((p) => {
        return p.description
    })

    paragraph.map((arr) => {
        arrParagraph.push(arr)
    })

    let amazon = data.results.books.map((amazon) => {
        return amazon.amazon_product_url
    })

    amazon.map((arr) => {
        arrAmazon.push(arr)
    })



    const books = [[0, 4], [4, 8], [8, 12], [12, 15]]
    let changeBook = books[bookNumber]
    let bookPos1 = changeBook[0]
    let bookPos2 = changeBook[1]

    for (let i = bookPos1; i < bookPos2; i++) {
        document.getElementById(`h3Book${(i + 1) - bookPos1}`).innerHTML = "#" + ranking[i] + " " + booksNames[i]
        document.getElementById(`imgBook${(i + 1) - bookPos1}`).innerHTML = `<img src="${picture[i]}" width="220" height="333">`
        document.getElementById(`weeksBook${(i + 1) - bookPos1}`).innerHTML = "Weeks on list: " + weeksOnList[i]
        document.getElementById(`pBook${(i + 1) - bookPos1}`).innerHTML = paragraph[i]
        document.getElementById(`amazon${(i + 1) - bookPos1}`).innerHTML = `<a href='${amazon[i]}' target="_blank">Link to Amazon</a>`
        document.getElementById(`favorites${(i + 1) - bookPos1}`).innerHTML = `<p>Add to favorites</p>`


    }



}

function changeBookPages() {

    const books = [[0, 4], [4, 8], [8, 12], [12, 15]]

    let changeBook = books[bookNumber]
    let bookPos1 = changeBook[0]
    let bookPos2 = changeBook[1]

    for (let i = bookPos1; i < bookPos2; i++) {

        document.getElementById(`h3Book${(i + 1) - bookPos1}`).innerHTML = "#" + arrRanking[i] + " " + arrBookNames[i]
        document.getElementById(`imgBook${(i + 1) - bookPos1}`).innerHTML = `<img src="${arrPictures[i]}" width="220" height="333">`
        document.getElementById(`weeksBook${(i + 1) - bookPos1}`).innerHTML = "Weeks on list: " + arrWeeks[i]
        document.getElementById(`pBook${(i + 1) - bookPos1}`).innerHTML = arrParagraph[i]
        document.getElementById(`amazon${(i + 1) - bookPos1}`).innerHTML = `<a href='${arrAmazon[i]}' target="_blank">Link a Amazon</a>`
        document.getElementById(`favorites${(i + 1) - bookPos1}`).innerHTML = `<p>Add to your favorites</p>`
    }
}

function changeFavoriteBooks() {



    async function getData() {


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


        const books = [[0, 4], [4, 8], [8, 12], [12, 15], [15,18], [18,21], [21,24]]
        let changeBook = books[favoriteNumber]
        let bookPos1 = changeBook[0]
        let bookPos2 = changeBook[1]

        for (let i = bookPos1; i < bookPos2; i++) {
            document.getElementById(`h3Book${(i + 1) - bookPos1}`).innerHTML = arrBookNames[i]
            document.getElementById(`imgBook${(i + 1) - bookPos1}`).innerHTML = arrPictures[i]
            document.getElementById(`weeksBook${(i + 1) - bookPos1}`).innerHTML = "Weeks on list: " + arrWeeks[i]
            document.getElementById(`pBook${(i + 1) - bookPos1}`).innerHTML = arrParagraph[i]
            document.getElementById(`amazon${(i + 1) - bookPos1}`).innerHTML = `<a href='${arrAmazon[i]}' target="_blank">Link to Amazon</a>`
            document.getElementById(`favorites${(i + 1) - bookPos1}`).innerHTML = `<p>Add to favorites</p>`
        }
    }
    getData()
}

document.getElementById('nextButtonBooks').addEventListener('click', () => {
    bookNumber++
    if (bookNumber != 0) {
        document.getElementById('previousButtonBooks').classList.remove('hide')
        document.getElementById('previousButtonBooks').classList.add('showButton')
    }
    if (bookNumber == 3) {
        document.getElementById('nextButtonBooks').classList.remove('showButton')
        document.getElementById('nextButtonBooks').classList.add('hide')
        document.getElementById('book4').classList.remove('book')
        document.getElementById('book4').classList.add('hide')
    }
    if (bookNumber == 2 && arrBookNames.length < 12) {
        document.getElementById('nextButtonBooks').classList.remove('showButton')
        document.getElementById('nextButtonBooks').classList.add('hide')
        document.getElementById('book3').classList.remove('book')
        document.getElementById('book3').classList.add('hide')
        document.getElementById('book4').classList.remove('book')
        document.getElementById('book4').classList.add('hide')
    }
    if (bookNumber == 1 && arrBookNames.length < 8) {
        document.getElementById('nextButtonBooks').classList.remove('showButton')
        document.getElementById('nextButtonBooks').classList.add('hide')
        document.getElementById('book2').classList.remove('book')
        document.getElementById('book2').classList.add('hide')
        document.getElementById('book3').classList.remove('book')
        document.getElementById('book3').classList.add('hide')
        document.getElementById('book4').classList.remove('book')
        document.getElementById('book4').classList.add('hide')
    }
    console.log(bookNumber);

    changeBookPages()

})

document.getElementById('previousButtonBooks').addEventListener('click', () => {
    bookNumber--
    if (bookNumber != 3) {
        document.getElementById('nextButtonBooks').classList.remove('hide')
        document.getElementById('nextButtonBooks').classList.add('showButton')
        document.getElementById('book4').classList.remove('hide')
        document.getElementById('book4').classList.add('book')
    }
    if (bookNumber == 0) {
        document.getElementById('previousButtonBooks').classList.remove('showButton')
        document.getElementById('previousButtonBooks').classList.add('hide')
    }
    if (bookNumber != 2 && arrBookNames.length < 12) {
        document.getElementById('book3').classList.remove('hide')
        document.getElementById('book3').classList.add('book')
        document.getElementById('book4').classList.remove('hide')
        document.getElementById('book4').classList.add('book')
    }
    if (bookNumber != 1 && arrBookNames.length < 8) {
        document.getElementById('book2').classList.remove('hide')
        document.getElementById('book2').classList.add('book')
        document.getElementById('book3').classList.remove('hide')
        document.getElementById('book3').classList.add('book')
        document.getElementById('book4').classList.remove('hide')
        document.getElementById('book4').classList.add('book')
    }
    changeBookPages()
})

document.getElementById('list1Button').addEventListener('click', () => {


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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = position1
    getBooks()


})
document.getElementById('list2Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 1)

    getBooks()
})
document.getElementById('list3Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 2)

    getBooks()

})
document.getElementById('list4Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 3)

    getBooks()
})
document.getElementById('list5Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 4)

    getBooks()
})
document.getElementById('list6Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 5)

    getBooks()
})
document.getElementById('list7Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 6)

    getBooks()
})
document.getElementById('list8Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 7)

    getBooks()
    console.log(arrWeeks);
})
document.getElementById('list9Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 8)

    getBooks()
})
document.getElementById('list10Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 9)

    getBooks()
})
document.getElementById('list11Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = (position1 + 10)

    getBooks()
})
document.getElementById('list12Button').addEventListener('click', () => {
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
    if (pageNumber != 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
    }
    if (pageNumber != 0) {
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    document.getElementById('comeBackButton').classList.remove('hide')
    document.getElementById('nextButtonBooks').classList.remove('hide')

    buttonNumber = position2

    getBooks()
})
document.getElementById('comeBackButton').addEventListener('click', () => {
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
})



