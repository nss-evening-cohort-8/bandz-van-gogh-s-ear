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

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

//Start Biography page
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

//biographyStringBuilder();

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
                'No Exit Condition'
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
                'Falling Into Infinity',
                'The Void',
                'Darkness Becomes Me',
                'Reboot',
                'For Loop Jam - Live version',
                'The Void - Live version'
        ]
    },
    {
        art: 'https://www.getdigital.eu/web/getdigital/gfx/products/__generated__resized/1100x1100/helloworld_poster.jpg',
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
    for (i = 0; i < discography.length; i++) {
        newString += `<div class="band-albums">`;
        newString += `  <img src="${discography[i].art}"></img>`;
        newString += `  <h3 class="album-title">${discography[i].albums}</h3>`;
        newString += `  <ol class="songs-list">`;
        for (j = 0; j < discography[i].songs.length; j++) {
            newString += `      <li>${discography[i].songs[j]}</li>`;
        }
        newString += `  </ol>`;
        newString += `</div>`;
    }
    printToDom(newString, 'discorgaphy-hook');
}

discoBuilder();

console.log(discoArrKeys);