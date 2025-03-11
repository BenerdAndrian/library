const library=[];

//construction object
class Book{
    constructor(bookName,bookAuthor,bookPages,status){
    this.bookName=bookName;
    this.bookAuthor=bookAuthor;
    this.bookPages=bookPages;
    this.status=status;
    }
    changeStatus(){
    this.status="read"?"unread":"read"
     return this.status
    }
}


// add Book to library function
function addBookToLibrary(book){
    library.push(book);
}
//display Library data
function displayLibrary(array){
    const theLib=document.querySelector(".library");
    theLib.innerHTML=``;
    for(let i=0;i<array.length;i++){
        const list=document.createElement("li");
        list.setAttribute("class","book");
        list.setAttribute("data-index",i);
        list.innerHTML=`
        
        <h3>Title: ${array[i].bookName}<h3>
                        <p>Author: ${array[i].bookAuthor}</p>
                         <p>Pages: ${array[i].bookPages}</p>
                         <p>Status: <button class="readStatus">${array[i].status}</button></p>
                         <span style="display:inline-block;margin-top:1rem;">
                         <svg class="toDelete" style="margin-right:0.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                               <img class="toAdjust" style="width:24px;height:23px" src="adjust.svg" alt="adjust icon">
                          </span>
        `
        theLib.appendChild(list);
    }
    delBook();
   
    adjustBook();
    
}
const addbtn=document.querySelector(".bookAddBtn");
addbtn.addEventListener("click",addBookFormDisplay);
//form display

function addBookFormDisplay(){
    const theForm=document.querySelector(".form");
    theForm.style.display="block";
    const submitBtn=document.querySelector(".submit")
    const changeBtn=document.querySelector(".change")
    submitBtn.style.display="inline-block";
    changeBtn.style.display="none";
    const cancelBtn=document.querySelector(".cancelBtn")
    cancelBtn.onclick=closeForm;
}

//form closing
function closeForm(){
    const theForm=document.querySelector(".form");
    theForm.style.display="none";

}
//submitting form
function validationAPI(form){
    const inputs=document.querySelectorAll("input")
  let formValid=true;
   
     console.log("hello")
    
      inputs.forEach(input=>{
        input.setCustomValidity("")
         if(input.validity.valueMissing){
             input.setCustomValidity("the input is blank")
             formValid=false;
         }else{
             input.setCustomValidity("");
         }
      })
     
    
    return formValid;
 }
const toSubmit=document.querySelector(".submit");
toSubmit.addEventListener("click",function(e){
    
    
    const theForm=document.querySelector(".form");
    if(validationAPI(theForm)){
    const bookName=document.getElementById("bookName").value;
    const bookAuthor=document.getElementById("bookAuthor").value;
    const bookPages=document.getElementById("bookPages").value;
    const readStatus=document.querySelector(".readStatus").value;
    console.log(readStatus)
    const newBook=new Book(bookName,bookAuthor,bookPages,readStatus);
    addBookToLibrary(newBook);
        theForm.style.display="none";
        displayLibrary(library);
        e.preventDefault()
    }
})
// function changeStatus(){
//     const readStatus=document.querySelector(".readStatus");
//     readStatus.addEventListener("click",()=>{
//     if(readStatus.value==="Not Read")
//     readStatus.value="Read"
//     else{
//         readStatus.value="Not Read";
//     }

//     })
    
// }
// changeStatus();

//adding some advanced finding
function advancedFinding(){
    const read=document.querySelector(".readCategory");
    const notRead=document.querySelector(".notReadCategory");
    const all=document.querySelector(".All");
    
    all.addEventListener("click",function(){displayLibrary(library)});
    read.addEventListener("click",function(){
        const statusValue="Read";
        const readLibr=[]
        library.forEach((lib)=>{
            
            if(lib.status===statusValue){
               readLibr.push(lib);
            }
        })
        
        displayLibrary(readLibr);

    })
    notRead.addEventListener("click",function(){
        const statusValue="Not Read";
        const notReadLibr=[];
        
        library.forEach((lib)=>{
            if(lib.status==="Not Read"){
               
               notReadLibr.push(lib);
            }
        })
        
        displayLibrary(notReadLibr);
    })
}
// instantiate some books for library
const book1=new Book("Lonely Wolf","Silver lin",266,"Not Read");
const book2=new Book("The Rain Upside Down","Michael Nots",418,"Not Read");
const book3=new Book("By The Dawn","Selena Gomez",188,"Not Read");
const book4=new Book("A Freakin' Pretty Girl","Indiana Gospel",317,"Read");
const book5=new Book("Nature Sabotaging","Indiana Gospel",317,"Read");
const statusw=document.querySelector(".readStatus")
book1.changeStatus()

//add to library array
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
displayLibrary(library);
advancedFinding();

function adjustBook() {
    const adjust_btn = document.querySelectorAll(".toAdjust");
    adjust_btn.forEach(button => {
        button.addEventListener("click", () => {
            const form = document.querySelector(".form");
            form.style.display = "block";
            const submitBtn = document.querySelector(".submit");
            const changeBtn = document.querySelector(".change");
            submitBtn.style.display = "none";
            changeBtn.style.display = "inline-block";
            const parentElement = button.parentElement.parentElement.parentElement;
            const theIndex = parentElement.dataset.index;
            const cancelBtn=document.querySelector(".cancelBtn")
            cancelBtn.onclick=closeForm;

            let bookName = library[theIndex].bookName;
            let bookAuthor = library[theIndex].bookAuthor;
            let bookPages = library[theIndex].bookPages;
            let bookStatus = library[theIndex].status;

            let name = document.getElementById("bookName");
            let author = document.getElementById("bookAuthor");
            let pages = document.getElementById("bookPages");
            let status = document.querySelector(".readStatus");

            name.value = bookName;
            author.value = bookAuthor;
            pages.value = bookPages;
            status.value = bookStatus;  // Set initial status value correctly

            changeBtn.onclick = function (e) {
                e.preventDefault();
                // Now when you click "Change", update the library with the form values
                library[theIndex].bookName = name.value;
                library[theIndex].bookAuthor = author.value;
                library[theIndex].bookPages = pages.value;
                library[theIndex].status = status.value; // Update the status with the new value
                form.style.display = "none";
                displayLibrary(library);
               
            }
        })
    })
}


function delBook(){
    const del_btn= document.querySelectorAll(".toDelete");
    del_btn.forEach(delButt=>{
        delButt.addEventListener("click",()=>{
            const parentElement=delButt.parentElement.parentElement.parentElement;
            const theIndex=parentElement.dataset.index;
           library.splice(theIndex,1);
           displayLibrary(library);
        })
    })
}
