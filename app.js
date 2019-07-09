const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')

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