console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    divhook.innerHTML = stringToPrint;
};

// printToDom('band-name', 'Print to Dom function works');

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
        date: 'tomorrow',
        location: 'Birmingham',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Montreux Jazz Festival',                
        date: 'yesterday',
        location: 'Jersey City',
        venue: 'Home',
        tickets: 'sold out'
    },
    {
        festival: 'Django Reinhardt Festival',                
        date: 'yesterday',
        location: 'Jersey City',
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
        newString += `<h3>${tourDates[i].tickets}</h3>`;
    }
    printToDom('tour-dates', newString);
};

tourStringBuilder();

