const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

newfunction();
function newfunction () {
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);
}