let inputList;
let toDoList = [];
let index = 0;
let kindOfDataToDisplay = "pending";


inputList = document.querySelector('[name="mainInput"]');

listButtons = document.querySelectorAll('.button');

function addData(inputList){
    index = toDoList.length;
    toDoList[index] = {name: inputList.value, number: index, status: "pending"};
    displayData(toDoList, "pending");
}

function displayData(toDoListToDisplay, status){

    docParent = document.querySelector('[name="mainTable"]');

    listTr = document.querySelectorAll('.rowOneItem');
    
    for(let trItem of listTr){
        trItem.remove(); 
    }

    for(let i = 0; i<toDoListToDisplay.length;i++){
        console.log(i);
        if(toDoListToDisplay[i].status === status || status === "all"){
            newTr = document.createElement("tr");
            newTr.setAttribute("class", "rowOneItem");
            newTd = document.createElement("td");
            newTd.setAttribute("data-tdtaskname", toDoListToDisplay[i].number);
            newTd2 = document.createElement("td");
            newTd2.setAttribute("data-taskStatus", toDoListToDisplay[i].number);
            newP = document.createElement("p");
            newP.setAttribute("data-ptaskname", toDoListToDisplay[i].number);
            newSelect = document.createElement("select");
            newSelect.setAttribute("data-taskStatus", toDoListToDisplay[i].number);
            newSelect.setAttribute("onchange", `dataStatusUpdated(${toDoListToDisplay[i].number})`);

            newOption1 = new Option('En cours','pending');
            newOption2 = new Option('Terminé','done');

            newTd.setAttribute("class", "itemFromTheList");
            newTd2.setAttribute("class", "itemFromTheList");
            newTd.setAttribute("ondblclick", `changeNameTask(${toDoListToDisplay[i].number})`);

            docParent.appendChild(newTr);
            newTr.appendChild(newTd);
            newTd.appendChild(newP);
            newTr.appendChild(newTd2);
            newTd2.appendChild(newSelect);
            newSelect.appendChild(newOption1);
            newSelect.appendChild(newOption2);
            newSelect.value = toDoListToDisplay[i].status;

            taskName = document.createTextNode(toDoListToDisplay[i].name); 
            newP.appendChild(taskName);


            index++;
        }

    }
}

function changeNameTask(numberTextToChange){


    displayData(toDoList, kindOfDataToDisplay);

    newInput = document.createElement("input");
    newInput.setAttribute("class", "inputItem");
    newInput.setAttribute("data-input", numberTextToChange);

    document.querySelector(`[data-ptaskname="${numberTextToChange}"]`).remove();

    for(let i = 0 ; i<toDoList.length; i++){

        if(toDoList[i].number === numberTextToChange){

            document.querySelector(`[data-tdtaskname="${numberTextToChange}"]`).appendChild(newInput);
            newInput.setAttribute("data-tasknumber", toDoList[i].number);
            newInput.value = toDoList[i].name;
        }

    }

    newInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {

            toDoList[numberTextToChange].name = newInput.value;
            displayData(toDoList, kindOfDataToDisplay);


        }
    });

}

function transformInParagraph(numInputToTransform){

    console.log(numInputToTransform);
    parentTd = document.querySelector(`[data-tasknumber="${numInputToTransform}"]`).parentElement;
    document.querySelector(`[data-tasknumber="${numInputToTransform}"]`).remove();

}

function dataStatusUpdated(numTask){

    valueStatus = document.querySelector(`select[data-taskStatus='${numTask}']`).value;

    toDoList[numTask].status = valueStatus;

}

inputList.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

        addData(inputList);

    }
});

for(let button of listButtons){
    button.addEventListener('click', function (e) {

        typeButton = button.getAttribute("data-button");
        if(typeButton === "eraseList"){
            toDoList = [];
            displayData(toDoList, "all");
            kindOfDataToDisplay = "all";
        }
        else if(typeButton === "all"){
            displayData(toDoList, "all");
            kindOfDataToDisplay = "all";
        }
        else if(typeButton === "pending"){
            displayData(toDoList, "pending");
            kindOfDataToDisplay = "pending";
        }
        else if(typeButton === "done"){
            displayData(toDoList, "done");
            kindOfDataToDisplay = "done";
        }

    });
    
}

