const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('design').textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu () {
    document.getElementById('mostrar').classList.toggle('hide');
}



