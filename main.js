console.log("I am linked");

const printToDom = (divId, stringToPrint) => {
    let divhook = document.getElementById(divId);
    divhook.innerHTML = stringToPrint;
};

printToDom('band-name', 'Print to Dom function works');