const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

newFunction();    
function newFunction() {
    const x = new Date();
    document.getElementById('demo').innerHTML = x;
}
var d = new Date();
document.getElementById("currentyear").innerHTML = d.getFullYear();