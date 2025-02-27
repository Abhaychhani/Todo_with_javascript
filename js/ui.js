class Ui {
  constructor() {
    this.themeBtn = document.getElementById("themeBtn");
    this.allSpan = document.querySelectorAll(".theme-colors span");
    this.themeColors = document.querySelector(".theme-colors");
    
    this.addTaskBtn = document.getElementById("addTask");
    this.taskDialog=document.getElementById('taskDialog');
    this.cancleTodoBtn = document.getElementById("cancleTodo");
    this.taskTitle = document.querySelector(".task-title");
    this.taskContent = document.querySelector(".task-content");
    this.todoContainer = document.querySelector(".task-container");
    this.todoDetails= document.querySelector('.todo-details');
    this.todoBtn = document.getElementById("saveTodo");
    this.getTheme()
  }
  toggleThemeDialog() {
    this.themeColors.classList.toggle("active");
  }
  hideThemeDialog(e){
    if (
        this.themeColors.classList.contains("active") &&
        e.target !== this.themeBtn &&
        e.target !== this.themeColors &&
        !Array.from(this.allSpan).includes(e.target)
      ) {
        this.themeColors.classList.remove("active");
      }
  }
  getTheme() {
    this.currentThemeColor = localStorage.getItem("todo-theme-color");
    if (this.currentThemeColor === null) {
      localStorage.setItem("todo-theme-color", "rgb(115, 94, 250)");
    } else {
      document.documentElement.style.setProperty(
        "--primary-color",
        localStorage.getItem("todo-theme-color")
      );
    }
  }
  setTheme(event) {
    if (event.target.tagName.toLowerCase() === "span") {
      const clickedSpan = event.target;
      const notClickedSpan = Array.from(this.allSpan).filter(
        (span) => span !== clickedSpan
      );
      clickedSpan.classList.add("active");
      notClickedSpan.forEach((span) => span.classList.remove("active"));
      const themeColor = getComputedStyle(clickedSpan).backgroundColor;
      localStorage.setItem("todo-theme-color", themeColor);
      this.getTheme();
    }
  }
  showTaskDialog(){
    this.taskDialog.setAttribute("style", "visibility:visible;");
    this.taskTitle.focus();
  }
  hideTaskDialog(){
    this.taskDialog.setAttribute("style", "visibility:hidden;");
  }
  validateTodo(){
    if (!this.taskTitle.value) {
        this.taskTitle.style.outline = "1px solid red";
        this.taskTitle.focus()
        return;
    }else if(!this.taskContent.value){
        this.taskTitle.style.outline = "none";
        this.taskContent.style.outline = "1px solid red";
        this.taskContent.focus()
        return;
    }
    return true;
  }

}

export default Ui;
