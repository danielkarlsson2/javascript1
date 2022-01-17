const txtBtn = document.querySelector('#txtBtn');
const textOutput = document.querySelector('#text-output');
const jsonBtn = document.querySelector('#jsonBtn');
const jsonOutput = document.querySelector('#json-output');

const getText = () => {

    txtBtn.addEventListener('click', () => {

        fetch('text.txt')
            .then(res => {
            if(res.status !== 200) {
                throw new Error('kan inte hämta texten')
            }        
            return res.text()
            })
            .then(data => {
                textOutput.innerText = data
            })
            .catch(err => {
                textOutput.classList.add('error')
                textOutput.innerText = err
            })
    })
}

txtBtn

