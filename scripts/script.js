

let pageNumber = 0

async function getLists() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    let listsNames = data.results.map((list) => {
        return list.list_name_encoded
    })
    let listsOlder = data.results.map((list) => {
        return list.oldest_published_date
    })
    let listsNewer = data.results.map((list) => {
        return list.newest_published_date
    })

    let updated = data.results.map((list) => {
        return list.updated
    })

    //constante para paginacion, hay que pensar como implementarlo con el boton de next y para que aparezca un "previous"

    const pages = [[0, 12],[12, 24],[24, 36],[36, 48],[48, 59]]

    
    let changePage = pages[pageNumber]


    let position1 = changePage[0]
    let position2 = changePage[1]


   

    for (let i = position1; i < position2; i++) {
 
        document.getElementById(`h3List${(i+1)-position1}`).innerHTML = listsNames[i];
        document.getElementById(`list${(i+1)-position1}Oldest`).innerHTML = "Oldest: " + listsOlder[i];
        document.getElementById(`list${(i+1)-position1}Newest`).innerHTML = "Newest: " + listsNewer[i];
        document.getElementById(`list${(i+1)-position1}Updated`).innerHTML = "Updated: " + updated[i]
        
    }

{    // for (let i = 0; i < 3; i++) {


    //     let responseOneList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lists[i]}.json?api-key=ccKqbSWo3G6EUHxA4MQOpZJOVTa8P3FL`)
    //     let dataOneList = await responseOneList.json()



    //         let num = dataOneList.results.normal_list_ends_at

    //         let arrList = []

    //         for (let i = 0; i < num; i++) {
    //             arrList.push({
    //                 title: dataOneList.results.books[i].title,
    //                 weeks_on_list: dataOneList.results.books[i].weeks_on_list
    //             }
    //             )
    //         }
    //         function sortBooks() {
    //             arrList.sort((a, b) => {
    //                 return a.weeks_on_list - b.weeks_on_list
    //             })
    //         }
    //         sortBooks()

    //         let updated = dataOneList.results.updated
    //         let h3List = dataOneList.results.display_name

    //         if (updated == null) {
    //             updated = "Undefined"
    //         }


    //     }}



}

}

getLists()


document.getElementById('nextButton').addEventListener('click', ()=> {
    pageNumber++
    console.log(pageNumber);
    if (pageNumber!=0) {
        document.getElementById('previousButton').classList.remove('hideButton')
        document.getElementById('previousButton').classList.add('showButton')
    }
    if (pageNumber == 4) {
        document.getElementById('nextButton').classList.remove('showButton')
        document.getElementById('nextButton').classList.add('hideButton')
        document.getElementById('list12').classList.remove('showButton')
        document.getElementById('list12').classList.add('hideButton')
    }
    getLists()
})

document.getElementById('previousButton').addEventListener('click', ()=> {
    pageNumber--
    if (pageNumber!=4) {
        document.getElementById('nextButton').classList.remove('hideButton')
        document.getElementById('nextButton').classList.add('showButton')
        document.getElementById('list12').classList.remove('hideButton')
        document.getElementById('list12').classList.add('showButton')
    }
    if (pageNumber == 0){
        document.getElementById('previousButton').classList.remove('showButton')
        document.getElementById('previousButton').classList.add('hideButton')
    }
    getLists()
})