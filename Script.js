const inputBox = document.getElementById("inputbox");
const lists = document.getElementsByClassName("tasks")[0];

function addtask() {
  if (inputbox.value === "") {
    alert("You must write something...");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    lists.appendChild(li);
  }
  inputBox.value = "";
}

