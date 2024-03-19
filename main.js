"use strict";

const list = document.querySelectorAll('ul.photo-list li');
const selectAll = document.querySelector('button#selectAll');
const deselectAll = document.querySelector('button#deselectAll');
const total = document.querySelector('#total');

function updateTotal() {
    const count = document.querySelectorAll('ul.photo-list li.selected').length;
    total.textContent = count;
    console.log(count);
}

function selectAllItems() {
    list.forEach(li => {
        li.classList.add("selected");
    });
    updateTotal();
}

function deselectAllItems() {
    list.forEach(li => {
        li.classList.remove("selected");
    });
    updateTotal();
}

function toggleSelectedItem(li) {
    li.classList.toggle("selected");
    updateTotal();
    console.log(li);
}

selectAll.addEventListener('click', selectAllItems);
deselectAll.addEventListener('click', deselectAllItems);
list.forEach(li => {
    li.addEventListener('click', () => toggleSelectedItem(li));
});
