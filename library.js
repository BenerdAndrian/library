const library=[];

//construction object
function Book(bookName,bookAuthor,bookPages,status){
    this.bookName=bookName;
    this.bookAuthor=bookAuthor;
    this.bookPages=bookPages;
    this.status=status;
}
// add Book to library function
function addBookToLibrary(book){
    library.push(book);
}
// instantiate some books for library
const book1=new Book("Lonely Wolf","Silver lin",266,"not read");
const book2=new Book("The Rain Upside Down","Michael Nots",418,"not read");
const book3=new Book("By The Dawn","Selena Gomez",188,"not read");
const book4=new Book("A Freakin' Pretty Girl","Indiana Gospel",317,"read");
