const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const WeatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () =>{

    const APIKey = '93252b6042ceec870d909732f78fd0bb';
    const city = document.querySelector('.search-box input').ariaValueMax;

    if (city === '')
        return;

    fetch ('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}') .then(response => response.json()).then
        (json => {

            if(json.cod === '404'){
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                WeatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;

            }



        })

}

)