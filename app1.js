document.addEventListener('DOMContentLoaded', function () {
    let inputTemperature = document.getElementById("degree");
    let selectTemperature = document.getElementById("temp-type");
    let outputElement = document.getElementById("output");
    let timeNow = document.getElementById("time");

    document.getElementById("convert-btn").addEventListener("click", function () {
        let selectedValue = selectTemperature.value;
        console.log(selectedValue);
        console.log(inputTemperature);
        let convertedTemp = 0;
        if(selectedValue === 'celsius'){
            convertedTemp = (9*inputTemperature.value + 160)/5;
            outputElement.textContent = `${convertedTemp} F`;
        }else if(selectedValue === 'fahrenheit'){
            convertedTemp = (5*inputTemperature.value - 160)/9;
            outputElement.textContent = `${convertedTemp} °C`;
        }else{
            outputElement.textContent = `Please choose proper temperature`;
        }
        
    });

    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let currentTime = "";
    if(hour>12){
        if(minutes<10){
            currentTime = (hour-12) + ":0" + minutes + " PM";
        }else{
            currentTime = (hour-12) + ":" + minutes + " PM";
        }
    }else{
        if(minutes<10){
            currentTime = hour + ":0" + minutes + " AM";
        }else{
            currentTime = hour + ":" + minutes + " AM";
        }
    }
    timeNow.innerText = currentTime;

console.log(dateTime)
});
