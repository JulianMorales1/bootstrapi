let img = document.querySelector('#image');
let buttonOne = document.querySelector('#button');

buttonOne.addEventListener('click',function(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data) => data.json())
    .then((response) => {
        img.src = response.message
    })
    .catch((error) => console.log(error));})

///////////////////////////////////////////////////////////////////////////////

let buttonTwo = document.querySelector('#buttonTwo');
let textInput = document.querySelector('#text');

let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let description = document.querySelector('#description')

buttonTwo.addEventListener('click',function(){
    let city = textInput.value
    fetch('https://goweather.herokuapp.com/weather/' + city)
    .then(function(httpResponse){
        
        return httpResponse.json();
    })
    .then(function(data) {
        temp.innerText = data.temperature;
        wind.innerText = data.wind;
        description.innerText = data.description;
    })
})
