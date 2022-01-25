const input = document.querySelector('#username')

input.addEventListener('keydown', function(){
    // console.log('KEY DOWN');
})
input.addEventListener('keyup', function(){
    // console.log('KEY UP');
})
input.addEventListener('keypress', function(){
    console.log('KEY PRESS');
})

const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        if(!this.value) return
        
        const newItemText = this.value
        const newLI = document.createElement('li')
        newLI.innerText = newItemText
        itemsUL.appendChild(newLI)
        this.value = ''
    }
})