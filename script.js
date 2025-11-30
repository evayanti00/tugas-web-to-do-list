const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// --- Fungsi utilitas untuk localStorage ---
function saveTasks() {
  const tasks = [];
  listEl.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent, // teks tugas
      done: li.classList.contains("done")
    });
  });
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("myTasks")) || [];
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.text;
    if (t.done) li.classList.add("done");

    const actions = createActionButtons(li);
    li.appendChild(actions);
    listEl.appendChild(li);
  });
}

// --- Fungsi bikin tombol aksi ---
function createActionButtons(li) {
  const box = document.createElement("div");
  box.className = "action-box";

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "✓";
  finishBtn.className = "finish";
  finishBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    saveTasks();
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✕";
  removeBtn.className = "remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  box.appendChild(finishBtn);
  box.appendChild(removeBtn);
  return box;
}

// event submit form
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const task = input.value.trim();
  
  if (!tasKText) {
    alert("jangan kosongin input");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
 const actions = createActionsButtons(li);
  li.appendChild(li);

  listEl.appendChild(li);
  inputEl.value = "";

  saveTasks();
});

//load tasks saat hlmn dibuka
loadTasks();
