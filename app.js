/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { buyItem, checkAuth, createItem, fetchAllItems } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

/* Get DOM Elements */
const itemForm = document.getElementById('add-item');
const shopList = document.getElementById('shop-list');
const deleteBtn = document.getElementById('delete-button');

/* State */

/* Events */

/* Display Functions */

checkAuth();

async function displayItems() {
    shopList.innerHTML = '';

    const items = await fetchAllItems();

    if (items) {
        for (let item of items) {
            const itemEl = renderItem(item);
            itemEl.addEventListener('click', async () => {
                await buyItem(item);
                await displayItems();
            });
            shopList.append(itemEl);
        }
    }
}

window.addEventListener('load', async () => {
    await displayItems();
});


itemForm.addEventListener('submit', async (i) => {
    i.preventDefault();

    const data = new FormData(itemForm);
    const item = data.get('item');
    itemForm.reset();

    const newItem = await createItem(item);
    if (newItem) {
        displayItems();
    } else {
        shopList.textContent = 'Error adding item';
    }
});