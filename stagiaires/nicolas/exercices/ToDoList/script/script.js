let todo = {
done: false,
libelle: '',
id:'1'
}

const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");

const toDoArray = [];

document.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
      createToDo();  
  }
});

function createToDo() {
    if(toDoInput.value === ""){
        alert("Veuillez entrer une tâche à réaliser")
    }
    else{
        const newItem = document.createElement("li");
        newItem.setAttribute("id", todo.id);
        
        const newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        
        const newLabel = document.createElement("label");
        
        const newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute("class", "delete");
        
        toDoList.appendChild(newItem);
        newItem.append(newCheckBox, newLabel, newDeleteButton);
        
        newLabel.innerHTML = toDoInput.value;
        
        toDoArray 
        todo.id++;
        
    }
}