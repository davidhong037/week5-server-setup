const submitParams = document.getElementById('submitParams')
const submitQuery = document.getElementById('submitQuery')

const paramsInput = document.getElementById('params-input')
const queryInput = document.getElementById('query-input')

const responseSection = document.getElementsByClassName('response')[0]

submitParams.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/users/${paramsInput.value}`)
        .then(res => addToResponse([res.data]))
})

submitQuery.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/users?name=${queryInput.value}`)
        .then(res => addToResponse(res.data))
})

function addToResponse(arr){
    responseSection.innerHTML = null;

    if (arr.length === 0){
        const p = document.createElement('p')
        const text = document.createTextNode('No results!')
        p.appendChild(text)
        
        responseSection.appendChild(p)
    } else {
        arr.forEach(name => {
            const p = document.createElement('p')
            const text = document.createTextNode(name)
            p.appendChild(text)

            responseSection.appendChild(p)
        })
    }
}

