const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('design').textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu () {
    document.getElementById('mostrar').classList.toggle('hide');
}

var d = new Date();
document.getElementById("fullYear").innerHTML = d.getFullYear();

function retornarFecha(){
    var fecha;
    fecha=new Date();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let month = monthNames[fecha.getMonth()];
    var cadena = "Last Update "+fecha.getDate()+' '+ month/*(fecha.getMonth()+1)*/+' '+fecha.getFullYear();
    return cadena;
  }
  function retornarUpdate(){
      var fecha;
      fecha = new Date();
      return  fecha.getFullYear();
  
  }
  function getDia(){
    var fecha = new Date()
    //let diaNames =["dom", "lun", "mar", "mie", "jue", "vie", "sab"];
    return fecha.getDay();
  
  }


