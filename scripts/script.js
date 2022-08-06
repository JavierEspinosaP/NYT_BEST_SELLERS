

async function getLists () {
    let responselist = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${key.api_key}`)
    let data = await responselist.json()
    let lists = data.results.map((list) => {
        return list.list_name_encoded
    })
    let responseOneList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${lists[0]}.json?api-key=ccKqbSWo3G6EUHxA4MQOpZJOVTa8P3FL`)
    let dataOneList = await responseOneList.json()
    let h3List = dataOneList.results.display_name
    //Para sacar el "Newest" Iterar "books" y pushear el valor "weeks_on_list" y "title" en un array de objetos, ordenarlo de mayor a menor y luego
    //extraer el valor "title" para pintarlo en el DOM, para el "Oldest" lo contrario.
    console.log(h3List);

}

getLists ()

