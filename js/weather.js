

function onGeoOk(position){
    const API_KEY ="f4e0a781af482e2c07b7b1472c0259aa";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then((response) => response.json())
    .then((data)=>{
        const weatherContainer = document.querySelector(".weather span:first-child")
        const cityContainer = document.querySelector(".weather span:last-child")
        const name =data.name;
        const weather = data.weather[0].main;
        weatherContainer.innerText =`날씨:${weather}`;
        cityContainer.innerText =`도시:${name}`;
    });
    

}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
      
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
