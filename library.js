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
                         <span style="display:inline-block;margin-top:1rem;"><svg class="toDelete" style="margin-right:0.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                               <img class="toAdjust" style="width:24px;height:23px" src="adjust.svg" alt="adjust icon">
                          </span>
        `
        theLib.appendChild(list);
    }
}
//form display
function addBookFormDisplay(){
    const theForm=document.querySelector(".form");
    theForm.style.display="block";
    
}

//form closing
function closeForm(){
    const theForm=document.querySelector(".form");
    theForm.style.display="none";
}
//submitting form
const toSubmit=document.querySelector(".submit");
toSubmit.addEventListener("click",function(e){
    e.preventDefault();
    const bookName=document.getElementById("bookName").value;
    const bookAuthor=document.getElementById("bookAuthor").value;
    const bookPages=document.getElementById("bookPages").value;
    const readStatus=document.querySelector(".readStatus").value;
    const newBook=new Book(bookName,bookAuthor,bookPages,readStatus);
    addBookToLibrary(newBook);
    displayLibrary();
})
const readStatus=document.querySelector(".readStatus");
readStatus.addEventListener("click",()=>{
if(readStatus.value==="Not Read")
readStatus.value="Read"
else{
    readStatus.value="Not Read";
}
})
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


