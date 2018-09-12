console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    divhook.innerHTML = stringToPrint;
};

printToDom('band-name', 'Print to Dom function works');

// TOUR PAGE OBJECT 

let tourDates = {
    date: ["September 11 2018", "September 12 2018", "September 13 2018"],
    location: ["Los Angelos", "Nashville", "Atlanta"],
    venue: ["Staples Center", "Georgia Dome", "Mercedes Benz Stadium" ],
    tickets: ["SOLD OUT", "Staples Center", "Staples Center"]
};

const tourStringBuilder = () => {
    let theString = ''; 
    for (let i = 0; i < tourDates.length; i++) {
        theString += `<div class="tour-styling">`
        theString += `<h2>${tourDates.[i]date</h2>`;
        theString += `<h2>${tourDates.[i]location}</h2>`;
        theString += `<h2>${tourDates.[i]venue}</h2>`;
        theString += `<h2>${tourDates.[i]tickets}</h2>`;
        theString += `</div>`;
    }
    printToDom("tour-dates", theString);
};

tourStringBuilder();