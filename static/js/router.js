const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href); //use the browser's history api. Will update the url on the browser.
    handleLocation();
};

//html file to display for those paths. 404
const routes = {
    404: "/pages/404.html",
    "/": "index.html",
    "/about": "/pages/planets.html",
    "/contact": "/pages/lorem.html",
};


//handling location change events
const handleLocation = async (event) => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404]; //find desired route or default on a 404 route if it doesn't exist
    const html = await fetch(route).then((data) => data.text()); //loads in html for our rout
    document.getElementById("main-page").innerHTML = html;
};



window.onpopstate = handleLocation;
window.route = route; //gives global access to rout function

handleLocation();
