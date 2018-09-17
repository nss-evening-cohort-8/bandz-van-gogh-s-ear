// Objects
const vanGoghsEar = [{
    name: "Van Gogh's Ear",
    type: "Nashville Jazz Collective",
    image:  "./pics/vge.jpg",
    biography:
    `To describe Van Gogh’s Ear as simply a jazz group would be to commit 
    an egregious disservice to what VGE actually is. Less a band and more 
    an esoteric think-tank, VGE has found its niche within the vast and 
    inundated music scene of Nashville. And while jazz may not be the first 
    musical style to come to mind when one thinks of Nashville, VGE is changing 
    that, and at a rapid pace.<br><br>
    VGE sprang forth from a void, from the empty pocket of nothingness that came 
    before a local jazz scene in Nashville. Well before Rudie’s Jazz Room became 
    a thing—and even before Tuesday night Jazz Jams at Fat Bottom Brewery—there 
    were four ordinary guys (Charles, Colin, Dylan, & Marshall) who decided to 
    channel their drive to solving global problems into redefining an entire genre 
    of music. Countless hours were spent in Dylan’s basement fine-tuning their 
    craft until VGE was ready for public presentation.<br><br>
    After a few less-than-successful gigs in middle Tennessee, the band was on the 
    verge of dissolving. It was in that moment that Charles had a monumental 
    epiphany that would alter the course of music entirely.  He reasoned that since 
    music is math and math is logic, one could theoretically concoct the perfect 
    song—and likewise, the perfect album—by setting pure logic to rhythm. And with 
    this new direction, VGE would go on to construct musical compositions with 
    unfettered deliberation—each musical note premeditated, each hook and drum beat 
    pre-planned. The results were unlike anything anyone had ever heard.<br><br>
    If you plan to attend a VGE concert, be prepared to experience an awakening from 
    deep within. While Charles and Colin hold down the bass and rhythm, Dylan 
    intersperses raucous scat vocals with a bold harmonica. And through it all, 
    Marshall’s tenor saxophone meets Dylan’s melodies in perfect counterpoint. It is 
    as if the band is playing several interweaving songs at the same time, and the 
    effect serves only to further rattle a mind that’s already reeling from the 
    innovative melodic arrangements.<br><br>
    With four albums now under their belt, VGE will be heading to Europe. Check 
    tour dates to find them at a venue near you!`
}];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    if (selectedDiv !== null) {
        selectedDiv.innerHTML = stringToPrint;
    }
 };

const biographyStringBuilder = () => {
    let newString = '';
    for (let i=0; i<vanGoghsEar.length; i++) {
        newString +=`<div class="band">`;
        newString +=    `<h1>${vanGoghsEar[i].name}</h1>`;
        newString +=    `<h3>${vanGoghsEar[i].type}</h3>`;
        newString += `</div>`
        newString += `<div class="bio">`;
        newString +=    `<img class=band-photo src="${vanGoghsEar[i].image}"></img>`;
        newString +=    `<p>${vanGoghsEar[i].biography}</p>`;
        newString +=`</div>`;
    }
    printToDom(newString, "main-content");
};

biographyStringBuilder();


// Begin Band Bios
const bandMembers = [
    {
        name: "Dylan",
        instrument: "Blues Harp / Scat Vocals",
        bio: `Dylan Murry, known as Dangerous Dylan, is an American 
        blues living-legend, scat singer, and songwriter. His 
        revolutionary approach to the harmonica and continuing 
        impact on succeeding generations has earned comparisons for 
        him to such seminal artists as Django Reinhardt, Charlie 
        Parker and Jimi Hendrix. His virtuosity and musical 
        innovations fundamentally altered many listeners' 
        expectations of what was possible on blues harmonica. He was 
        inducted into The Rock and Roll Hall of Fame in 2008 in the 
        category Frontman, the only artist to be inducted specifically 
        as a harmonica player. He co-founded Van Gogh's Ear and has 
        never looked back.`,
        img: "./pics/Dylan.jpg"
    },
    {
        name: "Colin",
        instrument: "Drum Kit",
        bio: `Colin, hails from LA. No, not Los Angeles, but Louisiana.  
        Raised on Mississippi Delta Blues, and Dixie Land Jazz he had 
        a deep longing to express himself through music.  At age 5, his 
        parents bought him his first drum kit from Sears & Roebuck that 
        was guaranteed not to break.  Playing to old blues records, he 
        honed his skill.  Working at his father's crawdad farm, he 
        scrimped and saved to by a proper drum kit.  Working and 
        practicing, practicing and working, he became a drumming force 
        to be reckoned with and saved enough money to relocate to 
        Nashville, TN.  With $357.87 in his pocket and a dream in his 
        heart, he set out on a journey that would forever change his life. 
        By pure chance, or providence, he bumped into 3 other musicians 
        at a coffee house also with a dream.  Striking up a conversation 
        with Dylan, Charles and Marshall, they formed a bond and a band 
        that would forever change the Jazz world.  Welcome to Van Gogh's Ear.`,
        img: "./pics/Colin.jpg"
    },
    {
        name: "Charles",
        instrument: "Bass",
        bio: `Charles Woodring, aka: “The Professor”,  is one of 
        five people in history to have received a Nobel Peace Prize, 
        both in recognition of his ground-breaking contributions to the 
        field of kymatology, the study of waves. Having built a 
        reputation for himself in the science community, he now endeavors 
        to win a third Nobel Peace Prize, but this time for song-writing. 
        And so Charles found 3 like-minded individuals to help spearhead the 
        musical experience that is Van Gogh’s Ear.`,
        img: "./pics/Charles.jpg"
    },
    {
        name: "Marshall",
        instrument: "Saxophone",
        bio: `The Sax Player.`,
        img: "./pics/Marshall.jpg"
    },
];

const bandMemberStringBuilder = () => {
	let newString = '';
	for(let i=0; i<bandMembers.length; i++) { 
    newString += `<div class = "bandmem">`;
    newString +=    `<div class = "bandmem-img">`;
    newString +=        `<img src="${bandMembers[i].img}"></img>`;
    newString +=    `</div>`;
    newString +=    `<div class = "bandmem-bio">`;
    newString +=	    `<h3>${bandMembers[i].name}</h3>`;
    newString +=        `<h4>${bandMembers[i].instrument}</h4>`;
    newString +=	    `<p>${bandMembers[i].bio}</p>`;
    newString +=    `</div>`;
    newString += `</div>`; 
}	
	printToDom(newString, "band-members");
};
bandMemberStringBuilder();
// End Band Bios

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
        location: 'Montreux, Switzerland',
        venue: 'Montreux Jazz Lab',
        tickets: 'https://www.montreuxjazzfestival.com/en/program'
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
        location: 'Glynde Place, United Kingdom',
        venue: 'Main Stage',
        tickets: 'https://lovesupremefestival.com/tickets#YPPIf0I2RcbOXsdY.97'
    },
    {
        festival: 'North Sea Jazz Festival',                
        date: 'July 13 2019',
        location: 'Ahoy Rotterdam, Netherlands',
        venue: 'Ahoy Venue',
        tickets: 'https://www.northseajazz.com/en/tickets/tickets-2019/'
    },
    {
        festival: 'Umbria Jazz',                
        date: 'July 20 2019',
        location: 'Perugia, Italy',
        venue: 'Main Stage',
        tickets: 'http://www.umbriajazz.com/pagine/tickets'
    },
    {
        festival: 'Jazz Middelheim',                
        date: 'August 9 2019',
        location: 'Antwerp, Belgium',
        venue: 'Main Stage',
        tickets: 'https://jazzmiddelheim.be/nl/tickets'
    },
    {
        festival: 'Oslo Jazzfestival',                
        date: 'August 14 2019',
        location: 'Oslo, Norway',
        venue: 'Main Stage',
        tickets: 'https://oslojazz.no/'
    },
];

const tourStringBuilder = () => {
    let newString = '';
    newString += '<div class="tour-header-container">';
    newString += '<div class="tour-header">FESTIVAL</div>';
    newString += '<div class="tour-header">DATE</div>';
    newString += '<div class="tour-header">LOCATION</div>';
    newString += '<div class="tour-header">VENUE</div>';
    newString += '<div class="tour-header"></div>';
    newString += '</div>';
    for (let i = 0; i < tourDates.length; i++) {
        newString += `<div class="tour-container">`;
        newString += `<div class="tour-div">${tourDates[i].festival}</div>`;
        newString += `<div class="tour-div">${tourDates[i].date}</div>`;
        newString += `<div class="tour-div">${tourDates[i].location}</div>`;
        newString += `<div class="tour-div">${tourDates[i].venue}</div>`;
        newString += `<a class="tour-div" href="${tourDates[i].tickets}" target="_blank"><button class="cw-button">TICKETS</button></a>`;
        newString += `</div>`;
    }
    printToDom(newString, 'tour-dates');
};

tourStringBuilder();


// Start discography object
const discography = [
    {
        art: 'https://images-na.ssl-images-amazon.com/images/I/91WkS-FlHKL._SX522_.jpg',
        albums: 'For Richard the Plastic Dinosaur, Wherever He May Be',
        songs: [
                'Intro',
                'The Decipherment Of Linear B',
                'For Richard The Plastic Dinosaur, Wherever He May Be',
                'Git Gud',
                'If True Report False',
                'Shoshin',
                'Ode to Elizabeth Sanger',
                'Nuggetizer3',
                'All The Things You Know',
                'Reboot'
            ]
    },
    {
        art: 'https://yt3.ggpht.com/a-/AN66SAwX5j4kWGCl1EJ6pqjhb79hSs8V7gTsNIX77A=s288-mo-c-c0xffffffff-rj-k-no',
        albums: 'Infinite Loop',
        songs:[
                'Get Me Off This Ride',
                'Alt + Ctrl + Delete',
                'No End In Sight',
                'For Loop Jam',
                'No Exit Condition',
                'Falling Into Infinity',
                'The Void',
                'Darkness Becomes Me',
                'For Loop Jam - Live version',
                'The Void - Live version',
        ]
    },
    {
        art: 'https://i.redd.it/ezr1upzdhmjz.jpg',
        albums: 'Hello World',
        songs: [
            'Int Main ()',
            'Broadway Women',
            'Midnight at Steak n Shake',
            'Street Pharmacist',
            'Windows 95',
            'Soccer Circus',
            'Percy Priest Romance',
            'Skin Rash Jam',
            'Illusions of Sanity',
            'Hymn for the Lost Generation'
        ]
    },
    {
        art: 'https://discuss.as3lang.org/uploads/default/original/1X/9e1b0c4c4f34af307ff87e135b9faff9bb218935.png',
        albums: 'Push 2 Master',
        songs: [
            'TI-86 4 Lyf',
            'Give Me Ramen or Give Me Death',
            'Cipher',
            'Splinters',
            'Panic!',
            'Smashed To Pieces',
            '11 PM on a Friday Night',
            'Drum solo',
            'TI-2000',
            'Van Gogh\'s Ear Forever'
        ]
    }
]

const discoArrKeys = Object.keys(discography[0]);

const discoBuilder = () => {
    let newString= ``;
    newString += `<h1 class="disc-title">Discography</h1>`
    //Loops through each album object in the total array
    for (i = 0; i < discography.length; i++) {
        newString += `<div class="band-albums">`;
        newString += `  <img src="${discography[i].art}"></img>`;
        newString += `  <div class="disc-text-content">`
        newString += `      <h3 class="album-title">${discography[i].albums}</h3>`;
        newString += `      <ol class="songs-list" id="${discography[i].songs[1]}">`;
        //Loops through each song within an album's song array
        for (j = 0; j < discography[i].songs.length; j++) {
            newString += `          <li>${discography[i].songs[j]}</li>`;
        }
        newString += `      </ol>`;
        newString += `      <button class="d-button"></button>`
        newString += `  </div>`
        newString += `</div>`;
    }
    printToDom(newString, 'discorgaphy-hook');
}

discoBuilder();


//test function

const newFunct = (id) => {
    let invisible = 'songs-list';
    let visible = 'transition';
    let newClass = id.className;
    if (newClass === invisible) {
        newClass = visible;
    } else if (newClass == visible) {
        newClass = invisible;
    }
    id.className = newClass;
    console.log('functioning');
}

const olSelector = [document.getElementById('The Decipherment Of Linear B'), document.getElementById('Alt + Ctrl + Delete'), document.getElementById('Broadway Women'), document.getElementById('Give Me Ramen or Give Me Death')];
const buttonSelector = [olSelector[0].parentNode.childNodes[5],olSelector[1].parentNode.childNodes[5],olSelector[2].parentNode.childNodes[5],olSelector[3].parentNode.childNodes[5]] || undefined;
if (buttonSelector !== null) {
    buttonSelector[0].addEventListener('click', function(){
        newFunct(olSelector[0]);
    })
    buttonSelector[1].addEventListener('click', function(){
        newFunct(olSelector[1]);
    })
    buttonSelector[2].addEventListener('click', function(){
        newFunct(olSelector[2]);
    })
    buttonSelector[3].addEventListener('click', function(){
        newFunct(olSelector[3]);
    })
}