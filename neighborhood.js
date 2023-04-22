
let restaurantBtn = document.querySelector("button")



var data = document.getElementById('.restaurant_item')

function randomRestaurant() {
    let array = ['1','2','3','4','5']
    const randomElement = array[Math.floor(Math.random() * array.length)];
    restaurantBtn.innerHTML = randomElement

    
}

restaurantBtn.addEventListener('click',randomRestaurant)