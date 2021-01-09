const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

newFunction();
function newFunction() {
    var f = new Date();
    document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
}

