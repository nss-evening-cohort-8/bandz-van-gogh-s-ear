// Objects
const vanGoghsEar = [{
    name: "Van Gogh's Ear",
    type: "Nashville Jazz Collective",
    image: "https://onerecordperday.files.wordpress.com/2013/02/day48-plot.jpg",
    biography:
    `To describe Van Gogh’s Ear as simply a jazz group would be to commit 
    an egregious disservice to what VGE actually is. Less a band and more 
    an esoteric think-tank, VGE has found its niche within the vast and 
    inundated music scene of Nashville. And while jazz may not be the first 
    musical style to come to mind when one thinks of Nashville, VGE is changing 
    that, and at a rapid pace.<br>
    VGE sprang forth from a void, from the empty pocket of nothingness that came 
    before a local jazz scene in Nashville. Well before Rudie’s Jazz Club became 
    a thing—and even before Tuesday night Jazz Jams at Fat Bottom Brewery—there 
    were four ordinary guys (Charles, Colin, Dylan, & Marshall) who decided to 
    channel their drive to solving global problems into redefining an entire genre 
    of music. Countless hours were spent in Dylan’s basement fine-tuning their 
    craft until VGE was ready for public presentation.<br>
    After a few less-than-successful gigs in middle Tennessee, the band was on the 
    verge of dissolving. It was in that moment that Charles had a monumental 
    epiphany that would alter the course of music entirely.  He reasoned that since 
    music is math and math is logic, one could theoretically concoct the perfect 
    song—and likewise, the perfect album—by setting pure logic to rhythm. And with 
    this new direction, VGE would go on to construct musical compositions with 
    unfettered deliberation—each musical note premeditated, each hook and drum beat 
    pre-planned. The results were unlike anything anyone had ever heard.<br>
    If you plan to attend a VGE concert, be prepared to experience an awakening from 
    deep within. While Charles and Colin hold down the bass and rhythm, Dylan 
    intersperses raucous scat vocals with a bold harmonica. And through it all, 
    Marshall’s tenor saxophone meets Dylan’s melodies in perfect counterpoint. It is 
    as if the band is playing several interweaving songs at the same time, and the 
    effect serves only to further rattle a mind that’s already reeling from the 
    innovative melodic arrangements.<br>
    With four albums now under their belt, VGE will be heading to Europe. Check 
    tour dates to find them at a venue near you!`
}];

let biographyStringBuilder = () => {
    let newString = '';
    for (let i=0; i<vanGoghsEar.length; i++) {
        newString +=`<div class="band">`;
        newString +=    `<h1>${vanGoghsEar[i].name}</h1>`;
        newString +=    `<h3>${vanGoghsEar[i].type}</h3>`;
        newString +=    `<img src="${vanGoghsEar[i].image}"></img>`;
        newString +=    `<p>${vanGoghsEar[i].biography}</p>`;
        newString +=`</div>`;
    }
    printToDom(newString, "main-content");
};

biographyStringBuilder();


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
        venue: 'Fontainebleau, France',
        tickets: 'http://www.festivaldjangoreinhardt.com/en/ticket-office/'
    },
    {
        festival: 'Gent Jazz Festival',                
        date: 'July 5 2019',
        location: 'Ghent, Belgium',
        venue: 'Godshuizenlaan',
        tickets: 'https://gentjazz.com/en/tickets'
    },
    {
        festival: 'Love Supreme Jazz Festival',                
        date: 'July 7 2019',
        location: 'Glynde Place, Glynde, United Kingdom',
        venue: 'Main Stage',
        tickets: 'https://lovesupremefestival.com/tickets#YPPIf0I2RcbOXsdY.97'
    },
    {
        festival: 'North Sea Jazz Festival',                
        date: 'July 13 2019',
        location: 'Ahoy Rotterdam, Rotterdam, Netherlands',
        venue: 'Ahoy Venue',
        tickets: 'https://www.northseajazz.com/en/tickets/tickets-2019/'
    },
    {
        festival: 'Umbria Jazz',                
        date: 'yesterday',
        location: 'Perugia, Italy',
        venue: 'Home',
        tickets: 'http://www.umbriajazz.com/pagine/tickets'
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



