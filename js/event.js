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
    this.ui.todoBtn.addEventListener("click", () => this.todo.saveTodo());
    // delete todo
    this.todo.taskList.addEventListener("click",(e)=>{
      console.log("target element : ",e.target);
      // delete task 
      if(e.target.classList.contains("item-delete")){
        const clickedDeleteIcon = e.target;
        const allDeleteIcons = Array.from(document.querySelectorAll('.item-delete'));
        const index = allDeleteIcons.indexOf(clickedDeleteIcon);
        if(index !== -1){
          this.todo.deleteTodo(index);
        }
      }

      if(e.target.classList.contains("item-edit")){
        const clickedEditIcon = e.target;
        const allEditIcons = Array.from(document.querySelectorAll('.item-edit'));
        const index = allEditIcons.indexOf(clickedEditIcon);
        this.todo.updateTodo(index);
      }
    })

  }
}
export default Event;
