const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

var d = new Date();
document.getElementById("fullyear").innerHTML = d.getFullYear();

var time = document.lastModifiedDate
document.write("mode + document.lastModified");
