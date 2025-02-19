import Todo from "./todo.js";
import Event from "./event.js";

class Root {
  constructor() {
    // localStorage.setItem('theme-color','slateblue');
    this.themeBtn = document.getElementById("themeBtn");
    this.allSpan = document.querySelectorAll(".theme-colors span");
    this.themeColors = document.querySelector(".theme-colors");
    this.addTaskBtn = document.getElementById("addTask");
    this.taskDialog=document.getElementById('taskDialog');
    this.checkTheme();

    this.todo = new Todo(this);
    this.event=new Event(this);
    // event listeners
   
    
  }

  toggleThemeDialog() {
    this.themeColors.classList.toggle("active");
  }
  checkTheme(){
    this.currentThemeColor = localStorage.getItem("todo-theme-color");
    // check theme color
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

      document.documentElement.style.setProperty(
        "--primary-color",
        localStorage.getItem("todo-theme-color")
      );
    }
  }
}

const root = new Root();
