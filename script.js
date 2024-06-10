let todoList = [
    {item:'Go to college',
    dueTime:'07:00: am'
    },
    {item:'Attend lectures ',
    dueTime:'09:10: am'
    },
    {item:'Go to gym ',
    dueTime:'07:30: pm'
    },
    {item:'Do some code ',
    dueTime:'10:00: pm'
    }
];
displayItem();


function addToDo(){

    let inputElement = document.querySelector('.todo-input');

    let timeElement = document.querySelector('.todo-time');

    let toDoItem = inputElement.value;
    let toDoTime = timeElement.value;


    todoList.push({item:toDoItem,dueTime:toDoTime});
    inputElement.value = ''; 
    timeElement.value = ''; 

    displayItem();
}

function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml ='';

    for(let i =0; i<todoList.length; i++){

        let {item,dueTime} = todoList[i]; 

        newHtml +=`
        <div class="todo-container-item">
            <span>${item}</span>
            <span>${dueTime}</span>
            <span>
            <button onclick="todoList.splice(${i},1); displayItem();" class="container-button">Done</button>

        </div>    
            `;
    }
    containerElement.innerHTML = newHtml;
}

