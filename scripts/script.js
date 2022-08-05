
async function getBook () {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key.api_key}`)
    let data = await response.json()
    let image = data.results.books[0].book_image
    console.log(image);
    // document.body.innerHTML = `<img src="${image}>`
    // let img_response = await fetch(image)
    // let img_data = await img_response
    let div = document.createElement('section');
    document.body.appendChild(div);
        div.innerHTML=`
        <img src="${image}"<br>
`
}
getBook()