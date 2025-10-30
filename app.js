//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI(){}
//add book to list
UI.prototype.addbooktolist = function(book){
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);

}
UI.prototype.showMessage = function(message, className){
    //create div 
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    //create text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);

    //set timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)
}

//clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
//Event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

     //instantiate book
     const book = new Book(title, author, isbn)     

    //instantiate UI
    const ui = new UI()
    //Validation
    if (title === '' || author === '' || isbn === ''){
        ui.showMessage('Please fill in all the spaces', 'error')
    }else{
     //Add book to list
    ui.addbooktolist(book);
    // show success 
    ui.showMessage('Book Successfully Added', 'success')
  // clear fields
  ui.clearFields();

    }
    
    e.preventDefault();
})