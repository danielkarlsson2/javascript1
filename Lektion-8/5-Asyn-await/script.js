// const getData = async () => {

// }

// const test = getData()
// console.log(test)


// const getJson = async (url) => {
//     const res = await fetch(url)   

//     if(res.status !== 200) {
//         throw new Error('Can\'t fetch the data')
//     }
//     const data = await res.json()
//     console.log(data)
    

//     // console.log(res)
//     // console.log(data)
//     // return data
     
// }

// getJson('user.json')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// const getJson = async (url) => {
//     try {
//         // throw new Error('hej')
//         const res = await fetch(url)
//         const data = await res.json()
//         console.log(data)
//     }
//     catch(err) {
//         console.log(err)
//     }
// }


// getJson('user.json')
//     .catch(err => console.log(err.message))


const output = document.querySelector('#output')

let todos = []

const getTodos = async () => {
    const res = await fetch('todos.json')
    const data = await res.json()
 
    return data
    // data.forEach(todo => {
    //     output.insertAdjacentElement('beforeend', `<p>${todo.title}</p>`)
    // });

}

getTodos()
    .then(todos => {

        todos.forEach(todo => {
            output.insertAdjacentElement('beforeend', `<p>${todo.title}</p>`)
        });
    })