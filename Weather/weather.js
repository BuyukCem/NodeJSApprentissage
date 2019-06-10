var http = require('https');
var city="London";
var pays="uk"


/**
 * 
 * @param {*} city 
 * @param {*} temperature 
 */
function printMessage(city,temperature){
    console.log("A "+city+" la temperature est de "+(temperature)+ " degres celsuis");
;}
/**
 * 
 * @param {*} err 
 */
function printError(err){
    console.error(err.message);
;}

var request = http.get("https://samples.openweathermap.org/data/2.5/forecast?q=London,UK,&appid=8001b8a25982783c5e6415e20971bbe7",function(response){

    var body ="";
    response.on('data', function(chunk){//si il y a des données 
        body +=chunk;
    });

    response.on('end', function(){//tout les données sont arrivées

        if(response.statusCode===200) {
            try{
                var data_weater=JSON.parse(body);
                console.log(data_weater.main);


                printMessage(city,data_weater.main.weather);
            }catch (error){
                console.error(error.message);
            }
        }else{
           console.error({message: "Impossible"});
        }

    });
});