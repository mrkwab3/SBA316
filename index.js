const header = document.getElementById('dom')
const synopsis = document.querySelector('div.synopsis')
const mainInfo = document.querySelector('div.mainInfo')
const conclusion = document.querySelector('div.conclusion')

// * Header
const h1 = document.createElement('h1')
h1.textContent = 'The Document Object Model'
header.appendChild(h1) 

const h4 = document.createElement('h4')
h4.innerHTML = 'This page <em>showcases</em> my ability to manipulate the DOM'
header.appendChild(h4)

const nowRed = (item) => {
    item.style.color = 'red'
}

h4.addEventListener('click', nowRed('h4'))



// * Synopsis

// * Main Info
const list = document.getElementById('task')
let item1 = list.firstChild
let item2 = list.nextSibling
console.log(item1, item2)

// * Conclusive Info






