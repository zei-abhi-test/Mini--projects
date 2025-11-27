const body = document.getElementById('body') ;
const btn = document.getElementById('toggleBtn') ;

function applyTheme() {
    const theme = localStorage.getItem('theme') ;
    if (theme === 'dark') {
        body.classList.add('dark') ;
    } else {
        body.classList.remove('dark') ;
    }
}

btn.onclick = () => {
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme' , 'light ');
    } else {
        localStorage.setItem('theme' , 'dark') ;
    }
    applyTheme();
};

applyTheme();