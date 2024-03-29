const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html
}

addForm.addEventListener('submit', evt => {
    
    evt.preventDefault()
    
    const todo = addForm.add.value.trim() // remove space (trim)
    
    //avoid new todo blank
    if(todo.length) {
        generateTemplate(todo)
        addForm.reset() // reset all the input fields inside that form
    }
        
})

// delete todos -> we use delegate event
list.addEventListener('click', evt => {

    // check if the class list of the element that we click
    // contains delete (class)
    if( evt.target.classList.contains('delete') ) {
        // navigate to li tag
        evt.target.parentElement.remove()
    }
});

const filteredTodos = term => {
    // list.children -> return HTMLCollection need convert to array
    Array.from(list.children)
        // verify if term isn't in todo content
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
    // verify if term isn't in todo content
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'))
}

// keyup event
search.addEventListener('keyup', evt => {
    const term = search.value.trim()
    filteredTodos(term)
})