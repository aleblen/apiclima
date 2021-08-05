
const url="http://api.weatherstack.com/current?access_key=eb925d95a0bd4c0e5b41746d2b401777&query=Montevideo"; 
//dirección de la API. Puede ser la ruta a un archivo json. CREA LA TUYA.

fetch(url) //Realizamos el fetch que devolverá una promesa
    .then( respuesta=>respuesta.json()) //Obtenemos una promesa que trataremos como json
    .then(datos=> { //obtenemos una nueva promesa, pero los datos ya están como json.
        document.getElementById('ciudad').innerHTML= datos.location.name + ", " + datos.location.region + ", " + datos.location.country; //escribo los datos del país
        document.getElementById('temp').innerHTML=(datos.current.temperature ).toFixed(1) + "º";//escribo la temperatura. la convierto de kelvin a celsius
        document.getElementById('imagen').src= datos.current.weather_icons; //imagen
        document.getElementById('como').innerHTML= datos.current.weather_descriptions;
        document.getElementById('cosa1').innerHTML= "Wind: " + datos.current.wind_speed +"kmph" 
        document.getElementById('cosa2').innerHTML= "Precip: " + datos.current.precip +"mm" 
        document.getElementById('cosa3').innerHTML= "Pressure: " + datos.current.pressure +"mb" 
    })
    .catch( error => alert("Hubo un error: " + error));