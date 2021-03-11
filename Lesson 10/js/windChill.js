function windChill(temp, speed){
    let chill;
    if ( temp <=50 && speed >3) {
        chill = 35.74 + (0.6215 * temp)-(35.75 * Math.pow(speed,0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

    }
    else {
        chill = "N/A";  
    }
    return chill.toFixed(2);
    
}