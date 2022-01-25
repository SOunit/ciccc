const button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log('Clicked')
})
button.addEventListener('mouseover', function(){
    console.log('Mouse Over')
})
button.addEventListener('mouseout', function(){
    console.log('Mouse Out')
})
button.addEventListener('mousedown', function(){
    console.log('Mouse Down')
})

window.addEventListener('scroll', function(){
    console.log('scrolling.........boring.....');
})