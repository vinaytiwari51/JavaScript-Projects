const apiKey = "0ebd137859ee3339e982913c8031b977";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search Button');



async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
// Check Validation 
if(response.status == 404){
    const div = document.createElement('div');
    const addText = document.createTextNode('Invalid Text : Please enter valid city');
    div.appendChild(addText);
    div.style.color = '#c1121f';
    div.style.padding = "10px";
    div.style.fontSize = '35px';
    div.style.fontWeight = '600';
    
    const container =  document.querySelector('.card-container');
    container.appendChild(div);

    document.querySelector('.weather').style.display = "none";
}
else{
    
    var data = await response.json();

console.log(data);

document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
let img = document.querySelector('.Wheather-img');
// console.log(img.src);
// console.log(data.weather[0].main);
if(data.weather[0].main == 'Rain'){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtSYQU-uYYhfx1q-0yXu6_el3CNVE_2yx9A&s";
}
else if(data.weather[0].main == 'Clear'){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY66W8XvavHEdio0UWymBoT0GkQ3meijNF4g&s";
}
else if(data.weather[0].main == 'Mist'){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6MUanzJRRObscBc0r_Zsh9SNDmFa9vf3_g&s";
}
else if(data.weather[0].main == 'Clouds'){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkBsJ_sOq_8E_Ec-IPtCyUqJro9ZvAN8mpQ&s";
}
else if(data.weather[0].main == 'Strome'){
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkcCFOsP42_hzTdguSCtg4BkcS_o6eU3DBg&s";
}
else{
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmd8Q09TI6lbBAxBVQSbYAI_xAklOOFJgaw&s";
}

document.querySelector('.weather').style.display = "block";
}

}
searchBtn.addEventListener("click",() =>{
    checkWeather(searchInput.value);
})



 


