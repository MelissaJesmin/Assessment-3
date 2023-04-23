
let restaurantBtn = document.querySelector("button")



var data = document.getElementById('.restaurant_item')

function randomRestaurant() {
    let array = ["Salvino's Restaurant","Panda Express","McDonalds","Buffalo Wild Wings","Hudson Hound"]
    const randomElement = array[Math.floor(Math.random() * array.length)];
    restaurantBtn.innerHTML = randomElement

    
}

restaurantBtn.addEventListener('click',randomRestaurant)