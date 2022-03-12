// função de adcionar tarefa
function addTask() {

    //título da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle){
        //clone template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        // adiciona títulos
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classes necessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //adiconar o evento de remover 
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        }) 
        
        //aicionar o evento de completar a tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        })

        //limpar o texto
        document.querySelector("#task-title").value = "";
    }    
}

//função de remover a tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//função de completar a tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done");
}

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTask();
});