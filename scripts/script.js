
let pageNumber = 0

let listsNames;
let position1;
let position2;

async function getLists() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    listsNames = data.results.map((list) => {
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

    const pages = [[0, 12],[12, 24],[24, 36],[36, 48],[48, 59]]

    let changePage = pages[pageNumber]

    position1 = changePage[0]
    position2 = changePage[1]

    for (let i = position1; i < position2; i++) {
        document.getElementById(`h3List${(i+1)-position1}`).innerHTML = listsNames[i];
        document.getElementById(`list${(i+1)-position1}Oldest`).innerHTML = "Oldest: " + listsOlder[i];
        document.getElementById(`list${(i+1)-position1}Newest`).innerHTML = "Newest: " + listsNewer[i];
        document.getElementById(`list${(i+1)-position1}Updated`).innerHTML = "Updated: " + updated[i]  
    }
}

getLists()

