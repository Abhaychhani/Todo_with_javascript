const itemArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
let listContainer = document.querySelector(".to-do-list");
let taskSchema = {
  value: "",
  status: false,
};

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
}

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item");
  createItem(item);
});

function createItem(item) {
  if (item.value !== "") {
    taskSchema.value = item.value;
    itemArray.unshift(taskSchema);
    localStorage.setItem("items", JSON.stringify(itemArray));
    location.reload();
  }
}

Array.from(itemArray).forEach((list) => {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let inputBox = document.createElement("input");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let editBtn = document.createElement("span");
  let deleteBtn = document.createElement("span");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("status");
  checkbox.checked = list.status;
  inputBox.classList.add("input-box");
  inputBox.setAttribute("readonly", true);
  inputBox.value = list.value;
  editBtn.classList.add("edit");
  editBtn.innerText = "Edit";
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "Delete";
  div1.appendChild(checkbox);
  div1.appendChild(inputBox);
  div2.appendChild(editBtn);
  div2.appendChild(deleteBtn);
  li.appendChild(div1);
  li.appendChild(div2);
  listContainer.appendChild(li);
});

function setStatus() {
  let statusInputs = document.querySelectorAll(".status");
  Array.from(statusInputs).forEach((statusInp, index) => {
    statusInp.addEventListener("click", (e) => {
      // console.log(e.target.checked);
      if (itemArray[index].status == true) {
        itemArray[index].status = false;
        // e.target.checked=JSON.parse(localStorage.getItem('items'))[0].status;
        localStorage.setItem("items", JSON.stringify(itemArray));
      } else {
        itemArray[index].status = true;
        // e.target.checked=true
        localStorage.setItem("items", JSON.stringify(itemArray));
        // location.reload()
      }
    });
  });
}

function deleteTask() {
  let deleteBtns = document.querySelectorAll(".delete");
  Array.from(deleteBtns).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      itemArray.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(itemArray));
      location.reload();
    });
  });
}

function updateTask() {
  let editBtns = document.querySelectorAll(".edit");
  Array.from(editBtns).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let inputBox = document.getElementsByClassName("input-box")[index];
      inputBox.removeAttribute("readonly");
      inputBox.focus();
      inputBox.addEventListener("change", () => {
        itemArray.splice(index, 1);
        taskSchema.value = inputBox.value;
        itemArray.unshift(taskSchema);
        localStorage.setItem("items", JSON.stringify(itemArray));
        location.reload();
      });
      console.log("hi", document.getElementsByClassName("input-box")[index]);
    });
  });
}

window.onload = function () {
  displayDate();
  setStatus();
  deleteTask();
  updateTask();
};
