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
//display Library data
function displayLibrary(){
    const theLib=document.querySelector(".library");
    theLib.innerHTML=``;
    for(let i=0;i<library.length;i++){
        const list=document.createElement("li");
        list.setAttribute("class","book");
        list.setAttribute("data-index",i);
        list.innerHTML=`<h3>Title: ${library[i].bookName}<h3>
                        <p>Author: ${library[i].bookAuthor}</p>
                         <p>Pages: ${library[i].bookPages}</p>
                         <p>Status: <button>${library[i].status}</button></p>
        `
        theLib.appendChild(list);
    }
}
// instantiate some books for library
const book1=new Book("Lonely Wolf","Silver lin",266,"not read");
const book2=new Book("The Rain Upside Down","Michael Nots",418,"not read");
const book3=new Book("By The Dawn","Selena Gomez",188,"not read");
const book4=new Book("A Freakin' Pretty Girl","Indiana Gospel",317,"read");
//add to library array
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
displayLibrary();
