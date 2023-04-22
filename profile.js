let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener('click',color)
placeBtn.addEventListener('click',place)
ritualBtn.addEventListener('click',ritual)

function color () {
    alert("Pink")
}

function place () {
    alert("Mall")
}

function ritual () {
    alert("None")
}