import Todo from "./todo.js";
import Event from "./event.js";
import Ui from "./ui.js";

class Root {
  constructor() {
    this.ui=new Ui();
    this.todo = new Todo(this);
    this.event=new Event(this);
  }

 
}

const root = new Root();
