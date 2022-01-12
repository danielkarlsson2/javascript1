// const doSomething = (value) => {
//     return new Promise((resolve, reject) => {
//         if(value) 
//             resolve('success data')
//         else 
//         reject('error message')
//     })
// }

// // console.log(doSomething(true))
// doSomething(true)
// .then(data => console.log(data))
// .catch(err => console.log(err))




const getRequest = endpoint => {

    return new Promise((resolve, reject) => {

    const http = new XMLHttpRequest();
    // console.log(http);
    http.addEventListener('readystatechange', () => {
        
        if(http.status === 200 && http.readyState === 4) {
            const data = JSON.parse(http.responseText)
            // console.log(http.responseText)
            // cb(undefined, data);
            resolve(data)
        }
        else if(http.readyState === 4) {
            // console.log('Could not get the data')
            // cb('Could not get the data', undefined)
            reject('could not get the data')
        }
    })
    
    http.open('GET', endpoint);
    http.send();

    })
}


getRequest('user.json')
    .then(data => {
        console.log(data)
        return getRequest('todos.json')        
    })
    .then(data => {
        console.log(data)
        return getRequest('todos2.json')
    })
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
    })