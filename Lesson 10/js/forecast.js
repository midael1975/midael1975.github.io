function getForecast(){
    const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7d622b58ff7b6823c7020ccafbb6f9d1';
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        
        const preston = jsObject; //paso el objeto a una variable para mas facilidad
        let temp;//declaro la temperatura
        let fecha;// declaro la fecha
        // declaro dia todo vacios para usarlo dentro del ciclo forb
        
        let c =1;//para contar solo interaciones positivas y usarlas para formar el "id" de lo elementos
        for(let i = 0; i <= preston.list.length-1; i++){// recorrer el array json solo la lista
          let hora = new Date(preston.list[i].dt_txt).getHours();// obtener la hora de cada elemento de la lista
          
          if(hora==18){// si es igual a los que nos piden
            temp = preston.list[i].main.temp;// obtengo el pronostico
            fecha = preston.list[i].dt_txt;// obtengo la fecha para luego obtener el dia
            day = dayName(fecha);// funcion creada para obtener el dia de la semana
            let dia = "0" + c;//concademacion para formar los id del div que dice el dia de la semana
            let day = "day" +c;// para el span que esta dentro del div que muestra la temperatura
            let icon = "icon" + c;// para el id de la img que muestra el icono
            document.getElementById(dia).textContent = day;
            document.getElementById(day).textContent = temp;
            const imagesrc = 'https://openweathermap.org/img/w/' + preston.list[i].weather[0].icon + '.png'; 
            const desc = preston.list[i].weather[0].description;
            document.getElementById(icon).setAttribute('src', imagesrc);
            document.getElementById(icon).setAttribute('alt', desc);
            c++;


          }
          

        }       

      });
    }
  function dayName(fecha){

    const days = [
    'Sun.',
    'Mon.',
    'Tue.',
    'Wen.',
    'Thu.',
    'Fri.',
    'Sat.',
    
    ];
    const numberDay = new Date(fecha).getDay();//recordar que javascript solo devule el dia en numero,
    const nameDay = days[numberDay];           //comienza el domingo = 0, asi consigo el dia en letras

    return nameDay;
}