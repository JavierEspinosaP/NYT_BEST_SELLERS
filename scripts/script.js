

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
    console.log(listsNames);
    console.log(listsOlder);
    console.log(listsNewer);

    let updated = data.results.map((list) => {
        return list.updated
    })


    for (let i = 0; i < 12; i++) {
        setTimeout(()=>{
        document.getElementById(`h3List${(i + 1)}`).innerHTML = listsNames[i];
        document.getElementById(`list${i + 1}Oldest`).innerHTML = "Oldest: " + listsOlder[i];
        document.getElementById(`list${i + 1}Newest`).innerHTML = "Newest: " + listsNewer[i];
        document.getElementById(`list${i + 1}Updated`).innerHTML = "Updated: " + updated[i]
        }, 1000)
    }


    // for (let i = 0; i < 3; i++) {


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


    //     }


}

getLists()




