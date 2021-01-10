const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' };
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

var d = new Date();
document.getElementById("fullyear").innerHTML = d.getFullYear();

// fileInput es un HTMLInputElement: <input type="file" multiple id="myfileinput">
var fileInput = document.getElementById("myfileinput");

// files es un objeto FileList (similar a NodeList)
var files = fileInput.files;

for (var i = 0; i < files.length; i++) {
  alert(files[i].name + " tiene una fecha de ultima modificacion el " + files[i].lastModifiedDate);
}
