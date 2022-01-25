const form = document.querySelector('#signup-form')

const ccInput = document.querySelector('#cc')
const termsCb = document.querySelector('#tnc')
const fruitsSelect = document.querySelector('#fruits')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    console.log('cc: ', ccInput.value);
    console.log('tnc: ', termsCb.value);
    console.log('fruits: ', fruitsSelect.value);


    ///send data to db~
    //append data to page
})