var form = document.getElementById("search")
var city = document.getElementById("city")
var key = "6c5a9bdb22a6c78a7a30b5b40ee2f048"
form.addEventListener('submit', async function(event){
    event.preventDefault()
    var cityName = city.value  
    //alert(cityName)
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appid="+key);
  const weather = await response.json();
  console.log(weather);
  var temp = weather.main.temp;
  var tempEl = document.getElementById("temperature");
  tempEl.textContent = "temperature: " + temp + "F";
  var humidity = weather.main.humidity
  var humidityEl = document.getElementById("humidity")
  humidityEl.textContent = "Humidity: "+humidity+"%";
  var windSpeed = weather.wind.speed
  var windSpeedEl = document.getElementById("windSpeed")
  windSpeedEl.textContent = "Wind Speed: "+windSpeed+"mph";
  

  const response2 = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&appid="+key);
  const forecast = await response2.json();
  console.log(forecast.list[0]);
  const fivedayforecast = document.getElementById("5dayforecast")
    fivedayforecast.innerHTML=""
  for(let i = 0; i < forecast.list.length; i+=8){
    var day = forecast.list[i];
    var temp = day.main.temp;
    var tempEl = document.createElement("p");
    tempEl.textContent = "temperature: " + temp + "F";
    var humidity = day.main.humidity
    var humidityEl = document.createElement("p")
    humidityEl.textContent = "Humidity: "+humidity+"%";
    var windSpeed = day.wind.speed
    var windSpeedEl = document.createElement("p")
    windSpeedEl.textContent = "Wind Speed: "+windSpeed+"mph";
    //var num = i/8 +1
    //const dayElement = documents.getElementById("day"+num) 
    const dayElement = document.createElement("div")
    dayElement.appendChild(tempEl)
    dayElement.appendChild(humidityEl)
    dayElement.appendChild(windSpeedEl)
    fivedayforecast.appendChild(dayElement)
    console.log(i); 
  }

})
  
