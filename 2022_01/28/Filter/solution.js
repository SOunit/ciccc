const API_URL = 'https://randomuser.me/api?results=50'
const result = document.getElementById('result')
const filter = document.getElementById('filter')

async function getData(){
    const response = await fetch(API_URL)
    const { results } = await response.json()

    //clear result
    result.innerHTML = ''

}


getData()