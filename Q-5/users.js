const status = document.getElementById('status') ;
const usersDiv = document.getElementById('users') ;

async function loadUsers() {
    status.innerText = "Loading..." ;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users") ;
        const data = await res.json() ;

        status.innerText = "" ;
        usersDiv.innerHTML = data.map(u =>  `
            <p><b>${u.name}</b> - ${u.email}</p>`).join("");
        
    } catch(err) {
        status.innerText = "Error fetching user"
    }
}

loadUsers() ;