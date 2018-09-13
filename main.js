console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    if (divhook !== null) {
        divhook.innerHTML = stringToPrint; 
    }
};

printToDom('band-name', 'Print to Dom function works');

// TOUR PAGE ARRAY

let tourDates = [
    {
        festival: 'Wicked Jazz Sounds Festival',
        date: 'June 24 2019',
        location: 'Amsterdam, Netherlands',
        venue: 'NDSM Docklands',
        tickets: 'http://wickedjazzsoundsfestival.com/'
    },
    {
        festival: 'Jazz à Vienne',        
        date: 'June 28 2019',
        location: 'Vienne, Isère, France',
        venue: 'The Antique Theater',
        tickets: 'https://www.jazzavienne.com/en/ticketing'
    },
    {
        festival: 'Montreux Jazz Festival',                
        date: 'June 29 2019',
        location: 'Jersey City',
        venue: 'Montreux Jazz Lab',
        tickets: 'https://www.montreuxjazzfestival.com/en/programl'
    },
    {
        festival: 'Django Reinhardt Festival',                
        date: 'July 2 2019',
        location: 'Samois-sur-Seine, France',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Gent Jazz Festival',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Love Supreme Jazz Festival',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'North Sea Jazz Festival',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Umbria Jazz',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Jazz Middelheim',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Oslo Jazzfestival',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
];

const tourStringBuilder = () => {
    let newString = '';
    for (let i = 0; i < tourDates.length; i++) {
        newString += `<h1>${tourDates[i].festival}</h1>`;
        newString += `<h2>${tourDates[i].date}</h2>`;
        newString += `<h2>${tourDates[i].location}</h2>`;
        newString += `<h3>${tourDates[i].venue}</h3>`;
        newString += `<a href="${tourDates[i].tickets}" target="_blank"><button>Tickets</button></a>`;
    }
    printToDom('tour-dates', newString);
};

tourStringBuilder();


