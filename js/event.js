class Event {
  constructor(root) {
    this.root = root;
    this.todo = this.root.todo;
    this.ui = this.root.ui;

    // theme colors event listeners
    document.addEventListener("click", (e) => this.ui.hideThemeDialog(e));
    this.ui.themeBtn.addEventListener("click", () =>
      this.ui.toggleThemeDialog()
    );
    this.ui.themeColors.addEventListener("click", (event) =>
      this.ui.setTheme(event)
    );
    // todo dialog listeners
    this.ui.addTaskBtn.onclick = () => {
      this.ui.showTaskDialog();
      this.ui.todoBtn.innerText = "Save";
    };
    this.ui.cancleTodoBtn.onclick = () => {
      this.ui.hideTaskDialog();
    };
    // save todo
    this.ui.todoBtn.addEventListener("click", () => {
      if (this.ui.todoBtn.innerText.toLowerCase() === "save") {
        this.todo.saveTodo();
      }
    });
    // delete todo
    this.todo.taskList.addEventListener("click", (e) => {
      // delete task
      if (e.target.classList.contains("item-delete")) {
        const clickedDeleteIcon = e.target;
        const allDeleteIcons = Array.from(
          document.querySelectorAll(".item-delete")
        );
        const index = allDeleteIcons.indexOf(clickedDeleteIcon);
        if (index !== -1) {
          this.todo.deleteTodo(index);
        }
      }
      // update task status

      if (e.target.classList.contains("taskStatusInput")) {
        const clickedInput = e.target;
        const statusVal = e.target.checked;
        const allStatusInputs = Array.from(
          document.querySelectorAll(".taskStatusInput")
        );
        const index = allStatusInputs.indexOf(clickedInput);
        this.todo.setTaskStatus(index, statusVal);
      }
      // update task
      if (e.target.classList.contains("item-edit")) {
        const clickedEditIcon = e.target;
        const allEditIcons = Array.from(
          document.querySelectorAll(".item-edit")
        );
        const index = allEditIcons.indexOf(clickedEditIcon);
        this.ui.todoBtn.innerText = "Update";
        this.ui.showTaskDialog();
        let slicedTask = this.todo.allTask[index];
        const { title, content } = slicedTask;
        this.ui.taskTitle.value = title;
        this.ui.taskContent.value = content;
        if (
          index !== -1 &&
          this.ui.todoBtn.innerText.toLowerCase() === "update"
        ) {
          this.ui.todoBtn.onclick = () => this.todo.updateTodo(index);
        }
      }
      // got task details
      if (e.target.classList.contains("item-content")) {
        const clickedContent = e.target;
        const allContent = Array.from(
          document.querySelectorAll(".item-content")
        );
        const index = allContent.indexOf(clickedContent);
        this.ui.todoContainer.setAttribute("style", "display:none");
        this.ui.todoDetails.setAttribute("style", "display:block");
        this.todo.renderTodoDetails(index);
        // back todo btn
        document
          .querySelector(".back-todos-btn")
          .addEventListener("click", () => {
            this.ui.todoContainer.setAttribute("style", "display:block;");
            this.ui.todoDetails.setAttribute("style", "display:hidden;");
          });
      }
    });
  }
}
export default Event;
