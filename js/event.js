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
    // crud oparation todos
    this.ui.todoBtn.addEventListener("click", () => this.todo.saveTodo());
  }
}
export default Event;
