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
  tempEl.textContent = temp;
  var humidity = weather.main.humidity
  var humidityEl = document.getElementById("humidity")
  humidityEl.textContent = "Humidity: "+humidity+"%";
  var windSpeed = weather.wind.speed
  var windSpeedEl = document.getElementById("windSpeed")
  windSpeedEl.textContent = "Wind Speed: "+windSpeed+"mph";
})

