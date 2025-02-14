/*
    * - Cache at least one element using selectElementById. (Completed)
    * - Cache at least one element using querySelector or querySelectorAll. (Completed)
    * - Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.). (Completed)
    * - Iterate over a collection of elements to accomplish some task. (Completed)
    * - Create at least one element using createElement. (Completed)
    * - Use appendChild and/or prepend to add new elements to the DOM. (Completed)
    * - Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. (Completed) 
    * - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    * - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
    * - Modify at least one attribute of an element in response to user interaction.
    TODO - Register at least two different event listeners and create the associated event handler functions.
    * - Use at least two Browser Object Model (BOM) properties or methods. (Completed)
    TODO - Include at least one form and/or input with HTML attribute validation.
    TODO - Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
*/

const header = document.getElementById('dom')
const synopsis = document.querySelector('div.synopsis')
const mainInfo = document.querySelector('div.mainInfo')
const conclusion = document.querySelector('div.conclusion')

// * Templated Content
const createCard = (title, content) => {
    if (typeof title !== 'string' || typeof content !== 'string') {
        window.alert('Title and content must be in string format')
    }

    const card = document.createDocumentFragment()
    const cardDiv = card.appendChild(document.createElement('div'))
    const headerTitle = cardDiv.appendChild(document.createElement('h4'))
    const cardInfo = cardDiv.appendChild(document.createElement('p'))

    headerTitle.textContent = title
    headerTitle.style = 'text-align: center'
    
    // ! Do I need to make seperate classes to apply more than 1 style to different elements?
    cardDiv.style = 'border: 3px dashed green;'
    // cardDiv.style = 'padding-top: 0px'

    cardInfo.textContent = content
    return card
}

// * Header
header.style = 'text-align: center'

const h1 = document.createElement('h1')
h1.textContent = 'The Document Object Model'
header.appendChild(h1) 

const h4 = document.createElement('h4')
h4.innerHTML = 'This page <em>showcases</em> my ability to manipulate the DOM'
header.appendChild(h4)

// const red = document.createAttribute('style')
// red.value = "color:red"
function turnRed() {
    this.style = 'color: red'
    this.textContent += '... now in red!'
}

h4.addEventListener("click", turnRed)


// * Synopsis
synopsis.style = 'text-align: center'
const form = document.getElementById('signup')
const br = document.createElement('br')


// email
const labelEmail = document.createElement('label')
form.appendChild(labelEmail)
labelEmail.for = 'email'
labelEmail.textContent = 'Email: '

const email = document.createElement('input')
email.type = 'email'
email.name = 'email'
email.style = 'margin-right: 5px'
form.appendChild(email)

// password
const labelPassword = document.createElement('label')
form.appendChild(labelPassword)
labelPassword.for = 'password'
labelPassword.textContent = 'Password: '
labelPassword.style = 'margin-left: 5px'

const password = document.createElement('input')
password.type = 'password'
form.appendChild(password)

// radio checklist
form.appendChild(br)
const radio = document.createElement('input')
radio.type = 'radio'
form.appendChild(radio)

// * Main Info
const list = document.getElementById('task')
const newItem = document.createElement('li')
newItem.textContent = 'Specially added list item! Should be removed later!'

const listItems = document.getElementsByTagName('li')
list.insertBefore(newItem, list.firstChild)
for (item of listItems) {
    item.style = 'color: blue'
    if (
        item.textContent === 'Not blue!'
    ) {
        item.style = 'color: green'
    }
}

list.removeChild(list.firstChild)

const img = document.createElement('img')
img.src = 'https://th.bing.com/th/id/OIP.4teWOgtnfYNSbtHmMtRvuwHaFj?rs=1&pid=ImgDetMain'

function changeImg() {
    if (this.src === 'https://th.bing.com/th/id/OIP.4teWOgtnfYNSbtHmMtRvuwHaFj?rs=1&pid=ImgDetMain') {
        this.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png'
    } else {
        this.src = 'https://th.bing.com/th/id/OIP.4teWOgtnfYNSbtHmMtRvuwHaFj?rs=1&pid=ImgDetMain'
    }
}

img.addEventListener('click', changeImg)

mainInfo.prepend(img)

// * Conclusive Info
// let conclusionTitle = window.prompt('Please input a title for the conclusion card')
// let conclusionContent = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
// conclusion.appendChild(createCard(conclusionTitle, conclusionContent))






