document.addEventListener('DOMContentLoaded', () => {
    const taskNameInput = document.getElementById('task-name');
    const taskDateInput = document.getElementById('task-date');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const countValue = document.querySelector(".count-value");
    let taskCount = 0;
    const displayCount = (taskCount)=>{
        countValue.innerText = taskCount;
    };

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskName = taskNameInput.value.trim();
        const taskDate = taskDateInput.value;

        if (taskName === '' || taskDate === '') {
            alert('Please enter task name and date.');
            return;
        }

        const taskItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = `${taskName} - ${new Date(taskDate).toLocaleString()}`;
        taskItem.appendChild(taskText);
        taskCount+=1;
        displayCount(taskCount);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(taskItem, taskText, taskName, taskDate));
        taskItem.appendChild(editButton);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => taskItem.classList.toggle('completed'));
        taskItem.appendChild(completeButton);
        let flag=1;
        completeButton.onclick = () => {
            if (flag == 1){
                taskCount -= 1;
                flag -= 1;
            }
            else {
                taskCount +=1;
                flag +=1
            }
            displayCount(taskCount);
        };


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => taskItem.remove());
        taskItem.appendChild(deleteButton);
        deleteButton.onclick = () => {


            if(flag != 1){
                
            }
            else{
                taskCount -=1;
            }

            displayCount(taskCount);
        };


        taskList.appendChild(taskItem);

        taskNameInput.value = '';
        taskDateInput.value = '';

        
    }

    function editTask(taskItem, taskText, oldName, oldDate) {
        const newTaskName = prompt('Edit task name:', oldName);
        const newTaskDate = prompt('Edit task date and time:', oldDate);

        if (newTaskName && newTaskDate) {
            taskText.textContent = `${newTaskName} - ${new Date(newTaskDate).toLocaleString()}`;
        }
    }
});
