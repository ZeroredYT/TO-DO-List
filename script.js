document.addEventListener('DOMContentLoaded', () => {
    const inputBox_Important = document.getElementById('input-box-important');
    const inputBox_Normal = document.getElementById('input-box-normal');

    const listContainer_Important = document.getElementById('list-container-important');
    const listContainer_Normal = document.getElementById('list-container-normal');

    window.addTask_Important = function () {
        if (inputBox_Important.value === '') {
            alert('You must write something!');
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox_Important.value; // Use textContent to avoid potential XSS issues
            listContainer_Important.appendChild(li);
            inputBox_Important.value = ''; // Clear the input box after adding the task \u2713 \u00d7
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
        saveData();
    };

    window.addTask_Normal = function () {
        if (inputBox_Normal.value === '') {
            alert('You must write something!');
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox_Normal.value; // Use textContent to avoid potential XSS issues
            listContainer_Normal.appendChild(li);
            inputBox_Normal.value = ''; // Clear the input box after adding the task \u2713 \u00d7
            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
        saveData();
    };

    listContainer_Important.addEventListener('click', function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    listContainer_Normal.addEventListener('click', function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data_important", listContainer_Important.innerHTML);
        localStorage.setItem("data_normal", listContainer_Normal.innerHTML);
    }
    function showTask() {
        listContainer_Important.innerHTML = localStorage.getItem("data_important");
        listContainer_Normal.innerHTML = localStorage.getItem("data_normal");
    }
    showTask();
});
