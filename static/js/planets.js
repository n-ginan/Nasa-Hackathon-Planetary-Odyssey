//buttons
let nextButton = document.getElementsByClassName('fa-greater-than')[0];
let previousButton = document.getElementsByClassName('fa-less-than')[0];


//planet names
let currentPlanetName = document.getElementsByClassName('planetName');
let previousPlanetName = document.getElementsByClassName('previousPlanetName');
let nextPlanetName = document.getElementsByClassName('nextPlanetName');



let planetNames =[
    'Proxima Centauri b',
    'wolf 1061 c',
    'GJ 1002 b',
    'Epsilon eridani b',
    'Gliese 832 c',
    'TOI-1231 b',
]

let currentPlanetIndex = 0;

//planet details
let distance = document.getElementsByClassName('distance');
let year = document.getElementsByClassName('yearDiscovered')
let type = document.getElementsByClassName('planetType');
let mass = document.getElementsByClassName('planetMass');
let radius = document. getElementsByClassName('orbitalRadius');
let period = document.getElementsByClassName('orbitalPeriod');

let planetDetails = [
    {
        planetName:'Proxima Centauri b',
        planetDistance:'4 lightyears away from earth',
        yearDiscovered:'2016',
        planetType:'Super Earth',
        planetMass:'1.07 Earths',
        orbitalRadius:'0.04856 AU',
        orbitalPeriod:'11.2 days',
    },
    {
        planetName:'wolf 1061 c',
        planetDistance:'14 lightyears away from Earth',
        yearDiscovered:'2015',
        planetType:'1.66 xx Earth (approximately)',
        planetMass:'3.41 Earths',
        orbitalRadius:'0.089',
        orbitalPeriod:'17.9 days',
    },
    {
        planetName:'GJ 1002 b',
        planetDistance:'16 light years from Earth',
        yearDiscovered:'2022',
        planetType:'Super Earth',
        planetMass:'1.08 Earths',
        orbitalRadius:'0.0457 AU',
        orbitalPeriod:'10.3 days',
    },
    {
        planetName:'Epsilon eridani b',
        planetDistance:'11 light years from Earth',
        yearDiscovered:'2000',
        planetType:'1.25 x Jupiter (Approximately)',
        planetMass:'0.66 Jupiter',
        orbitalRadius:'3.53 .AU',
        orbitalPeriod:'7.3 years',
    },
    {
        planetName:'Gliese 832 c',
        planetDistance:'16 light years from Earth',
        yearDiscovered:'2014',
        planetType:'Super Earth',
        planetMass:'5.04 Earths',
        orbitalRadius:'0.163 AU',
        orbitalPeriod:'35.86 days',
    },
    {
        planetName:'TOI-1231 b',
        planetDistance:'90 lightyears away from Earth',
        yearDiscovered:'2021',
        planetType:'Neptune-like',
        planetMass:'15.4 Earths',
        orbitalRadius:'0.1288 AU',
        orbitalPeriod:'24.2 days',
    },
]

//planet Pictures
let planetPic = document.getElementsByClassName("planetPic")[0];
let previousPlanetPic = document.getElementsByClassName("previousPlanetPic")[0];
let nextPlanetPic = document.getElementsByClassName("nextPlanetPic")[0];

let planetPictures = [
    '/static/res/proxima_centauri_b.PNG',
    '/static/res/planet3.png',
    '/static/res/planet4.png',
    '',
    '',
    '',
]

// Buttons functionality
nextButton.addEventListener('click', function(){
    currentPlanetIndex = (currentPlanetIndex + 1) % planetNames.length;
    currentPlanetName[0].textContent = planetNames[currentPlanetIndex];
    previousPlanetName[0].textContent = planetNames[(currentPlanetIndex - 1 + planetNames.length) % planetNames.length];
    nextPlanetName[0].textContent = planetNames[(currentPlanetIndex + 1) % planetNames.length];
    distance[0].textContent = planetDetails[currentPlanetIndex].planetDistance;
    year[0].textContent = planetDetails[currentPlanetIndex].yearDiscovered;
    type[0].textContent = planetDetails[currentPlanetIndex].planetType;
    mass[0].textContent = planetDetails[currentPlanetIndex].planetMass;
    radius[0].textContent = planetDetails[currentPlanetIndex].orbitalRadius;
    period[0].textContent = planetDetails[currentPlanetIndex].orbitalPeriod;
    planetPic.setAttribute("src", planetPictures[currentPlanetIndex]);
    nextPlanetPic.setAttribute("src", planetPictures[currentPlanetIndex + 1]);
    previousPlanetPic.setAttribute("src", planetPictures[currentPlanetIndex -1]);
    document.documentElement.style.setProperty('--name', '"' +planetNames[currentPlanetIndex] +'"');
    displayDetailsWithDelay();
});

previousButton.addEventListener('click', function(){
    currentPlanetIndex = (currentPlanetIndex - 1 + planetNames.length) % planetNames.length;
    currentPlanetName[0].textContent = planetNames[currentPlanetIndex];
    previousPlanetName[0].textContent = planetNames[(currentPlanetIndex - 1 + planetNames.length) % planetNames.length];
    nextPlanetName[0].textContent = planetNames[(currentPlanetIndex + 1) % planetNames.length];
    distance[0].textContent = planetDetails[currentPlanetIndex].planetDistance;
    year[0].textContent = planetDetails[currentPlanetIndex].yearDiscovered;
    type[0].textContent = planetDetails[currentPlanetIndex].planetType;
    mass[0].textContent = planetDetails[currentPlanetIndex].planetMass;
    radius[0].textContent = planetDetails[currentPlanetIndex].orbitalRadius;
    period[0].textContent = planetDetails[currentPlanetIndex].orbitalPeriod;
    planetPic.setAttribute("src", planetPictures[currentPlanetIndex]);
    nextPlanetPic.setAttribute("src", planetPictures[currentPlanetIndex + 1]);
    previousPlanetPic.setAttribute("src", planetPictures[currentPlanetIndex -1]);
    document.documentElement.style.setProperty('--name', '"' +planetNames[currentPlanetIndex] +'"');
    displayDetailsWithDelay();
}
);

function displayDetailsWithDelay() {
    // Clear existing details while waiting
    distance[0].textContent = "";
    year[0].textContent = "";
    type[0].textContent = "";
    mass[0].textContent = "";
    radius[0].textContent = "";
    period[0].textContent = "";

    // Use setTimeout to delay the update
    setTimeout(function() {
        distance[0].textContent = planetDetails[currentPlanetIndex].planetDistance;
        year[0].textContent = planetDetails[currentPlanetIndex].yearDiscovered;
        type[0].textContent = planetDetails[currentPlanetIndex].planetType;
        mass[0].textContent = planetDetails[currentPlanetIndex].planetMass;
        radius[0].textContent = planetDetails[currentPlanetIndex].orbitalRadius;
        period[0].textContent = planetDetails[currentPlanetIndex].orbitalPeriod;
    }, 500);  // Adjust delay time (2000ms = 2 seconds)
}
