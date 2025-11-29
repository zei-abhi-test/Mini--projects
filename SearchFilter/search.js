const data = [
    "Rohit",
    "Ayesha" ,
    "Abhi" ,
    "Chiranth" ,
    "Ajay " ,
    "Teja" ,
    "Kori" ,
    "Kavya" ,
    "Udri" ,
    "Manu"
] ;

const search = document.getElementById('search') ;
const list = document.getElementById('list') ;

function render(items) {
    list.innerHTML = items.map(i => `<div class="item">${i}</div>`).join("");
}

render (data);

search.oninput = () => {
    const value = search.value.toLowerCase() ;
    const filtered = data.filter(i => i.toLowerCase().includes(value));
    render(filtered);
}