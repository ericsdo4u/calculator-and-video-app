
// delete function
const taskList = document.querySelector("#task-list ul");
console.log(taskList);
taskList.addEventListener('click', (e)=>{
    // console.log(e);
    let className = e.target.className;
    // console.log(className);
    if(className === "delete"){
        let li = e.target.parentNode
        taskList.removeChild(li)
    }
})

//search function
const searchBook = document.forms["search-tasks"];
const listOfBooks = document.querySelectorAll("#task-list li .name");

searchBook.addEventListener('keyup', function (e){
    e.preventDefault();
    let inputText = e.target.value.toLowerCase()
    listOfBooks.forEach((book)=>{
        let title = book.textContent.toLowerCase()
        let isIncludedInputText = title.includes(inputText)
        let parentNode = book.parentNode;
        if (isIncludedInputText){
            parentNode.style.display = "block"
        }else {
            parentNode.style.display = "none";
        }

    })

})

const  addTask = document.forms["add-task"]

addTask.addEventListener("submit", (e) => {
    e.preventDefault();
    const  inputValue = addTask.querySelector("input").value.trim();
    //console.log(inputValue);
    if (inputValue) {
        const liTag = document.createElement("li");
        const firstSpan = document.createElement("span");
        const secondSpan = document.createElement("span");

        firstSpan.classList = 'name';
        secondSpan.classList = 'delete';

        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";
        taskList.appendChild(liTag);



        addTask.reset("")
    }})



