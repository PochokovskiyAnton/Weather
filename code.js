const inpCity = document.getElementsByTagName("input")[0];
const btnGetWaether = document.getElementsByTagName("button")[0];
const mestiDiv = document.getElementsByClassName("mesto");
const timeDiv = document.getElementsByClassName("time")[0];
const circle = document.querySelector('.PogodaNow')
const mainImg = document.querySelector('img')
const hourlyforecast = document.querySelector("body > div > div.pogodaNaDen")
const daylyForecast = document.querySelector("body > div > div.pogodaNaWeek")

function clocks() {
    let data = new Date()
    timeDiv.innerHTML = data.toLocaleDateString('en-UK',{weekday:'long', day:'2-digit', month:'long', year:'numeric' })
}

btnGetWaether.addEventListener("click",()=>{
        getWeather(inpCity.value);
        console.log(inpCity.value);
});

async function getWeather(place) {
    const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=bf9d673488df4611ad6162034212710&q=${place}&num_of_days=5&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    render(data)
}

function date3(date) {
    let datee = new Date(date)
    return(datee.toLocaleDateString('en-US',{weekday:'long', day:'numeric', month:'short'}))
}

function renderHourly(data) {
    let date = new Date()
    switch (date.getHours()) {
        case 0: case 1: case 2:
            hourlyforecast.children[0].children[0].innerHTML = '3:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[1].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[1].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '6:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[2].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[2].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '9:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[3].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[3].tempC + '°'
            break;
        case 3: case 4: case 5:
            hourlyforecast.children[0].children[0].innerHTML = '6:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[2].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[2].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '9:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[3].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[3].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '12:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[4].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[4].tempC + '°'
            break;
        case 6: case 7: case 8:
            hourlyforecast.children[0].children[0].innerHTML = '9:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[3].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[3].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '12:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[4].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[4].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '15:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[5].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[5].tempC + '°'
            break;
        case 9: case 10: case 11:
            hourlyforecast.children[0].children[0].innerHTML = '12:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[4].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[4].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '15:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[5].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[5].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '18:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[6].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[6].tempC + '°'
            break;
        case 12: case 13: case 14:
            hourlyforecast.children[0].children[0].innerHTML = '15:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[5].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[5].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '18:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[6].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[6].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '21:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[7].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[7].tempC + '°'
            break;   
        case 15: case 16: case 17:
            hourlyforecast.children[0].children[0].innerHTML = '18:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[6].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[6].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '21:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[7].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[7].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '00:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[0].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[0].tempC + '°'
            break;
        case 18: case 19: case 20:
            hourlyforecast.children[0].children[0].innerHTML = '21:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[7].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[7].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '00:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[0].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[0].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '3:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[1].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[1].tempC + '°'
            break;
        case 21: case 22: case 23:
            hourlyforecast.children[0].children[0].innerHTML = '00:00'
            hourlyforecast.children[0].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[0].weatherCode}.png`
            hourlyforecast.children[0].children[2].innerHTML = data.data.weather[0].hourly[0].tempC + '°'
            hourlyforecast.children[1].children[0].innerHTML = '3:00'
            hourlyforecast.children[1].children[1].children[0].src = `./64x64/night/${data.data.weather[0].hourly[1].weatherCode}.png`
            hourlyforecast.children[1].children[2].innerHTML = data.data.weather[0].hourly[1].tempC + '°'
            hourlyforecast.children[2].children[0].innerHTML = '9:00'
            hourlyforecast.children[2].children[1].children[0].src = `./64x64/day/${data.data.weather[0].hourly[3].weatherCode}.png`
            hourlyforecast.children[2].children[2].innerHTML = data.data.weather[0].hourly[3].tempC + '°'
            break;
        default:
            break;
    }
    
}
getWeather('minsk')

function render(data) {
    clocks()
    circle.children[0].innerHTML = data.data.current_condition[0].temp_C
    circle.children[1].innerHTML = `${data.data.weather[0].maxtempC}°/${data.data.weather[0].mintempC}°`
    circle.children[2].innerHTML = data.data.current_condition[0].weatherDesc[0].value
    mainImg.src = `./64x64/day/${data.data.current_condition[0].weatherCode}.png`
    daylyForecast.children[2].children[0].innerHTML = date3(data.data.weather[2].date)

    renderHourly(data)

    for (let i = 0; i < 3; i++) {
        daylyForecast.children[i].children[1].children[0].src=`./64x64/day/${data.data.weather[i].hourly[4].weatherCode}.png`
        daylyForecast.children[i].children[2].innerHTML = `${data.data.weather[i].maxtempC}°/${data.data.weather[i].mintempC}°`
    }
}












