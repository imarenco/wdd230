const button = document.getElementById('button')

button.addEventListener('click', function () {
    const input = document.getElementById('favchap')
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
        li.appendChild(button); document.querySelector("#list").appendChild(li);
        input.focus();
        input.value = ""
    }
})


