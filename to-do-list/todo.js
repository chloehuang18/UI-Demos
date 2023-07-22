function addItem() {
  const input = document.getElementById("input").value.trim();
  const todo = document.getElementById("todo-list");

  if (input !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type=checkbox>
      <span>${input}</span>
      <button onclick="deleteItem(this)">Delete</button>
      `;

    todo.appendChild(li);
    input.value = "";
  }
}

function deleteItem(btn) {
  const todo = document.getElementById("todo-list");

  const li = btn.parentNode;
  todo.removeChild(li);
}
