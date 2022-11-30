export function renderItem(item) {
    // create a div and a p tag
    const itemEl = document.createElement('li');

    if (item.bought) {
        itemEl.classList.add('bought');
    } else {
        itemEl.classList.add('not-bought');
    }
    // put the item's text into the p tag
    itemEl.textContent = item.item;

    return itemEl;
}