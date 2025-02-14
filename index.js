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

// * Synopsis

// * Main Info

// * Conclusive Info


const p = document.createElement('p')
p.textContent = 'lorem ipsum dolor'

synopsis.appendChild(p)



