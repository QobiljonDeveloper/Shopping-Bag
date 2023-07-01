import { data } from './data.js';
import {TelegramAPI} from './scripts/telegramAPI.js';

const cards = document.querySelector('.product-cards');
const form = document.querySelector('#forma');
let counter = document.querySelector('.counter');
const headerItem = document.querySelectorAll('.header-item');
const sidebar = document.querySelector('.sidebar');
const bagExit = document.querySelector('svg');
const cart = document.querySelector('#form-submit-to-telegram');
const exit_form = document.querySelector("#exit-form")
const swiperWrapper = document.querySelector('.swiper-wrapper');

let count = 0

counter.innerHTML = count


// shopping bag 
  
// Example items
const items = [

];

// Calculate the total price
function calculateTotal() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = '$' + totalPrice;
}

// Update the shopping bag sidebar
function updateSidebar() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'item';

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('span');
        itemPrice.textContent = '$' + item.price;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeItem(item);
        });

        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        listItem.appendChild(removeButton);

        itemList.appendChild(listItem);
    });

    calculateTotal();
}

// Remove an item from the list
function removeItem(item) {
    const itemIndex = items.indexOf(item);
    if (itemIndex > -1) {
        items.splice(itemIndex, 1);
        updateSidebar();
    }
}

// Initialize the shopping bag sidebar
function initSidebar() {
    updateSidebar();
}

// Run initialization when the page loads
window.addEventListener('DOMContentLoaded', initSidebar);
window.addEventListener('DOMContentLoaded', updateSidebar);


const product = data().map(function (product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-card-body text-light">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-outline-warning button">Add to Cart</button>
        </div>
        `
    return cards.appendChild(card);
})

var button = document.querySelectorAll('.button');

function modal(width, height, background, display = 'none', component = false) {
    const modal = document.querySelector('.modal');

    modal.style.width = `${width}`
    modal.style.height = `${height}`
    modal.style.background = `${background}`
    modal.style.display = `${display}`

    
    if (component) {
        cart.classList.remove('dnone')
        cart.classList.add('.d-flex')
        modal.append(cart)
    }

    (display === true) ? 'flex !important' : 'none'
}


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        count++
        counter.innerHTML = count
        const a = data().filter((data) => {
            return data
        })

        if (a[i]) {
            items.push(a[i])
            console.log('iwladi')
        }
        console.log(a[i])
        console.log(items)
        updateSidebar()
    });
    form.style.display = 'flex !important';
}

headerItem[0].addEventListener('click', () => {
    const totalBlock = document.querySelector('.total-block');

    sidebar.style.right = '0px';
    totalBlock.style.display = 'flex';
    sidebar.style.display = 'block';
})


bagExit.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

const sale = document.querySelector('#sale');

sale.addEventListener('click', () => {
    modal('100%', '100%', 'rgba(0, 0, 0, 0.5)', 'flex', true);
})

exit_form.addEventListener('click', () => {
  modal('100%', '100%', 'rgba(0, 0, 0, 0.5)', 'none', false);
})

const rating = data().filter(data => data.rating > 3)

rating.map(data => {
    console.log(data)
    const card = document.createElement('div');
    card.classList.add('swiper-slide');
    card.innerHTML = `
        <img src="${data.img}" alt="${data.name}">
    `
    swiperWrapper.appendChild(card)    
})
console.log(rating)