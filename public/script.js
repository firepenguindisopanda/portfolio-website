let theme_dot = document.getElementsByClassName('theme-dot');
let themes_local_storage = localStorage.getItem('theme');
if(themes_local_storage === null){
    setTheme('light');
} else {
    setTheme(themes_local_storage);
}
for(var i = 0; theme_dot.length > i; i++){
    theme_dot[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = './default.css';
    }
    if(mode === 'blue'){
        document.getElementById('theme-style').href = './blue.css';
    }
    localStorage.setItem('theme', mode);
}