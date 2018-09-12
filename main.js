console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    divhook.innerHTML = stringToPrint;
};

// Start discography object
const discography = {
    art: ['https://images-na.ssl-images-amazon.com/images/I/91WkS-FlHKL._SX522_.jpg', 'https://yt3.ggpht.com/a-/AN66SAwX5j4kWGCl1EJ6pqjhb79hSs8V7gTsNIX77A=s288-mo-c-c0xffffffff-rj-k-no', 'https://www.getdigital.eu/web/getdigital/gfx/products/__generated__resized/1100x1100/helloworld_poster.jpg', 'https://discuss.as3lang.org/uploads/default/original/1X/9e1b0c4c4f34af307ff87e135b9faff9bb218935.png'],
    albums: ['For Richard the Plastic Dinosaur, Wherever He May Be', 'Infinite Loop', 'Int Main ()', 'Push 2 Master'],
    songs: 
    [
        {  
            album: 'For Richard the Plastic Dinosaur, Wherever He May Be', 
            song:[
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
            album: 'Infinite Loop',
            song:[
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
            album: 'Int Main ()',
            song: [
                'Bear Stix',
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
            album: 'Push 2 Master',
            song: [
                'TI-86 4 Lyf',
                'Give Me Ramen or Give Me Death',
                'Cipher',
                'Splinters',
                'Panic!',
                'Smashed To Pieces',
                '11 PM on a Friday Night',
                'Drum solo',
                'TI-2000',
                'Coda'
            ]
        }
    ]
};

console.log(discography.songs[2].song[3]);

