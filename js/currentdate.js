const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

const options = {  year: 'numeric' };
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-us', options);