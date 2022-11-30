export function renderItem(item) {
    // create a div and a p tag
    const itemContainer = document.createElement('div');
    const itemEl = document.createElement('p');

    if (item.bought) {
        itemContainer.classList.add('bought');
    } else {
        itemContainer.classList.add('not-bought');
    }
    // add the 'item' css class no matter what
    itemEl.classList.add('item');
    // put the item's text into the p tag
    itemEl.textContent = item.item;
    // append stuff
    itemContainer.append(item);

    return itemContainer;
}