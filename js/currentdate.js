const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('lastModified').textContent = new Date().toLocaleDateString('en-us', options);
