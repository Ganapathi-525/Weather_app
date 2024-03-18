// API call

let form = document.forms;

form[0].addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log(e.target[0].value)
    // loadTemparatureData(e.target[0].value)
    // const loadTemparatureData = () => {
        const key = "a1d9c445802e1d4ceb6f9b29e5cb97cd";
        const inputValue = e.target[0].value
        const weatherStatus = document.getElementById("weather-status");
        // console.log(inputValue.value)
        if (inputValue.length == 0) {
            // console.log('input city name')
            alert("Enter the City Name");
        } else {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}`
            )
                .then((res) => {
                    if (!res.ok) {
                        // alert('Network response was not ok');
                    }
    
                    return res.json();
                })
    
                .then((data) => {
                    if (data.cod === "404") {
                        alert(data.message);
                    } else {
                          console.log(data)
                        let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
                        let lat = `lat=${data.coord.lat}&`;
                        let lon = `lon=${data.coord.lon}&`;
                        let apiOptions = "units=metric&exclude=minutely,alerts&";
                        let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
                        let file = queryUrl + lat + lon + apiOptions + apiKey;
                        // https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}
                        fetch(file)
                            .then((response) => response.json())
                            .then((data1) => {
                                // Weather main data
                                console.log(data1)
                                let main = data1.current.weather[0].main;
                                let description = data1.current.weather[0].description;
                                let temp = Math.round(data1.current.temp);
                                let pressure = data1.current.pressure;
                                let humidity = data1.current.humidity;
                                let name =data.name;
    
                                document.getElementById("wrapper-description").innerHTML = description;
                                document.getElementById("wrapper-temp").innerHTML = temp + "°C";
                                document.getElementById("wrapper-pressure").innerHTML = pressure;
                                document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
                                document.getElementById("wrapper-name").innerHTML = name;
    
                                // Weather hourly data
                                let hourNow = data1.hourly[0].temp;
                                let hour1 = data1.hourly[1].temp;
                                let hour2 = data1.hourly[2].temp;
                                let hour3 = data1.hourly[3].temp;
                                let hour4 = data1.hourly[4].temp;
                                let hour5 = data1.hourly[5].temp;
    
                                document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
                                document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
                                document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
                                document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
                                document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
                                document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";
    
                                // Time
                                let timeNow = new Date().getHours();
                                let time1 = timeNow + 1;
                                let time2 = time1 + 1;
                                let time3 = time2 + 1;
                                let time4 = time3 + 1;
                                let time5 = time4 + 1;
    
                                document.getElementById("wrapper-time1").innerHTML = time1;
                                document.getElementById("wrapper-time2").innerHTML = time2;
                                document.getElementById("wrapper-time3").innerHTML = time3;
                                document.getElementById("wrapper-time4").innerHTML = time4;
                                document.getElementById("wrapper-time5").innerHTML = time5;
    
                                // Weather daily data
                                let tomorrowTemp = Math.round(data1.daily[0].temp.day);
                                let dATTemp = Math.round(data1.daily[1].temp.day);
                                let tomorrowMain = data1.daily[0].weather[0].main;
                                let dATTempMain = data1.daily[1].weather[0].main;
    
                                document.getElementById("wrapper-forecast-temp-today").innerHTML =
                                    temp + "°";
                                document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
                                    tomorrowTemp + "°";
                                document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
                                    dATTemp + "°";
    
                                // Icons
                                let iconBaseUrl = "http://openweathermap.org/img/wn/";
                                let iconFormat = ".webp";
    
                                // Today
                                let iconCodeToday = data1.current.weather[0].icon;
                                let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
                                document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;
    
                                // Tomorrow
                                let iconCodeTomorrow = data1.daily[0].weather[0].icon;
                                let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
                                document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;
    
                                // Day after tomorrow
                                let iconCodeDAT = data1.daily[1].weather[0].icon;
                                let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
                                document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;
    
                                // Icons hourly
    
                                // Hour now
                                let iconHourNow = data1.hourly[0].weather[0].icon;
                                let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
                                document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;
    
                                // Hour1
                                let iconHour1 = data1.hourly[1].weather[0].icon;
                                let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
                                document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;
    
                                // Hour2
                                let iconHour2 = data1.hourly[2].weather[0].icon;
                                let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
                                document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;
    
                                // Hour3
                                let iconHour3 = data1.hourly[3].weather[0].icon;
                                let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
                                document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;
    
                                // Hour4
                                let iconHour4 = data1.hourly[4].weather[0].icon;
                                let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
                                document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;
    
                                // Hour5
                                let iconHour5 = data1.hourly[5].weather[0].icon;
                                let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
                                document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;
    
                                // Backgrounds
                                switch (main) {
                                    case "Snow":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
                                        break;
                                    case "Clouds":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
                                        break;
                                    case "Fog":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
                                        break;
                                    case "Rain":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
                                        break;
                                    case "Clear":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                                        break;
                                    case "Thunderstorm":
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
                                        break;
                                    default:
                                        document.getElementById("wrapper-bg").style.backgroundImage =
                                            "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
                                        break;
                                }
                            });
    
                    }
    
                    // console.log(data.message)
                })
                .catch((error) => {
                    // Handle any errors that occur during the fetch operation
                    console.error("Fetch error:", error);
                    // Optionally, you can display an error message to the user
                    // alert('An error occurred while fetching data. Please try again later.');
                });
        }
        // inputValue.value = "";
        // weatherStatus.innerHTML = "";
    // };
})
// const loadTemparatureData = (input) => {
//     const key = "a1d9c445802e1d4ceb6f9b29e5cb97cd";
//     const inputValue = input
//     const weatherStatus = document.getElementById("weather-status");
//     // console.log(inputValue.value)
//     if (inputValue.value.length == 0) {
//         // console.log('input city name')
//         alert("Enter the City Name");
//     } else {
//         fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}`
//         )
//             .then((res) => {
//                 if (!res.ok) {
//                     // alert('Network response was not ok');
//                 }

//                 return res.json();
//             })

//             .then((data) => {
//                 if (data.cod === "404") {
//                     alert(data.message);
//                 } else {

//                     let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
//                     let lat = `lat=${data.coord.lat}&`;
//                     let lon = `lon=${data.coord.lat}&`;
//                     let apiOptions = "units=metric&exclude=minutely,alerts&";
//                     let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
//                     let file = queryUrl + lat + lon + apiOptions + apiKey;
//                     // https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}
//                     fetch(file)
//                         .then((response) => response.json())
//                         .then((data) => {
//                             // Weather main data
//                             let main = data.current.weather[0].main;
//                             let description = data.current.weather[0].description;
//                             let temp = Math.round(data.current.temp);
//                             let pressure = data.current.pressure;
//                             let humidity = data.current.humidity;
//                             let name = input;

//                             document.getElementById("wrapper-description").innerHTML = description;
//                             document.getElementById("wrapper-temp").innerHTML = temp + "°C";
//                             document.getElementById("wrapper-pressure").innerHTML = pressure;
//                             document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
//                             document.getElementById("wrapper-name").innerHTML = name;

//                             // Weather hourly data
//                             let hourNow = data.hourly[0].temp;
//                             let hour1 = data.hourly[1].temp;
//                             let hour2 = data.hourly[2].temp;
//                             let hour3 = data.hourly[3].temp;
//                             let hour4 = data.hourly[4].temp;
//                             let hour5 = data.hourly[5].temp;

//                             document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
//                             document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
//                             document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
//                             document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
//                             document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
//                             document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

//                             // Time
//                             let timeNow = new Date().getHours();
//                             let time1 = timeNow + 1;
//                             let time2 = time1 + 1;
//                             let time3 = time2 + 1;
//                             let time4 = time3 + 1;
//                             let time5 = time4 + 1;

//                             document.getElementById("wrapper-time1").innerHTML = time1;
//                             document.getElementById("wrapper-time2").innerHTML = time2;
//                             document.getElementById("wrapper-time3").innerHTML = time3;
//                             document.getElementById("wrapper-time4").innerHTML = time4;
//                             document.getElementById("wrapper-time5").innerHTML = time5;

//                             // Weather daily data
//                             let tomorrowTemp = Math.round(data.daily[0].temp.day);
//                             let dATTemp = Math.round(data.daily[1].temp.day);
//                             let tomorrowMain = data.daily[0].weather[0].main;
//                             let dATTempMain = data.daily[1].weather[0].main;

//                             document.getElementById("wrapper-forecast-temp-today").innerHTML =
//                                 temp + "°";
//                             document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
//                                 tomorrowTemp + "°";
//                             document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
//                                 dATTemp + "°";

//                             // Icons
//                             let iconBaseUrl = "http://openweathermap.org/img/wn/";
//                             let iconFormat = ".webp";

//                             // Today
//                             let iconCodeToday = data.current.weather[0].icon;
//                             let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
//                             document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

//                             // Tomorrow
//                             let iconCodeTomorrow = data.daily[0].weather[0].icon;
//                             let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
//                             document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;

//                             // Day after tomorrow
//                             let iconCodeDAT = data.daily[1].weather[0].icon;
//                             let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
//                             document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

//                             // Icons hourly

//                             // Hour now
//                             let iconHourNow = data.hourly[0].weather[0].icon;
//                             let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
//                             document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;

//                             // Hour1
//                             let iconHour1 = data.hourly[1].weather[0].icon;
//                             let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
//                             document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

//                             // Hour2
//                             let iconHour2 = data.hourly[2].weather[0].icon;
//                             let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
//                             document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

//                             // Hour3
//                             let iconHour3 = data.hourly[3].weather[0].icon;
//                             let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
//                             document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

//                             // Hour4
//                             let iconHour4 = data.hourly[4].weather[0].icon;
//                             let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
//                             document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

//                             // Hour5
//                             let iconHour5 = data.hourly[5].weather[0].icon;
//                             let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
//                             document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

//                             // Backgrounds
//                             switch (main) {
//                                 case "Snow":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
//                                     break;
//                                 case "Clouds":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
//                                     break;
//                                 case "Fog":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
//                                     break;
//                                 case "Rain":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
//                                     break;
//                                 case "Clear":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//                                     break;
//                                 case "Thunderstorm":
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
//                                     break;
//                                 default:
//                                     document.getElementById("wrapper-bg").style.backgroundImage =
//                                         "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//                                     break;
//                             }
//                         });

//                 }

//                 // console.log(data.message)
//             })
//             .catch((error) => {
//                 // Handle any errors that occur during the fetch operation
//                 console.error("Fetch error:", error);
//                 // Optionally, you can display an error message to the user
//                 // alert('An error occurred while fetching data. Please try again later.');
//             });
//     }
//     inputValue.value = "";
//     weatherStatus.innerHTML = "";
// };

// let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
// let lat = "lat=13.2&";
// let lon = "lon=79.1167&";
// let apiOptions = "units=metric&exclude=minutely,alerts&";
// let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
// let file = queryUrl + lat + lon + apiOptions + apiKey;
// // https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${key}
// fetch(file)
//   .then((response) => response.json())
//   .then((data) => {
//     // Weather main data
//     let main = data.current.weather[0].main;
//     let description = data.current.weather[0].description;
//     let temp = Math.round(data.current.temp);
//     let pressure = data.current.pressure;
//     let humidity = data.current.humidity;
//     let name = "Chittoor";

//     document.getElementById("wrapper-description").innerHTML = description;
//     document.getElementById("wrapper-temp").innerHTML = temp + "°C";
//     document.getElementById("wrapper-pressure").innerHTML = pressure;
//     document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
//     document.getElementById("wrapper-name").innerHTML = name;

//     // Weather hourly data
//     let hourNow = data.hourly[0].temp;
//     let hour1 = data.hourly[1].temp;
//     let hour2 = data.hourly[2].temp;
//     let hour3 = data.hourly[3].temp;
//     let hour4 = data.hourly[4].temp;
//     let hour5 = data.hourly[5].temp;

//     document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
//     document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
//     document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
//     document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
//     document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
//     document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

//     // Time
//     let timeNow = new Date().getHours();
//     let time1 = timeNow + 1;
//     let time2 = time1 + 1;
//     let time3 = time2 + 1;
//     let time4 = time3 + 1;
//     let time5 = time4 + 1;

//     document.getElementById("wrapper-time1").innerHTML = time1;
//     document.getElementById("wrapper-time2").innerHTML = time2;
//     document.getElementById("wrapper-time3").innerHTML = time3;
//     document.getElementById("wrapper-time4").innerHTML = time4;
//     document.getElementById("wrapper-time5").innerHTML = time5;

//     // Weather daily data
//     let tomorrowTemp = Math.round(data.daily[0].temp.day);
//     let dATTemp = Math.round(data.daily[1].temp.day);
//     let tomorrowMain = data.daily[0].weather[0].main;
//     let dATTempMain = data.daily[1].weather[0].main;

//     document.getElementById("wrapper-forecast-temp-today").innerHTML =
//       temp + "°";
//     document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
//       tomorrowTemp + "°";
//     document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
//       dATTemp + "°";

//     // Icons
//     let iconBaseUrl = "http://openweathermap.org/img/wn/";
//     let iconFormat = ".webp";

//     // Today
//     let iconCodeToday = data.current.weather[0].icon;
//     let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
//     document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

//     // Tomorrow
//     let iconCodeTomorrow = data.daily[0].weather[0].icon;
//     let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
//     document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;

//     // Day after tomorrow
//     let iconCodeDAT = data.daily[1].weather[0].icon;
//     let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
//     document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

//     // Icons hourly

//     // Hour now
//     let iconHourNow = data.hourly[0].weather[0].icon;
//     let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
//     document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;

//     // Hour1
//     let iconHour1 = data.hourly[1].weather[0].icon;
//     let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
//     document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

//     // Hour2
//     let iconHour2 = data.hourly[2].weather[0].icon;
//     let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
//     document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

//     // Hour3
//     let iconHour3 = data.hourly[3].weather[0].icon;
//     let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
//     document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

//     // Hour4
//     let iconHour4 = data.hourly[4].weather[0].icon;
//     let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
//     document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

//     // Hour5
//     let iconHour5 = data.hourly[5].weather[0].icon;
//     let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
//     document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

//     // Backgrounds
//     switch (main) {
//       case "Snow":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
//         break;
//       case "Clouds":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
//         break;
//       case "Fog":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
//         break;
//       case "Rain":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
//         break;
//       case "Clear":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//         break;
//       case "Thunderstorm":
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
//         break;
//       default:
//         document.getElementById("wrapper-bg").style.backgroundImage =
//           "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//         break;
//     }
//   });
