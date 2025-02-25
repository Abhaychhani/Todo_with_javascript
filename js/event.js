class Event {
  constructor(root) {
    this.root = root;
    this.todo=this.root.todo;
    this.ui=this.root.ui;

    // theme colors event listeners
    document.addEventListener("click", (e) => this.ui.hideThemeDialog(e));
    this.ui.themeBtn.addEventListener("click", () => this.ui.toggleThemeDialog());
    this.ui.themeColors.addEventListener("click", (event) => this.ui.setTheme(event));
    // todo dialog listeners
    this.ui.addTaskBtn.onclick = ()=>{this.ui.showTaskDialog()};
    this.ui.cancleTodoBtn.onclick = ()=>{this.ui.hideTaskDialog()}
    // save todo
    this.ui.todoBtn.addEventListener("click", () => {
      if(this.ui.todoBtn.innerText.toLowerCase()==='save'){
        this.todo.saveTodo()
      }
    });
    // delete todo
    this.todo.taskList.addEventListener("click",(e)=>{
      // delete task 
      if(e.target.classList.contains("item-delete")){
        const clickedDeleteIcon = e.target;
        const allDeleteIcons = Array.from(document.querySelectorAll('.item-delete'));
        const index = allDeleteIcons.indexOf(clickedDeleteIcon);
        if(index !== -1){
          this.todo.deleteTodo(index);
        }
      }
      // update task
      if(e.target.classList.contains("item-edit")){
        const clickedEditIcon = e.target;
        const allEditIcons = Array.from(document.querySelectorAll('.item-edit'));
        const index = allEditIcons.indexOf(clickedEditIcon);
        this.ui.todoBtn.innerText="Update";
        this.ui.showTaskDialog();
        let slicedTask = this.todo.allTask.slice(index,index+1)
        const {title,content} = slicedTask[0]
        this.ui.taskTitle.value=title;
        this.ui.taskContent.value=content;
        if(index !== -1 && this.ui.todoBtn.innerText.toLowerCase()==='update'){
          this.ui.todoBtn.onclick= () => this.todo.updateTodo(index);
        }
        
      }
    })

  }
}
export default Event;
