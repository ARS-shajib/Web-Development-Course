function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => displayUsers(json));
}

function displayUsers(data) {
    // console.log(data);
    const ul = document.getElementById('users');

    for (const user of data) {
        console.log(user.name);
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

        li = document.createElement('li');
        li.innerHTML = `<h3>${user.name}</h3>
        <div>${user.email}</div>
        `
        ul.appendChild(li);
    }
}