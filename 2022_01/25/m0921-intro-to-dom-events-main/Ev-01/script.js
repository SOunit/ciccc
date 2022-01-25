const button = document.querySelector('#changeColor')
const container = document.querySelector('#container')

// button.click = function(){
//     container.style.backgroundColor = 'red'
// }


button.addEventListener('click', function(){
    container.style.backgroundColor = 'red'
})

container.addEventListener('click', function(){
    // container.style.display = 'none'
    container.classList.toggle('hide')
})
