const STORAGE_KEY = "lab_shifts";

let shifts = loadFromStorage();
let nextId = computeNextId(shifts);

const form = document.getElementById("shiftForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const dto = readForm();
    if (!validate(dto)) return;

    dto.id = nextId++;
    shifts.push(dto);

    saveToStorage();
    render();
    form.reset();
});

document.getElementById("resetBtn").addEventListener("click", () => {
    form.reset();
    clearErrors();
});

tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const id = Number(event.target.dataset.id);
        shifts = shifts.filter(x => x.id !== id);
        saveToStorage();
        render();
    }
});

function readForm() {
    return {
        date: document.getElementById("dateInput").value,
        timeSlot: document.getElementById("timeSlotSelect").value,
        userName: document.getElementById("userInput").value.trim(),
        comment: document.getElementById("commentInput").value.trim(),
        status: document.getElementById("statusSelect").value
    };
}

function validate(dto) {
    clearErrors();
    let valid = true;

    if (dto.date === "") {
        showError("dateInput", "dateError", "Оберіть дату");
        valid = false;
    }

    if (dto.timeSlot === "") {
        showError("timeSlotSelect", "timeSlotError", "Оберіть час");
        valid = false;
    }

    if (dto.userName.length < 3) {
        showError("userInput", "userError", "Мінімум 3 символи");
        valid = false;
    }

    if (dto.comment.length < 5) {
        showError("commentInput", "commentError", "Мінімум 5 символів");
        valid = false;
    }

    if (dto.status === "") {
        showError("statusSelect", "statusError", "Оберіть статус");
        valid = false;
    }

    return valid;
}

function render() {
    tableBody.innerHTML = shifts.map((s, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${s.date}</td>
      <td>${s.timeSlot}</td>
      <td>${s.userName}</td>
      <td>${s.status}</td>
      <td>${s.comment}</td>
      <td>
        <button type="button" class="delete-btn" data-id="${s.id}">Видалити</button>
      </td>
    </tr>
  `).join("");
}

function showError(inputId, errorId, message) {
    document.getElementById(inputId).classList.add("invalid");
    document.getElementById(errorId).textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
    document.querySelectorAll(".error-text").forEach(el => el.textContent = "");
}

function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(shifts));
}

function loadFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function computeNextId(items) {
    if (items.length === 0) return 1;
    return Math.max(...items.map(x => x.id)) + 1;
}

render();