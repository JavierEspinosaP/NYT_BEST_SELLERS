

async function getLists() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    let lists = data.results.map((list) => {
        return list.list_name_encoded
    })
    console.log(lists);

    for (let i = 0; i < 3; i++) {


        let responseOneList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lists[i]}.json?api-key=ccKqbSWo3G6EUHxA4MQOpZJOVTa8P3FL`)
        let dataOneList = await responseOneList.json()



            let num = dataOneList.results.normal_list_ends_at

            let arrList = []

            for (let i = 0; i < num; i++) {
                arrList.push({
                    title: dataOneList.results.books[i].title,
                    weeks_on_list: dataOneList.results.books[i].weeks_on_list
                }
                )
            }
            function sortBooks() {
                arrList.sort((a, b) => {
                    return a.weeks_on_list - b.weeks_on_list
                })
            }
            sortBooks()

            let updated = dataOneList.results.updated
            let h3List = dataOneList.results.display_name

            if (updated == null) {
                updated = "Undefined"
            }

            document.getElementById(`h3List${(i + 1)}`).innerHTML = h3List;
            document.getElementById(`list${i + 1}Oldest`).innerHTML = "Oldest: " + arrList[(num - 1)].title;
            document.getElementById(`list${i + 1}Newest`).innerHTML = "Newest: " + arrList[0].title;
            document.getElementById(`list${i + 1}Updated`).innerHTML = "Updated: " + updated
        }


    }

getLists()

setTimeout(async function getLists2() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    let lists = data.results.map((list) => {
        return list.list_name_encoded
    })
    console.log(lists);

    for (let i = 4; i < 8; i++) {


        let responseOneList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lists[i]}.json?api-key=ccKqbSWo3G6EUHxA4MQOpZJOVTa8P3FL`)
        let dataOneList = await responseOneList.json()



            let num = dataOneList.results.normal_list_ends_at

            let arrList = []

            for (let i = 0; i < num; i++) {
                arrList.push({
                    title: dataOneList.results.books[i].title,
                    weeks_on_list: dataOneList.results.books[i].weeks_on_list
                }
                )
            }
            function sortBooks() {
                arrList.sort((a, b) => {
                    return a.weeks_on_list - b.weeks_on_list
                })
            }
            sortBooks()

            let updated = dataOneList.results.updated
            let h3List = dataOneList.results.display_name

            if (updated == null) {
                updated = "Undefined"
            }

            document.getElementById(`h3List${(i + 1)}`).innerHTML = h3List;
            document.getElementById(`list${i + 1}Oldest`).innerHTML = "Oldest: " + arrList[(num - 1)].title;
            document.getElementById(`list${i + 1}Newest`).innerHTML = "Newest: " + arrList[0].title;
            document.getElementById(`list${i + 1}Updated`).innerHTML = "Updated: " + updated
        }


    }, 4000)

setTimeout(async function getLists3() {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    let lists = data.results.map((list) => {
        return list.list_name_encoded
    })
    console.log(lists);

    for (let i = 8; i < 11; i++) {


        let responseOneList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lists[i]}.json?api-key=ccKqbSWo3G6EUHxA4MQOpZJOVTa8P3FL`)
        let dataOneList = await responseOneList.json()



            let num = dataOneList.results.normal_list_ends_at

            let arrList = []

            for (let i = 0; i < num; i++) {
                arrList.push({
                    title: dataOneList.results.books[i].title,
                    weeks_on_list: dataOneList.results.books[i].weeks_on_list
                }
                )
            }
            function sortBooks() {
                arrList.sort((a, b) => {
                    return a.weeks_on_list - b.weeks_on_list
                })
            }
            sortBooks()

            let updated = dataOneList.results.updated
            let h3List = dataOneList.results.display_name

            if (updated == null) {
                updated = "Undefined"
            }

            document.getElementById(`h3List${(i + 1)}`).innerHTML = h3List;
            document.getElementById(`list${i + 1}Oldest`).innerHTML = "Oldest: " + arrList[(num - 1)].title;
            document.getElementById(`list${i + 1}Newest`).innerHTML = "Newest: " + arrList[0].title;
            document.getElementById(`list${i + 1}Updated`).innerHTML = "Updated: " + updated
        }


    }
, 9000)


