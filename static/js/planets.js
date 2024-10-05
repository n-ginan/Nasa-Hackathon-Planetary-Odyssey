
let nextButton = document.getElementsByClassName('fa-greater-than')[0];
let previousButton = document.getElementsByClassName('fa-less-than')[0];

let planetName = document.getElementsByClassName('planetName');

let planetNames =[
    'GJ 1002 b',
    'Venus',
    'Earth',
    'Mars'
]

let currentPlanetIndex = 0;

nextButton.addEventListener('click', function(){
    currentPlanetIndex = (currentPlanetIndex + 1) % planetNames.length;
    planetName[0].textContent = planetNames[currentPlanetIndex];
});

previousButton.addEventListener('click', function(){
    currentPlanetIndex = (currentPlanetIndex - 1 + planetNames.length) % planetNames.length;
    planetName[0].textContent = planetNames[currentPlanetIndex];
});

console.log('planetNames[currentPlanetIndex]');
