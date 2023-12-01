const input = document.querySelector('.enterItem');
const cta = document.querySelector('.cta');
const list = document.querySelector('.list');

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        addItems();
    }
})

cta.addEventListener('click', addItems);

function addItems() {
    const item = document.createElement('li');
    item.innerText = input.value;
    if (input.value.length === 0) {
        return false;
    }
    item.classList.add('addedItem');
    list.appendChild(item);
    input.value = '';
    item.addEventListener('click', () => {
    item.classList.toggle('doneItem');
    })
    item.addEventListener('dblclick', () => {
        list.removeChild(item);
    })
}