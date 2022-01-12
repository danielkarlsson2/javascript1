// GET, POST, PUT, PATCH, DELETE, 

/* 
    GET     -   Hämtar data, okrypterat
    POST    -   Skriva data, krypterad i en body
    PUT     -   Uppdaterar HELA ett objekt
    PATCH   -   Uppdaterar delar av eller hela ett objekt
    DELETE  -   Tar bort ett objekt
*/

const getRequest = (endpoint, cb) => {

    const http = new XMLHttpRequest();
    // console.log(http);
    http.addEventListener('readystatechange', () => {
        
        if(http.status === 200 && http.readyState === 4) {
            const data = JSON.parse(http.responseText)
            // console.log(http.responseText)
            cb(undefined, data);
        }
        else if(http.readyState === 4) {
            // console.log('Could not get the data')
            cb('Could not get the data', undefined)
        }
    })
    
    http.open('GET', endpoint);
    http.send();
}






// getRequest('user.json', (err, data) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     document.body.innerText = data.firstName
//     console.log(data)
// })


getRequest('user.json', (err, data) => {
    console.log(data)
    getRequest('todos.json', (err, data) => {
        console.log(data)
        getRequest('todos2.json', (err, data) => {
            console.log(data)
        })
    })
})