class Todo {
  constructor(root) {
    this.root = root;
    this.ui=this.root.ui; 
    this.taskTitle=this.ui.taskTitle;   
    this.taskContent=this.ui.taskContent;   
    this.allTask=this.getSavedTodo() || []; 
    this.taskList=document.getElementById('task-list');
    this.renderTodo();
  }
  getSavedTodo(){
    return JSON.parse(localStorage.getItem("allTodos"));
  }
  saveTodo() {
    if(!this.ui.validateTodo()) return;
    const task = {
        title:this.taskTitle.value,
        content:this.taskContent.value,
        date:new Date().toLocaleDateString(),
        status:false
    }
    this.allTask.push(task);
    localStorage.setItem('allTodos',JSON.stringify(this.allTask));
    this.taskTitle.value="";
    this.taskContent.value="";
    this.ui.hideTaskDialog();
    this.renderTodo();
  }
  renderTodo(){
    if(this.allTask.length===0){
      this.taskList.innerHTML=`
        <p>Task not create yet.</p>
      `;
      return;
    }else{
      this.taskList.innerHTML="";

      this.allTask.forEach(task => {
        const {title,content,date,status} = task;
        this.taskList.innerHTML += `
        <li class="task-list-item">
          <h3 class="item-title">
            <span>${title}</span>
            ${status ? "<span class='status-text active'>Completed<span>" : "<span class='status-text'>Pending<span>" }
            
          </h3>
          <p class="item-content">${content}</p>
          
          <span class="item-icons">
          <span class="item-date">${date}</span>
          <span>
            <input type="checkbox" ${status ? "checked" : ""} class="taskStatusInput" />
            <img class="item-edit" src="./img/edit.png" />
            <img class="item-delete" src="./img/delete.png" />
          </span>
          </span>
        </li>
        `
          });
    }
  }
  updateTodo(index) {
    if(!this.ui.validateTodo()) return;
    this.saveTodo()
    this.deleteTodo(index);
    localStorage.setItem("allTodos",JSON.stringify(this.allTask))
    this.renderTodo()
  }
  setTaskStatus(index,statusVal){
    this.allTask[index].status=statusVal;
    localStorage.setItem('allTodos',JSON.stringify(this.allTask));
    this.renderTodo()
  }
  deleteTodo(index) {
    this.allTask.splice(index,1)
    localStorage.setItem('allTodos',JSON.stringify(this.allTask));
    this.renderTodo()
  }
}

export default Todo;
