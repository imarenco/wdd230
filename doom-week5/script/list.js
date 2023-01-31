const button = document.getElementById('button')
const input = document.getElementById('favchap')
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    const value = input.value;
    if (value) {
        const li = document.createElement("li");
        const button = document.createElement('button');
        li.innerHTML = value;
        button.textContent = 'X';
        button.addEventListener('click', function () {
            li.remove();
            input.focus();
            input.value = ""
        })
        button.classList.add("delete");
        button.ariaLabel = "Close button";
        li.appendChild(button); 
        list.appendChild(li);
        input.focus();
        input.value = ""
    }
})


