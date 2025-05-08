// 2. In terms of the properties of books that you thought of, represent the following books as data:
var book1={ 
    Title:"Harry Potter and the Sorcerer's Stone" ,
    Author:("Author: J.K. Rowling" , "Gerald Jay Sussman"),
    MSRP: "$12.99"  ,
    Genre:"Fantasy", 
    PagesNumber: 309 , 
    Description:"A young boy discovers he's a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he uncovers secrets about his past and a magical stone.",
}

var book2={
    Author: "William Shakespeare",
    MSRP: "$5.99",
    Genre: "Tragedy",
    PagesNumber: 120,
    Description: "A tragic tale of two young lovers from feuding families whose romance ends in heartbreak and death.",
}

// 3. You may have been rewriting the same type of object over and over. We need to stay DRY (Do Not Repeat). Write a function makeBook that takes as arguments different attributes of a book and returns an object representing that book that has the proper structure (we call this a factory function).
function makeBook(Title, Author, MSRP, Genre,PagesNumber,Description){
    return {
    Title:Title,
    Author:Author,
    MSRP:MSRP,
    Genre:Genre,
    PagesNumber:PagesNumber,
    Description:Description
}
}

// 4. Look at one of your book objects in the console. This is the object inspector. The object inspector is nice to have, but it will be easier to have a function to display the more important information easily. Write a function called displayBook that takes a book as an argument, and returns the important information in a more readable way,
function displayBook(book){
    return  book.title+' '+book.author+' '+book.MSRP+' '+book.genre+' '+book.pagesNumber+' '+book.description;
}

// 5. Create an array called books that holds all of the books that you created above.
var books=[book1, book2]

// 6. Your function displayBook can be used to display a single book as a string. Now, write a function displayBooks that, given an array of books, returns a single string consisting of all of the books. Use the function displayBook to format all of the books. Each book should be numbered and separated with a newline (we also call this a line break) character so that each book is shown on a separate line in the console. The newline character is specified with a special escaped character in a string:
function displayBooks(books) {
    
    for (var i=0 ; i<books.length ; i++){
    str=str+i+1+" . "+displayBook(books[i])+"\n"
    }
    return str
}

// 7. Write a function searchBooks that, given a query and an array of books, searches the array of books for 'matching' books. You will decide what way you want to write your search algorithm. Here are some things to think about: What fields will be searched? Will you search multiple fields simultaneously (it might be best to start with one field, e.g.title)? Should the search be case-sensitive? How will the search work? Will it only work from the beginning of a field, or from anywhere within? some hints:




