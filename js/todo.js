class Todo {
  constructor(root) {
    this.root = root;
    this.ui=this.root.ui; 
    this.taskTitle=this.ui.taskTitle;   
    this.taskContent=this.ui.taskContent;   
    this.allTask=this.getSavedTodo() || []; 
    this.taskList=document.getElementById('task-list');
    this.renderTodo();
    this.deleteIcons=document.querySelectorAll('.item-delete');
    this.editIcons=document.querySelectorAll('.item-edit');
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
        status:"pending"
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
          <h3 class="item-title"><span>${title}</span> <span class="item-date">${date}</span></h3>
          <p class="item-content">${content}</p>
          
          <span class="item-icons">
          <img class="item-edit" src="./img/edit.png" />
          <img class="item-delete" src="./img/delete.png" />
          </span>
        </li>
        `
          });
    }
  }
  updateTodo(index) {
    console.log("todo updated",index);
  }
  deleteTodo(index) {
    this.allTask.splice(index,1)
    localStorage.setItem('allTodos',JSON.stringify(this.allTask));
    this.renderTodo()
  }
}

export default Todo;
