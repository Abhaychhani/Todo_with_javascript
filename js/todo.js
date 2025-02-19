class Todo {
  constructor(root) {
    this.root = root;
    this.taskDialog = this.root.taskDialog;
    this.taskTitle = document.querySelector(".task-title");
    this.taskContent = document.querySelector(".task-content");
    this.saveTodoBtn = document.getElementById("saveTodo");
    this.cancleTodoBtn = document.getElementById("cancleTodo");
    this.allTask=[];
    // event listeners
    this.cancleTodoBtn.addEventListener("click", () => {
      this.taskDialog.setAttribute("style", "visibility:hidden;");
    });
    this.saveTodoBtn.addEventListener("click", () => this.saveTodo());
  }
  saveTodo() {
    if (!this.taskTitle.value) {
      this.taskTitle.style.outline = "1px solid red";
      return;
    }
    if (!this.taskContent.value) {
      this.taskContent.style.outline = "1px solid red";
      return;
    }

    const task = {
        title:this.taskTitle.value,
        content:this.taskContent.value,
    }
    this.allTask.push(task);
    localStorage.setItem('all-tasks',JSON.stringify(this.allTask));
    this.taskTitle.value="";
    this.taskContent.value="";
  }
  updateTodo() {}
  deleteTodo() {}
}

export default Todo;
