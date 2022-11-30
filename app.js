/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchAllItems } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

/* Get DOM Elements */
const form = document.getElementById('add-item');
const shopList = document.getElementById('shop-list');
const deleteBtn = document.getElementById('delete-button');

/* State */

/* Events */

/* Display Functions */


async function displayItems() {
    shopList.innerHTML = '';

    const items = await fetchAllItems();
    const handleBought = items.bought;

    if (items) {
        for (let item of items) {
            const itemEl = renderItem(item, handleBought);
            itemEl.addEventListener('click', async () => {
                console.log('clicked!');
            });
        }
    }
}